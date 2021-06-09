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
    SidebarLinkToPortfolio,
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
                        <SidebarLinkToPortfolio to='#' onClick={toggle}>Portfolio</SidebarLinkToPortfolio>
                    </SidebarLinkWrap>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarBtn to='contactUs' onClick={toggle}>Contact us</SidebarBtn>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;