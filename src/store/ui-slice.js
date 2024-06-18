import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice ({
    name : 'ui',
    initialState: { cartisvisible: false, notification: null},
    reducers : {
        toggle(state) {
            state.cartisvisible = !state.cartisvisible;
        },
        showNotification(state,action) {
            state.notification = {
                status : action.payload.status,
                title : action.payload.title,
                message : action.payload.message
            }
        }
    }
})
export const uiAction = uiSlice.actions; 
export default uiSlice;