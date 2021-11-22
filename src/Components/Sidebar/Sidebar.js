import React from 'react'
import { CloseIcon, Icon, SidebarContainer,SideBtnWrap,SidebarLink,SidebarRoute,SidebarWrapper,SidebarMenu} from './SidebarElements'

export default function Sidebar({isOpen,toggle}) {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="goals" onClick={toggle}>
                        Goals
                    </SidebarLink>
                    <SidebarLink to="specifications" onClick={toggle}>
                        Specifications
                    </SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>
                        Sign Up
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='./Signin'>Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}
