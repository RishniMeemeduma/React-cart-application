import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartSliceAction } from '../../store/cart-slice';
const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, total, price, id } = props.item;
console.log(props.item);
  const removeItemHandler = () => {
    dispatch(cartSliceAction.removeItems(id));
  }

  const addItemHandler = () => {
    dispatch(cartSliceAction.addItems({
      id,
      price,
      title
    }));
  }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${price.toFixed(2) * quantity}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
