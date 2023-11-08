import { useContext } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
import CartCntx from '../../../store/cart-context';

const MealItemForm = (props) => {
  const cartcntx = useContext(CartCntx);
  const addItemToCart = (e) => {
    e.preventDefault();
    // cartcntx.items.push(props.item);
    const quantity = document.getElementById('amount_' +props.id).value
    cartcntx.addItem({...props.item, quantity: quantity})
    console.log("after item added to cart",cartcntx);
    
  };
  return (
    <form className={classes.form}>
      {console.log(cartcntx)}
      <Input
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button onClick={addItemToCart}>+ Add</button>
    </form>
  );
};

export default MealItemForm;