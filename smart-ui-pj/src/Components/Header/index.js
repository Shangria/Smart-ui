import React from 'react';
import {FaBars} from 'react-icons/fa';
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


const Header = () => {
    return (
        <NavHeader>
            <NavbarContainer>
                <NavLogoContainer to='\'>
                    <Logo/>
                </NavLogoContainer>
                <MobileIcon>
                    <FaBars/>
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