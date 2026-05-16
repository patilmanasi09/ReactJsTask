import React from 'react'
import { useState } from 'react'

const AddItemState = () => {
    const [cart, setCart] = useState([])
    const addItem = (item) => {
        setCart([...cart, item])
    }
  return (
    <div>
      <button onClick={() => addItem('Laptop')} className="btn btn-primary  me-2">
        Add Laptop
      </button>
      <button onClick={() => addItem('Phone')} className="btn btn-secondary">
        Add Phone
      </button>
        <h3>Cart Items:
            {cart.join(', ')}
        </h3>
    </div>
  )
}

export default AddItemState