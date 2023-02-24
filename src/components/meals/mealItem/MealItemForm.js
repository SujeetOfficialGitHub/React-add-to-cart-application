import React, {useRef, useState} from 'react'
import Button from '../../ui/Button'
import Input from '../../ui/Input'
import classes from './MealItemForm.module.css'

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true)
  const qtyInputRef = useRef()

  const submitHandler = (e) => {
    e.preventDefault()
    const enteredQty = qtyInputRef.current.value;
    const enteredQtyNumber = +enteredQty
    if (enteredQty.trim().length === 0 || enteredQtyNumber < 1 || enteredQtyNumber  > 5){
      setAmountIsValid(false)
      return;
    }
    props.onAddItemToCart(enteredQtyNumber)
  }
  return (
    <>
    <form className={classes['qty-form']} onSubmit={submitHandler}>
        <Input 
            ref={qtyInputRef}
            input = {{
              id : 'qty_'+props.id,
              type:"number",
              min:"1",
              max:"5",
              defaultValue:"1",
            }}
        />
        <Button type="submit" >+ Add</Button>
        {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
    </>
  )
}

export default MealItemForm