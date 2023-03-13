import React, { useState } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Meals from './components/meals/Meals';
import Cart from './components/cart/Cart';
import CartProvider from './store/CartProvider';
import Footer from './components/layout/Footer';

function App() {
  const [cartIsShown, setCartIsShon] = useState(false);

  const showCartHandler = () => {
    setCartIsShon(true)
  }
  const hideCartHandler = () => {
    setCartIsShon(false)
  }
  return (
   <CartProvider>
        {cartIsShown && <Cart onCloseCart={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <main>
            <Meals />
        </main>
        <Footer />
   </CartProvider>
  );
}

export default App;
