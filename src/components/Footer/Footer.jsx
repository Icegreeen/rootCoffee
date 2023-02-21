import React from "react";

import { Wrapper, FooterContent, SocialList} from './style.js'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export const Footer = () => {
    return (
        <Wrapper>
            <FooterContent>
                <p>
                    © 2022 All Rights Reserved
                </p>

                <SocialList>
                    <ul>
                        <a href="https://www.facebook.com/"><FaInstagram fill="white" /></a>
                        <a href="https://www.facebook.com/"> <FaFacebook fill="white" /></a>
                        <a href="https://twitter.com/"><FaTwitter fill="white" /></a>
                    </ul>
                </SocialList>
            </FooterContent>
        </Wrapper>
    )
}