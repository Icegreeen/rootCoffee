import React from "react";
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react';

import { Header, Links} from './style.js'

export const Navbar = () => {
    return (
        <Header>
            <Links>
                <Link to="/"> Shop </Link>

                <Link to="/cart">
                    <ShoppingCart size={32} />
                 </Link>
            </Links>
        </Header>
    )
}