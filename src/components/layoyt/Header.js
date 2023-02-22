import React from 'react'
import CartIcon from '../cart/CartIcon'
import classes from './Header.module.css'
import mainImg from '../../assets/main.jpg'

const Header = () => {
  return (
    <>
    <div className={classes.header}>
        <h3 className={classes['logo']}>ReactMeals</h3>
        <button className={classes['header-cart-btn']}>
            <span className={classes['header-cart-icon']}><CartIcon/></span>
            <span>Your Cart</span>
            <span>14</span>
        </button>
    </div>
    <div className={classes['main-img']}>
        <img src={mainImg} alt="" />
    </div>
    </>
  )
}

export default Header