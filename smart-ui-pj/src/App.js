import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/index";
import React, {useState} from "react"; 
import Portfolio from "./pages/portfolio";
import Portfoliopost from "./pages/Portfoliopost";
import Contact from "./Components/Contact";
import {GlobalStyle} from "./GlobalStyle";
import {DefaultStyle} from "./Default";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen((!isOpen));
    };
    return (
            <>
            <GlobalStyle/>
            <DefaultStyle/> 
        <Router>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Header toggle={toggle}/>
            <Switch>
                <Route path='/' component={Home} exact/>
                <Route path='/portfolio' component={Portfolio} exact/>
                <Route path='/portfolio/:slug' component={Portfoliopost} exact/>
            </Switch>
        </Router>
           <Contact/> 
            </>

    );
}

export default App;
