import {BrowserRouter as Router} from "react-router-dom";
import Header from "./Components/Header";
import {GlobalStyle} from "./GlobalStyle";
import {DefaultStyle} from "./Default";
import {variables} from "./Variables";


function App() {
    return (
        <Router>
            <GlobalStyle/>
            <DefaultStyle/>
            <Header variables={variables}/>
        </Router>
    );
}

export default App;
