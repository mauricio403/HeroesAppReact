import React from "react";
import { LoginScreen } from '../components/login/LoginScreen';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/login' component={LoginScreen}></Route>
                    <Route  path='/' component={DashboardRoutes}></Route>
                </Switch>
            </div>
        </Router>
    )
}