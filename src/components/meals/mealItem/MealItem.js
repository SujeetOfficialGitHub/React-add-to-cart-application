import React from 'react'
import Card from '../../ui/Card'
import classes from './MealItem.module.css'


const MealItem = (props) => {
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
        <div className={classes['add-cart-btn']}>
            <button>+ Add</button>
        </div>
    </Card>
    </>
  )
}

export default MealItem