import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import PrivateRoute from '../routers/PrivateRoute';
import { AuthContext } from '../auth/AuthContext';
import PublicRoute from '../routers/PublicRoute';


import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';


export const AppRouter = () => {

    const { userState: { logged } } = useContext(AuthContext);

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute exact path="/login" isAutenticated={logged} component={LoginScreen} />

                    <PrivateRoute path="/" isAutenticated={logged} component={DashboardRoutes} />
                </Switch>
            </div>
        </Router>
    )
}
