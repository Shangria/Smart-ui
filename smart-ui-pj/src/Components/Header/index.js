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
        <>
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
                    </NavMenu>
                </NavbarContainer>
            </NavHeader>

        </>
    );
};
export default Header;