import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import PrivateRoute from '../routers/PrivateRoute';
import { AuthContext } from '../auth/AuthContext';


import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';


export const AppRouter = () => {

    const { userState: { logged } } = useContext(AuthContext);

    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={LoginScreen} />

                    <PrivateRoute path="/" isAutenticated={logged} component={DashboardRoutes} />
                </Switch>
            </div>
        </Router>
    )
}
