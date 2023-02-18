import React from 'react';

import { PRODUCTS } from '../../db/products';
import { Product } from './Product';

import "./style.css"

export const Shop = () => {
    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>AquilaTech Shop</h1>
            </div>

            <div className="products">
                {" "}
                {PRODUCTS.map((product) => (
                    <Product data={product} />
                ))}
            </div>
        </div>
    );
}