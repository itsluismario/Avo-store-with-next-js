import React from 'react'

type ShoppingCartProps = {
  cartCount: number
  name: string
}

const ShoppingCart = ({ cartCount, name }: ShoppingCartProps) => {
  const showCartCount = () => {
    if (!cartCount) {
      return `(0)`
    }
    if (cartCount > 9) {
      return (
        <span>
          (9<sup>+</sup>)
        </span>
      )
    }
    return `(${cartCount})`
  }

  return (
    <div className="container">
      <div className="text">
        {` ${name} `}
        {showCartCount()}
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
        }
        .text {
          margin-left: 0.5rem;
        }
        .text span {
          font-size: smaller;
        }
      `}</style>
    </div>
  )
}

export default ShoppingCart