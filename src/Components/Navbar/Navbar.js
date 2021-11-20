import React, { useEffect, useState}from 'react'
import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu } from './NavElements'
import { FaBars } from 'react-icons/fa'
// import { IconContext } from 'react-icons/lib' ;
import { animateScroll as scroll } from 'react-scroll';

export default function Navbar({ toggle }) {
    
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80)
            setScrollNav(true);
        else
            setScrollNav(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>
                        MediCare
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks
                                to="about"
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                // or add activeClass if not using styledComponents &.active
                                smooth={true}>
                                About
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="services"
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                smooth={true}>Services
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="specifications"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                >
                                Specifications
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="goals"
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                smooth={true}>
                                Goals
                            </NavLinks>
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
