import React, {useEffect, useReducer} from 'react';
import CartContext from "./cart-context"

const localCartData = localStorage.getItem('cart')
        ? JSON.parse(localStorage.getItem('cart')) : []

const totalAmount = localCartData.reduce((initilVal, currEle) => {
    return initilVal + (currEle.price * currEle.qty)
},0)

const defaultCartState = {
    items : localCartData,
    totalAmount : totalAmount
}
const cartReducer = (state, action) => {
    if (action.type === 'ADD'){
        // Find total cart Amount 
        const updatedTotalAmount = state.totalAmount + (action.item.qty * action.item.price)
        // Check if item already present in cart then increase quantity 
        // existingCartItemIndex return index if find or reutrn -1
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id)
        const existingCartItem = state.items[existingCartItemIndex]
        let updatedItems;
        if (existingCartItem){
            const updatedItem = {
                ...existingCartItem,
                qty:existingCartItem.qty + action.item.qty
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }else{
            updatedItems = state.items.concat(action.item);
        }
        return {
            items : updatedItems,
            totalAmount : updatedTotalAmount
        }
       
    }else if (action.type === 'REMOVE'){
        
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
        const existingCartItem = state.items[existingCartItemIndex]
        let updatedItems;
        if (existingCartItem.qty === 1){
            updatedItems = state.items.filter(item => item.id !==action.id)
        }else{
            const updatedItem = {
                ...existingCartItem,
                qty:existingCartItem.qty - 1
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem
        }
        const updatedTotalAmount = state.totalAmount - existingCartItem.price;
        return {
            items : updatedItems,
            totalAmount : updatedTotalAmount
        }
    }
}

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)
    
    const addItemToCartHandler = (item) => {
        dispatchCartAction({type:'ADD', item:item})
    }
    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type:'REMOVE', id:id})
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartState.items))
    })

    const cartContext = {
        items : cartState.items,
        totalAmount : cartState.totalAmount,
        addItem : addItemToCartHandler,
        removeItem : removeItemFromCartHandler,
    }
  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider