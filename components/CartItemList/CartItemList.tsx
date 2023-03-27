import React from 'react'
import Link from 'next/link'
import { Item, Button, Loader, Message } from 'semantic-ui-react'
import { CartItemType } from '@store/Cart'

type CartItemListProps = {
  items: CartItemType[]
}

const CartItemList = ({
  items,
}: CartItemListProps) => {

  const mapCartItemsToItems = (items: CartItemType[]) =>
    items.map((cartItem) => {
      const { id, name, quantity, price, image } = cartItem

      return {
        childKey: id,
        header: (
          <Item.Header>
            <Link href={`/product/${id}/`}>
              <a>{name}</a>
            </Link>
          </Item.Header>
        ),
        image: (
          <Item.Image
            src={image}
            alt={name}
            size="small"
            style={{ background: '#f2f2f2' }}
          />
        ),
        meta: `${quantity} x ${price}`,
        description: 'Some more information goes here....',
        extra: (
          <Button
            basic
            icon="remove"
            floated="right"
          />
        ),
      }
    })

  return <Item.Group divided items={mapCartItemsToItems(items)} as="section" />
}

export default CartItemList