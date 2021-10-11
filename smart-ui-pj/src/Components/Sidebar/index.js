import React from "react";
import { useLocation } from "react-router";
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
    const itHomepage = useLocation().pathname==="/";
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLinkWrap>
                  {  itHomepage?<SidebarLink to='home' onClick={toggle}>Home</SidebarLink>:<SidebarLinkToPortfolio to='./'>  Home </SidebarLinkToPortfolio>}
                    </SidebarLinkWrap>
              {    itHomepage&&<SidebarLinkWrap>
                        <SidebarLink to='whatWeDo' onClick={toggle}>What we do</SidebarLink>
                    </SidebarLinkWrap>}
               {     itHomepage&&<SidebarLinkWrap>
                        <SidebarLink to='ourAdvantages' onClick={toggle}>Our advantages</SidebarLink>
                    </SidebarLinkWrap>}
                    <SidebarLinkWrap>
                        <SidebarLinkToPortfolio to='./portfolio' onClick={toggle}>Portfolio</SidebarLinkToPortfolio>
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