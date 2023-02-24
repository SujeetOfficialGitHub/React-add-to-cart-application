import React, {useContext} from 'react'
import Card from '../../ui/Card'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'
import CartContext from '../../../store/cart-context'

const MealItem = (props) => {
  const cartCtx = useContext(CartContext)
  const addToCartHandler = (qty) => {
    cartCtx.addItem({
      id : props.id,
      image : props.image,
      title : props.title,
      qty : qty,
      price : props.price
    })
  }
  return (
    <>
    <Card className={classes['meal-container']}>
        <div className={classes['meal-img']}>
            <img src={props.image} alt="" />
        </div>
        <div className={classes["meal-content"]}>
            <h2 className={classes['meal-title']}>{props.title}</h2>
            <p className={classes['meal-desc']}>{props.description}</p>
            <p className={classes['meal-price']}>Rs{props.price}</p>
        </div>
        {/* MealItemForm for Qty and add to cart button  */}
        <MealItemForm onAddItemToCart={addToCartHandler} />
    </Card>
    </>
  )
}

export default MealItem