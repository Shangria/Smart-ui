import React from "react";
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SideBtnWrap,
    SidebarWrapper,
    SidebarLinkWrap,
    SidebarLink,
    SidebarBtn,
    SidebarMenu,
} from "./SidebarElements";

const Sidebar = ({isOpen, toggle}) => {

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLinkWrap>
                        <SidebarLink to='home' onClick={toggle}>Home</SidebarLink>
                    </SidebarLinkWrap>
                    <SidebarLinkWrap>
                        <SidebarLink to='whatWeDo' onClick={toggle}>What we do</SidebarLink>
                    </SidebarLinkWrap>
                    <SidebarLinkWrap>
                        <SidebarLink to='ourAdvantages' onClick={toggle}>Our advantages</SidebarLink>
                    </SidebarLinkWrap>
                    <SidebarLinkWrap>
                        <SidebarLink to='portfolio' onClick={toggle}>Portfolio</SidebarLink>
                    </SidebarLinkWrap>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarBtn to='ContactUs' onClick={toggle}>Contact us</SidebarBtn>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;