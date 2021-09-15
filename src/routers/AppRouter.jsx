import React, { useContext } from "react";
import { LoginScreen } from '../components/login/LoginScreen';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { AuthContext } from "../auth/AuthContext";
import { PublicRoute } from "./Publicrpoute";

export const AppRouter = () => {

    const {user} = useContext(AuthContext)
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute exact path='/login' component={LoginScreen} isAuthenticated={user.logged}></PublicRoute>

                    <PrivateRoute  path='/' component={DashboardRoutes} isAuthenticated={user.logged}></PrivateRoute>
                </Switch>
            </div>
        </Router>
    )
}