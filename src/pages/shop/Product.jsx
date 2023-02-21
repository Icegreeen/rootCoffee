import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Card, AddToCartBttn } from './style'; 

export const Product = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemAmount = cartItems[id   ]

    return (
        <Card>
            <img src={productImage} alt="img product" />
            <div className="description">
                <p>
                    <b>{productName}</b>
                </p>
                <p>${price}</p>
            </div>

            <AddToCartBttn onClick={() => addToCart(id)} >
                Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
            </AddToCartBttn>
        </Card>
    );
}