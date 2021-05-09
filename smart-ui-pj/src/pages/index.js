import React, {useState} from "react";
import {GlobalStyle} from "../GlobalStyle";
import {DefaultStyle} from "../Default";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";

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
        </>
    )
}
export default Home;