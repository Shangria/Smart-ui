import React from 'react';
import {CgFormatJustify} from 'react-icons/cg';
import Logo from "./Logo";
import {
    NavHeader,
    NavbarContainer,
    NavLogoContainer,
    NavBtnLink,
    NavBtn,
    NavMenu,
    NavLinks,
    NavItem,
    MobileIcon,
} from "./HeaderElements";


const Header = ({toggle}) => {
    return (
        <NavHeader>
            <NavbarContainer>
                <NavLogoContainer to='\'>
                    <Logo/>
                </NavLogoContainer>
                <MobileIcon onClick={toggle}>
                    <CgFormatJustify/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='home'>
                            Home
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='whatWeDo'>
                            What we do
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='ourAdvantages'>
                            Our advantages
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='portfolio'>
                            Portfolio
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavBtn>
                            <NavBtnLink to='ContactUs'>
                                Contact us
                            </NavBtnLink>
                        </NavBtn>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </NavHeader>
    );
};
export default Header;