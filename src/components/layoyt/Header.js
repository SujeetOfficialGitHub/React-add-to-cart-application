import React, { useContext } from 'react'
import CartIcon from '../cart/CartIcon'
import classes from './Header.module.css'
import mainImg from '../../assets/main.jpg'
import CartContext from '../../store/cart-context'

const Header = (props) => {
  const cartCtx = useContext(CartContext)
 
  // Access Qunatity of cart Items 
  // const numberOfCartItems = cartCtx.items.reduce((item, currNum) => {
  //   return item + currNum.qty
  // },0)
  const numberOfCartItems = cartCtx.items.length
  return (
    <>
    <div className={classes.header}>
        <h3 className={classes['logo']}>ReactMeals</h3>
        <button onClick={props.onShowCart} className={classes['header-cart-btn']}>
            <span className={classes['header-cart-icon']}><CartIcon/></span>
            <span>Your Cart</span>
            <span>{numberOfCartItems}</span>
        </button>
    </div>
    <div className={classes['main-img']}>
        <img src={mainImg} alt="" />
    </div>
    </>
  )
}

export default Header