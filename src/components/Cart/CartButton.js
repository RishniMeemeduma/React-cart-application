import classes from './CartButton.module.css';
import { uiAction } from '../../store/ui-slice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const CartButton = (props) => {
  const quantity = useSelector(state => state.cart.totalQuantity)
  const dispatch = useDispatch();

  const toggleCart = () => {
    dispatch(uiAction.toggle());
  }


  return (
    <button className={classes.button}>
      <span onClick={toggleCart}>My Cart</span>
      <span className={classes.badge} >{quantity}</span>
    </button>
  );
};

export default CartButton;
