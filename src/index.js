import React from "react";
import ReactDOM from "react-dom";
import {createBrowserHistory} from "history";
import {Router, Route, Switch} from "react-router-dom";
// import App from "./App";
// import * as serviceWorker from "./serviceWorker";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";

const hist = createBrowserHistory();

ReactDOM.render(
<Router history={hist}>
    <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/login" exact component={LoginPage}/>
    </Switch>
</Router>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// npm i history
