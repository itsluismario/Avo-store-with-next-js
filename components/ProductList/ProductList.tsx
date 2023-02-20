import Link from 'next/link'
import React from 'react'
import { Card, Image } from 'semantic-ui-react'
// import { Card } from 'semantic-ui-react'
// import Image from 'next/image'


type ProductListProps = {
    products: TProduct[]
}

const mapProductsToCards = (products: TProduct[]) => 
    products.map(({ name, id, price, image }) => (
        <Link key={id} href={`product/${id}`} passHref>   
        <Card as="a">
            <Card.Content>
                <Image src={image}  />
                <Card.Header>{name}</Card.Header>
                <Card.Meta style={{ color: 'dimgray' }}>
                    $ {price}
                </Card.Meta>
            </Card.Content>
        </Card>
        </Link>
    
    )) 


function ProductList({ products }: ProductListProps) {
  return (
    <Card.Group itemsPerRow={3}  stackable centered>
    {mapProductsToCards(products)}
    </Card.Group>
    //   <Card.Group>
    //   <Card>
    //     <Card.Content>
    //       <Image
    //         floated='right'
    //         size='mini'
    //         src='/images/avatar/large/steve.jpg'
    //       />
    //       <Card.Header>Steve Sanders</Card.Header>
    //       <Card.Meta>Friends of Elliot</Card.Meta>
    //       <Card.Description>
    //         Steve wants to add you to the group <strong>best friends</strong>
    //       </Card.Description>
    //     </Card.Content>

    //   </Card>
    //   <Card>
    //     <Card.Content>
    //       <Image
    //         floated='right'
    //         size='mini'
    //         src='/images/avatar/large/molly.png'
    //       />
    //       <Card.Header>Molly Thomas</Card.Header>
    //       <Card.Meta>New User</Card.Meta>
    //       <Card.Description>
    //         Molly wants to add you to the group <strong>musicians</strong>
    //       </Card.Description>
    //     </Card.Content>

    //   </Card>
    //   <Card>
    //     <Card.Content>
    //       <Image
    //         floated='right'
    //         size='mini'
    //         src='/images/avatar/large/jenny.jpg'
    //       />
    //       <Card.Header>Jenny Lawrence</Card.Header>
    //       <Card.Meta>New User</Card.Meta>
    //       <Card.Description>
    //         Jenny requested permission to view your contact details
    //       </Card.Description>
    //     </Card.Content>

    //   </Card>
    // </Card.Group>
  )
}

export default ProductList