import React from 'react'
import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu } from './NavElements'
import {FaBars} from 'react-icons/fa'

export default function Navbar({toggle}) {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        MediCare
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services">Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="specifications">Specifications</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="goals">Goals</NavLinks>
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
