



import React from 'react';
import {connect} from 'react-redux';

import './cart-dropdown.styles.scss';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selector';

import {withRouter} from 'react-router-dom'

const CartDropdown = ({ cartItems, history }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>

            { cartItems.length ? (
            cartItems.map(cartItem => (
             <CartItem key={cartItem.id} item={cartItem}/>
            ))
            ) : (
                <span className='empty-massage'> Your cart is empty</span>
            )
        }
        </div>
        <CustomButton onClick = {()=>history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
});


export default withRouter(connect(mapStateToProps)(CartDropdown)); 


