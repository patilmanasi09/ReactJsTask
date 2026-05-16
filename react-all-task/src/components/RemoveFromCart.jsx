import React from 'react'

const RemoveFromCart = () => {
    const[cart,setCart] = React.useState(['Laptop','Phone'])
    const removeItem = (item) => {
        setCart(cart.filter(i => i !== item))
    }
  return (
    <div>
      <button onClick={() => removeItem('Laptop')} className="btn btn-danger  me-2">
        Remove Laptop
      </button>
      <button onClick={() => removeItem('Phone')} className="btn btn-danger">
        Remove Phone
      </button>
        <h3>Cart Items:
            {cart.join(', ')}
        </h3>
    </div>
  )
}

export default RemoveFromCart