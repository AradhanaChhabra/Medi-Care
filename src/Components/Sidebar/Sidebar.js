import React from 'react'
import { CloseIcon, Icon, SidebarContainer,SideBtnWrap,SidebarLink,SidebarRoute,SidebarWrapper,SidebarMenu} from './SidebarElements'

export default function Sidebar() {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about">
                        About
                    </SidebarLink>
                    <SidebarLink to="goals">
                        Goals
                    </SidebarLink>
                    <SidebarLink to="specifications">
                        Specifications
                    </SidebarLink>
                    <SidebarLink to="signup">
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
