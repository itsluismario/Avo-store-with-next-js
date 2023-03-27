import Link from 'next/link'
import React from 'react'
import { Card, Image } from 'semantic-ui-react'

type ProductListProps = {
    products: TProduct[]
}


const mapProductsToCards = (products: TProduct[]) =>
  products.map(({ name, id, price, image }) => (
      <Link key={id} href={`/product/${id}`} legacyBehavior>
      <Card
        href={`/product/${id}`}
        as="a"
        header={name}
        image={<Image src={image} width={250} height={250} /> }
        meta={ <Card.Meta style={{ color: 'dimgray' }}>{price}</Card.Meta>}
        key = {id}
      />
      </Link>
  ))

const ProductList = ({ products }: ProductListProps) => (
  <Card.Group itemsPerRow={3} stackable>
    {mapProductsToCards(products)}
  </Card.Group>
)

export default ProductList