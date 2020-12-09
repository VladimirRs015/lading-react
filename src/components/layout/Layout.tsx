import React from 'react'
import Appbar from "../Appbar/Appbar"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "../../views/landing"
export default function Layout() {
    return (
        <Router>
            <Appbar />
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/">
                    <main>
                        <Route exact path="/details" />
                    </main>
                </Route>
            </Switch>
            
        </Router>
    )
}
