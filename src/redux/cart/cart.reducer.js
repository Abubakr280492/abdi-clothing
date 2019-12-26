


import CartActionTypes from './cart.types';
import {addItemToCart} from './cart.utils';

const INITIAL_STATE = {
    hidden:true,
    cartItems: []   //default value add items to this array we add new action,new action types
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return{     //return object 
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload) 
            };
            default: 
                return state;
    }
};
export default cartReducer;