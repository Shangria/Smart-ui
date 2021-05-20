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
    NavLinkToPortfolio,
    NavItem,
    MobileIcon,
} from "./HeaderElements";


const Header = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const opacityChange = () => {
        let scrollPos = 0;
        let n = window.scrollY;

        if (n > scrollPos) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', opacityChange)
    }, []);

    return (
        <NavHeader scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogoContainer to='home'>
                    <Logo/>
                </NavLogoContainer>
                <MobileIcon onClick={toggle}>
                    <CgFormatJustify/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='home'
                        >
                            Home
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='whatWeDo'
                        >
                            What we do
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='ourAdvantages'
                        >
                            Our advantages
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinkToPortfolio to='/portfolio'
                        >
                            Portfolio
                        </NavLinkToPortfolio>
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