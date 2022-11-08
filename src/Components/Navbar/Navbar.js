import React, { useEffect, useState,useRef}from 'react'
import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu } from './NavElements'
import { FaBars } from 'react-icons/fa'
// import { IconContext } from 'react-icons/lib' ;
import { animateScroll as scroll } from 'react-scroll';

export default function Navbar({ toggle }) {
    const isScreenMounted = useRef(true);
    
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(!isScreenMounted.current) return;
        if (window.scrollY >= 80)
            setScrollNav(true);
        else
            setScrollNav(false);
    }

    useEffect(() => {


        // const abortController = new AbortController();
        if (!isScreenMounted.current) return;
        else 
        window.addEventListener('scroll', changeNav)
        return () => {
            // abortController.abort()  
            isScreenMounted.current = false
          }
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
                                // smooth={true}
                                delay={0}
                                smooth={true}
                            >
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
                                // smooth={true}
                                delay={0}
                                smooth={true}
                            >Services
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="specifications"
                                delay={0}
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
                                // smooth={true}
                                delay={0}
                                smooth={true}
                            >
                                Goals
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/appointments">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer> 
                </Nav>
        </>
    )
}
