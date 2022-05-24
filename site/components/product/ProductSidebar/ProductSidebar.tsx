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

interface ProductSidebarProps {
  product: Product
  className?: string
}

const ProductSidebar: FC<ProductSidebarProps> = ({ product, className }) => {
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
      <Text
        className="pb-4 break-words w-full max-w-xl"
        html={product.descriptionHtml || product.description}
      />
      <p className="text-gray-400 text-sm">Gaming PC</p>

<div className="flex items-center space-x-4 my-4">
  <div>
    <div className="">
      <span className="font-bold text-3xl">
        10.000
      </span>
      <span className="text-gray-400 ml-1 mt-1">Kr</span>
    </div>
  </div>
</div>
<div className="md:hidden">
  <div className="group inline-block text-black mb-10">
    <button className="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32">
      <span className="pr-1 font-semibold flex-1">Komponenter</span>
      <span>
        <svg
          className="fill-current h-4 w-4 transform group-hover:-rotate-180
transition duration-150 ease-in-out"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </span>
    </button>
    <ul
      className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
transition duration-150 ease-in-out origin-top min-w-32"
    >
      <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
        Zotac Gaming Gerforce RTX 3080 Ti Trinity OC
      </li>
      <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
        32 GB Kingston Fury Beast DDR5 RAM (2x16 GB)
      </li>
      <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
        Intel i9 12.gen - 16 kerner 3.2 Ghz (5.2 Turbo) Processor{' '}
      </li>
      <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
        Kingston 2 TB NVMe M.2 SSD
      </li>
    </ul>
  </div>
</div>
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
      <div className="mt-6">
        <Collapse title="Beskrivelse">
        Cougar Darkblader X5 kabinet
Intel 12900KF i9 Processor - 16 kerner, 3.2 Ghz base (5.2 Ghz Turbo)
Artic Liquid Freezer II 360 vandkøling
Gigabyte Z690 UD AX bundkort
Zotac Gaming RTX 3070 Ti Trinity OC grafikkort
Kingston 1 TB SSD NVMe
16 GB Kingston Fury Beast DDR5-5600 RAM (2x8 GB)
Corsair RM750x 750W strømforsyning*
        </Collapse>
        <Collapse title="Garanti">
          This is a limited edition production run. Printing starts when the
          drop ends. Reminder: Bad Boys For Life. Shipping may take 10+ days due
          to COVID-19.
        </Collapse>
      </div>
    </div>
  )
}

export default ProductSidebar
