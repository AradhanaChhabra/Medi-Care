import React from 'react'
import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu } from './NavElements'
import {FaBars} from 'react-icons/fa'

export default function Navbar() {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        MediCare
                    </NavLogo>
                    <MobileIcon>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="About">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="goals">Goals</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="specifications">Specifications</NavLinks>
                        </NavItem>
                        <NavItem> 
                            <NavLinks to="signup">Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer> 
            </Nav>
        </>
    )
}
