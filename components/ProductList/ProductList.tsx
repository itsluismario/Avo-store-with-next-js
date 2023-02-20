import Link from 'next/link'
import React from 'react'
import { Card, Image } from 'semantic-ui-react'

type ProductListProps = {
    products: TProduct[]
}

const mapProductsToCards = (products: TProduct[]) => 
    products.map(({ name, id, price, image }) => (
        //<Link key={id} href={`product/${id}`} passHref>   
        <Card as="a" href={`product/${id}`}>
            <Card.Content>
                <Image src={image}  />
                <Card.Header>{name}</Card.Header>
                <Card.Meta style={{ color: 'dimgray' }}>
                    $ {price}
                </Card.Meta>
            </Card.Content>
        </Card>
        //</Link>
    
    )) 


function ProductList({ products }: ProductListProps) {
  return (
    <Card.Group itemsPerRow={3}  stackable centered>
    {mapProductsToCards(products)}
    </Card.Group>
  )
}

export default ProductList