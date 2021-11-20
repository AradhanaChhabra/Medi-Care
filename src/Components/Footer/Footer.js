import React from 'react'
import { FooterContainer,CopyrightText,FooterWrap } from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <CopyrightText>
                MediCare © {new Date().getFullYear()} All rights reserved.
                </CopyrightText>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
