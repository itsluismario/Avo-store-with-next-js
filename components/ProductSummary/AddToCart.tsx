import { resolve } from 'path'
import React, { useState } from 'react'
import { Input, Transition, Icon, Button } from 'semantic-ui-react'

const validate = (quantity: number) => {
  let error = ''
  if (quantity < 1 ) error = "Can not be blank"
  return error
}

const addToCartRequest = () => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 600)
  })
}

const AddToCart = () => {
  const [visible, setVisible] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleMinus = () => {
    if( quantity === 1 ){
      setQuantity(1)
    } else {
      setQuantity(quantity - 1)
    } 
  } 

  const handlePlus = () => {
    setQuantity(quantity + 1)
  } 
    
  const handleChange = async ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(target.value, 10)
    if(isNaN(value)) {
      setQuantity(0)
    } else {
      setQuantity(parseInt(target.value, 10))
    }
  }

  const handleSubmit = async () => {
    console.log(quantity)
    const error = validate(quantity)
    setError(error)

    const toggleMessage = () => {
      setTimeout(() => {
        setVisible(false)
        }, 800)
    }

    if (!error) {
      setLoading(true)
      addToCartRequest()
        .then(() => {
          setLoading(false)
          setQuantity(quantity)
          setVisible(true)
          toggleMessage()
        })
        .catch((err: Error) => {
          setError(`Error: ${err}` || 'Something went wrong')
        })
    }
  }

return (
  <>

    <Input
        type = 'number'
        placeholder='Quantity'
        value = {quantity}
        min = {1}
        step = {1}
        onChange = {handleChange}
        action={{
          color: 'blue',
          icon: 'plus cart',
          content: 'Add to cart',
          onClick: handleSubmit, 
          loading,
        }}
    />
    <Button.Group basic>
      <Button onClick={handleMinus}>-</Button>
      <Button onClick={handlePlus}>+</Button>
    </Button.Group>

    <Transition duration={{ hide: 500, show: 500 }} visible={visible}>
          <div style={{ color: 'green', position: 'absolute' }}>
            <Icon name="check" />
            Added to cart
          </div>
    </Transition>
  </>
)
  }

export default AddToCart