import React, {useContext} from 'react'
import Modal from '../ui/Modal'
import CartItem from './CartItem'
import classes from './Cart.module.css'
import Button from '../ui/Button'
import CartContext from '../../store/cart-context'


const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id)
    }
    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, qty: 1 });
    }
    const hasItem = cartCtx.items.length>0;
    const cartItems = cartCtx.items.map((item) => 
        <CartItem 
            key = {item.id}
            image = {item.image}
            title = {item.title}
            qty = {item.qty}
            price = {item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
        />
    )

  return (
        <Modal onClick={props.onCloseCart}>
            <h2 className={classes['cart-title']}>My Cart</h2>
            {cartItems}
            <div className={classes['cart-total-box']}>
                <h2 className={classes['cart-total']}>
                    <span>Cart Total</span>
                    <span>Rs {cartCtx.totalAmount}</span>
                </h2>
                <div className={classes['cart-action']}>
                    <Button onClick={props.onCloseCart}>Close</Button>
                    {hasItem && <Button>Order</Button>}
                </div>
            </div>
        </Modal>

  )
}

export default Cart