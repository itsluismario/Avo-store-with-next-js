import AddToCart from '@components/ProductSummary/AddToCart'
import React, { Dispatch, useContext, useReducer } from 'react'

export type CartItemType = TProduct & {quantity: number}

export type CartState = {
  [key: string]: CartItemType
}
export type CartAction = {
  type: 'add' | 'remove'
  item: TProduct
  quantity?: number
}

const defaultCartState = {} as CartState

const CartItemsContext = React.createContext(defaultCartState)
const CartDispatchContext = React.createContext((()=>{}) as Dispatch<CartAction>)

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducers, defaultCartState)

  return (
    <CartItemsContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartItemsContext.Provider>
  )
}


function cartReducers (
  state: CartState,
  { type, item, quantity: qty = 1 }: CartAction
  ) {

    const existingCartItem = state[item.id];
    
    switch (type) {
      case 'add': {
        if (existingCartItem != undefined) {
          const quantity = existingCartItem.quantity + qty
          return {
            ...state,
            [item.id]: {
              ...item,
              quantity,
            },
          }
        }
  
        return {
          ...state,
          [item.id]: {
            ...item,
            quantity: qty,
          },
        }
      }
  
      case 'remove': {
        if (existingCartItem == undefined) {
          return state
        }
  
        const quantity = existingCartItem.quantity - 1
        if (quantity > 0) {
          return {
            ...state,
            [item.id]: {
              ...existingCartItem,
              quantity,
            },
          }
        }

        const newCartItems = { ...state }
        delete newCartItems[item.id]
        return newCartItems
      }

    default: {
      throw new Error(`Unhandled action type: ${type}`)
    }
  }
}

const getCartSubTotal = (sum: number, item: CartItemType) => {
  sum += item.price * item.quantity
  return sum
}

const getCartCount = (sum: number, item: CartItemType) => sum + item.quantity

export const useCart = () => {
  const itemsById = useContext(CartItemsContext)
  const items = Object.values(itemsById)
  // Not familiar with Array.reduce? :)
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
  const count = items.reduce(getCartCount, 0)
  const subTotal = items.reduce(getCartSubTotal, 0)

  return {
    items,
    itemsById,
    count,
    subTotal,
  }
}

export const useCartMutations = () => {
  const dispatch = useContext(CartDispatchContext)

  const addToCart = (product: TProduct, quantity?: number) => 

    dispatch({
      type: 'add',
      item: product, 
      quantity: quantity
    })
  
  const removeFromCart = (product: TProduct) => 

    dispatch({
      type: 'remove',
      item: product,
    })
  
  
  return {
    addToCart,
    removeFromCart
  }
}

export { CartProvider };