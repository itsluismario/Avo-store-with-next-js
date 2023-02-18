import Link from 'next/link'
import React from 'react'
import { Card, Image } from 'semantic-ui-react'
// import Image from 'next/image'


type ProductListProps = {
    products: TProduct[]
}

const mapProductsToCards = (products: TProduct[]) => 
    products.map(({ name, id, price, image }) => (
    <Link key={id} href={`product/${id}`}>    
        <Card as="a">
            <Image src={image} />
            <Card.Header>{name}</Card.Header>
            <Card.Description>
                $ {price}
            </Card.Description>
        </Card>
    </Link>
    )) 


function ProductList({ products }: ProductListProps) {
  return (
    <Card.Group itemsPerRow={2} stackable>
    {mapProductsToCards(products)}
    </Card.Group>
  )
}

export default ProductList