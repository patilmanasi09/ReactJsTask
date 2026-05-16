import React from 'react'
import EvenOdd from './components/EvenOdd'
import StopWatch from './components/StopWatch'
import JokeApp from "./components/JokeGenerator";
import Login from './components/LoginFormValidation';
import ProductList from './components/ShowProArray';
import AddItemState from './components/AddToCart';
import RemoveFromCart from './components/RemoveFromCart';
import CartReducer from './components/CalculateTotalPrice';
import ProductSearch from './components/SearchProduct';
import AddToCartConsole from './components/ToastAddToCart';

const App = () => {
  return (
    <div className="App">
      <EvenOdd />
      <StopWatch />
      <JokeApp />
      <Login/>
      <ProductList/>
      <AddItemState/>
      <RemoveFromCart/>
      <CartReducer/>
      <ProductSearch/>
      <AddToCartConsole/>
    </div>
  )
}

export default App