import React from 'react'
import Link from 'next/link'
import { Item, Button, Loader, Message } from 'semantic-ui-react'
import { CartItemType } from '@store/Cart'

type CartItemListProps = {
  items: CartItemType[]
  removeFromCart: (product: TProduct) => void
}

const CartItemList = ({
  items,
  removeFromCart
}: CartItemListProps) => {

  const mapCartItemsToItems = (items: CartItemType[]) =>
    items.map((cartItem) => {

      const { id, name, quantity, price, image, attributes } = cartItem

      return {
        childKey: id,
        header: (
          <Item.Header>
            <Link href={`/product/${id}/`} legacyBehavior>
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
        description: `Taste: ${attributes.taste}`,
        extra: (
          <Button
            basic
            icon="remove"
            floated="right"
            onClick={() => removeFromCart(cartItem)}
          />
        ),
      }
    })

  return <Item.Group divided items={mapCartItemsToItems(items)} as="section" />
}

export default CartItemList