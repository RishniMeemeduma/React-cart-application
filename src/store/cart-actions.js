import { uiAction } from "./ui-slice";
import { cartSliceAction } from "./cart-slice";

export const fetchCartData = () => {
    return async dispatch => {
        const fetchData = async () => {
            const response = await  fetch('https://test-project-b9f2d-default-rtdb.firebaseio.com/cart.json')
            if (! response.ok) {
                throw new Error('Could not fetch cart data');
            }

            let data = await response.json();
            return data;

        }

        try {
            const cartData = await fetchData();
            dispatch(cartSliceAction.replaceCart({
                items: cartData.items || [],
                totalQuantity : cartData.totalQuantity
            }))
        }catch(error) {
            dispatch(uiAction.showNotification({
                'status': 'error',
                'title': 'Error ...',
                'message': 'Sent cart data failed !!'
              }))
        }
    }
}

export const sendCartData = (cart) => {
    return async(dispatch) => {
        dispatch(uiAction.showNotification({
            'status': 'pending',
            'title': 'Sending...',
            'message': 'Sending cart data !!'
          }))

          const sendRequest = async () => {
            const response = await fetch('https://test-project-b9f2d-default-rtdb.firebaseio.com/cart.json',
            {method : 'PUT', body : JSON.stringify(cart)});
            const responseData = await response.json();

            if(!responseData.ok) {
                dispatch(uiAction.showNotification({
                  'status': 'error',
                  'title': 'Error ...',
                  'message': 'Sent cart data failed !!'
                }))
          }
      
      }
      try {
        await sendRequest();
        dispatch(uiAction.showNotification({
            'status': 'success',
            'title': 'Success.',
            'message': 'Sent cart data successfully !!'
        }))
    }catch(error) {
        dispatch(uiAction.showNotification({
            'status': 'error',
            'title': 'Error ...',
            'message': 'Sent cart data failed !!'
          }))
    }
    
    }
}