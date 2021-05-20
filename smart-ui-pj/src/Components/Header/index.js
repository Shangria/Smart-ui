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

        // return (
        //     window.removeEventListener('scroll', opacityChange)
        // )
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
                                  spy={true}
                                  smooth={true}
                                  duration={200}
                                  exact='true'
                                  offset={-80}
                        >
                            Home
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='whatWeDo'
                                  spy={true}
                                  smooth={true}
                                  duration={200}
                                  exact='true'
                                  offset={-80}
                        >
                            What we do
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='ourAdvantages'
                                  spy={true}
                                  smooth={true}
                                  exact='true'
                                  offset={-80}
                                  duration={200}
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