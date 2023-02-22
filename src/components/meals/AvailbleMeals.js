import React from 'react';
import classes from './AvailbleMeals.module.css'
import MealItem from './mealItem/MealItem';
import pizzaImg from '../../assets/pizza.jpg'
import biryaniImg from '../../assets/biryani.jpg'
import burgerImg from '../../assets/burger.jpg'
import parathaImg from '../../assets/paratha.jpg'

const DUMMY_MEALS = [
    {
        id : 'm1',
        image : pizzaImg,
        title : "Mexican Green Wave Pizza",
        description : "Mexican herbs sprinkled on onion, capsicum, tomato & jalapeno",
        price : 400
    },
    {
        id : 'm2',
        image : biryaniImg,
        title : "Chicken Biryani",
        description : "A tasty preparation with juicy chicken chunks, fragranced rice and homemade spices- perfect to fulfill your hunger pangs ",
        price : 600
    },
    {
        id : 'm3',
        image : burgerImg,
        title : "Crispy Veg Burger",
        description : "Our Best-Selling Burger With Crispy Veg Patty, Fresh Onion And Our Signature Sauce",
        price : 70
    },
    {
        id : 'm4',
        image : parathaImg,
        title : "Tawa Gobbi Paratha",
        description : "Fresh Gobhi Paratha",
        price : 40
    }
]

const AvailbleMeals = () => {
  return (
    <div className={classes.meals}>
        {DUMMY_MEALS.map((item) => (
            <MealItem 
                id={item.id}
                key={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
                price={item.price} 
            />
        ))}
    </div>
  )
}

export default AvailbleMeals