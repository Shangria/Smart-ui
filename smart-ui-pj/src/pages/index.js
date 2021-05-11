import React, {useState} from "react";
import {GlobalStyle} from "../GlobalStyle";
import {DefaultStyle} from "../Default";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import HeroSection from "../Components/HeroSection";
import SliderCompany from "../Components/Slider";
import WhatWeDo from "../Components/WhatWeDo";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen((!isOpen));
    };

    return (
        <>
            <GlobalStyle/>
            <DefaultStyle/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Header toggle={toggle}/>
            <HeroSection/>
            <SliderCompany/>
            <WhatWeDo/>
        </>
    );
};
export default Home;