import React from 'react'

const CartContext = React.createContext({
  items: [],
  amount: 0,
  addItem: () => {},
  deleteItem: () => {}
})

export default CartContext