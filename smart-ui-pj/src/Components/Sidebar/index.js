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

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLinkWrap>
                        <SidebarLink to='home'>Home</SidebarLink>
                    </SidebarLinkWrap>
                    <SidebarLinkWrap>
                        <SidebarLink to='whatWeDo'>What we do</SidebarLink>
                    </SidebarLinkWrap>
                    <SidebarLinkWrap>
                        <SidebarLink to='ourAdvantages'>Our advantages</SidebarLink>
                    </SidebarLinkWrap>
                    <SidebarLinkWrap>
                        <SidebarLink to='portfolio'>Portfolio</SidebarLink>
                    </SidebarLinkWrap>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarBtn to='ContactUs'>Contact us</SidebarBtn>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;