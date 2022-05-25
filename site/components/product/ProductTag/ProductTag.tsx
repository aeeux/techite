interface ProductTagProps {
  className?: string
  name: string
  price: string
  fontSize?: number
}

const ProductTag: React.FC<ProductTagProps> = ({
  name,
  price,
  className = '',
  fontSize = 20,
}) => {
  return (
    <div className="">
      <h3 className="font-semibold">
        <span
          className=""
          style={{
            fontSize: `${fontSize}px`,
            lineHeight: `${fontSize}px`,
          }}
        >
          {name}
        </span>
      </h3>
      <div className="">{price}</div>
    </div>
  )
}

export default ProductTag
