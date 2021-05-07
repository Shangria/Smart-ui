import {BrowserRouter as Router} from "react-router-dom";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import {GlobalStyle} from "./GlobalStyle";
import {DefaultStyle} from "./Default";

function App() {
    return (
        <Router>
            <GlobalStyle/>
            <DefaultStyle/>
            <Sidebar/>
            <Header/>
        </Router>
    );
}

export default App;
