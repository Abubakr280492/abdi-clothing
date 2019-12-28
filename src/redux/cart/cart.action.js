



import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({    //new action called addItem , it is function gets item and add to array we made  
    type: CartActionTypes.ADD_ITEM,  //return new action type   object where is type . Tell reducer hey i am trying add this item. and payload equal to item.
     
    payload: item
});

export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload:item    
});