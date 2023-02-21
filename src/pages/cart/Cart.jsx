import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { ShopContext } from '../../context/shop-context';
import { PRODUCTS } from '../../db/products';
import { CartItem } from "./cart-item";

import { CartT, Checkout, CartItemsT, Left, Right } from './style.js'

export const Cart = () => {

    const { cartItems, getTotalCartAmount  } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate();

    return (
        <CartT>
                <Left>
                    <CartItemsT>
                        {PRODUCTS.map((product) => {
                            if (cartItems[product.id] !== 0) {
                                return <CartItem data={product} />
                            }
                        })}
                    </CartItemsT>
                </Left>

                <Right>
                    <h1>Mais alguma coisa!</h1>
                    
                    {totalAmount > 0 ? (
                        <Checkout>
                            <p> Subtotal: ${totalAmount}</p>
                            <button onClick={() => navigate("/")} > Continue Shopping </button>
                            <button> Checkout </button>
                        </Checkout>
                    ) : (
                        <h1> Your Cart is Empty</h1>
                    )}
                </Right>
        </CartT>
    );
}