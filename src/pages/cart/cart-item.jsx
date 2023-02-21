import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';


import { CartItemsT, CountHandle, Description } from './style.js'

export const CartItem = (props) => {

    const { id, productName, price, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);
    
    return (
        <CartItemsT>
            <img src={productImage} alt="img" />

            <Description>
                <p>
                    {" "}
                    <b>{productName}</b>
                </p>

                <p> ${price} </p>
                <CountHandle>
                    <button onClick={() => removeFromCart(id)}> - </button>
                    <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
                    <button onClick={() => addToCart(id)}> + </button>
                </CountHandle>
            </Description>
        </CartItemsT>
    );
}