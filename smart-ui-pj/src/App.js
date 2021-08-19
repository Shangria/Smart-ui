import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/index";
import Portfolio from "./pages/portfolio";

function App() {
    return (

        <Router>
            <Switch>
                <Route path='/' component={Home} exact/>
                <Route path='/portfolio' component={Portfolio} exact/>
            </Switch>
        </Router>

    );
}

export default App;
