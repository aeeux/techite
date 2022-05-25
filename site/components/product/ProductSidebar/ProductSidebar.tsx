import s from './ProductSidebar.module.css'
import { useAddItem } from '@framework/cart'
import { FC, useEffect, useState } from 'react'
import { ProductOptions } from '@components/product'
import type { Product } from '@commerce/types/product'
import { Button, Text, Rating, Collapse, useUI } from '@components/ui'
import {
  getProductVariant,
  selectDefaultOptionFromProduct,
  SelectedOptions,
} from '../helpers'
import usePrice from '@framework/product/use-price'
import ProductTag from '../ProductTag'

interface ProductSidebarProps {
  product: Product
  className?: string
}

const ProductSidebar: FC<ProductSidebarProps> = ({ product, className }) => {
  const { price } = usePrice({
    amount: product.price.value,
    baseAmount: product.price.retailPrice,
    currencyCode: product.price.currencyCode!,
  })
  const addItem = useAddItem()
  const { openSidebar } = useUI()
  const [loading, setLoading] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({})

  useEffect(() => {
    selectDefaultOptionFromProduct(product, setSelectedOptions)
  }, [product])

  const variant = getProductVariant(product, selectedOptions)
  const addToCart = async () => {
    setLoading(true)
    try {
      await addItem({
        productId: String(product.id),
        variantId: String(variant ? variant.id : product.variants[0]?.id),
      })
      openSidebar()
      setLoading(false)
    } catch (err) {
      setLoading(false)
    }
  }

  return (
    <div className={className}>
      <ProductOptions
        options={product.options}
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
      />
      <h2 className="text-xl md:text-2xl font-semibold mb-4">{product.name}</h2>
      <p className="text-md md:text-xl mb-2">{`${price}`}</p>
      <p className="text-gray-400 text-sm mb-10">Gaming PC</p>

      <div>
        {process.env.COMMERCE_CART_ENABLED && (
          <Button
            aria-label="Add to Cart"
            type="button"
            className={s.button}
            onClick={addToCart}
            loading={loading}
            disabled={variant?.availableForSale === false}
          >
            {variant?.availableForSale === false
              ? 'Not Available'
              : 'Add To Cart'}
          </Button>
        )}
      </div>
      <div className="mt-6 2xl:w-6/12">
        <Collapse title="Beskrivelse">
          <Text
            className="pb-4 break-words w-full max-w-xl"
            html={product.descriptionHtml || product.description}
          />
        </Collapse>
        <Collapse title="Garanti">
        Når du køber en Techite Gaming computer, så udskifter eller montere vi nye komponenter kvit og frit indenfor vores 3 års garanti. Du betaler kun for varen. Der kan i en periode, henover 3 år, opstå et behov for at foretage opgraderinger – f.eks. et nyt grafikkort, mere RAM eller diskplads. Det skal der selvfølgelig være plads til.
        </Collapse>
      </div>
    </div>
  )
}

export default ProductSidebar
