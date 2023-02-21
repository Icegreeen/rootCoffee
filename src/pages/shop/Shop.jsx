import React from 'react';
import { PRODUCTS } from '../../db/products';
import { Product } from './Product';

import { CardContainer } from "./style.js"

export const Shop = () => {
    return (
        <CardContainer>
            {PRODUCTS.map((product) => (
                <Product data={product} />
            ))}
        </CardContainer>
    );
}