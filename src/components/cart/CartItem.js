import React from 'react'
import classes from './CartItem.module.css'
import Button from '../ui/Button'
const CartItem = (props) => {
  return (
    <div className={classes['cart-items']}>
        <div className={classes['cart-left']}>
            <img src={props.image} alt="" />
            <div className={classes['cart-qty-btn']}>
                <Button onClick={props.onRemove}>-</Button>
                <div className={classes['cart-item-qty']}>
                    {props.qty}
                </div>
                <Button onClick={props.onAdd}>+</Button>
            </div>
        </div>
        <div className={classes['cart-right']}>
            <div className={classes['cart-item-title']}>{props.title}</div>
            <div className={classes['cart-item-price']}>Rs. {props.price}</div>
        </div>
    </div>
  )
}

export default CartItem