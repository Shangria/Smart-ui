import React, {useState, useEffect} from 'react';
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
    const [opacityNav, setOpacityNav] = useState(false);

    const opacityChange = () => {
        if (window.scrollY >0) {
            setOpacityNav(true);
        } else {
            setOpacityNav(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', opacityChange)
    }, []);

    return (
        <NavHeader opacityNav={opacityNav}>
            <NavbarContainer>
                <NavLogoContainer to='home'>
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
                            <NavBtnLink to='contactUs'>
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