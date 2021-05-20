import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../src/pages";
import Portfolio from "./pages/portfolio";

function App() {
    return (

        <Router>
            <Switch>
                <Route path='/home' component={Home} exact/>
                <Route path='/portfolio' component={Portfolio} exact/>
            </Switch>
        </Router>

    );
}

export default App;
