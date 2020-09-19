import React, { useReducer } from 'react';
import { AppRouter } from './routers/AppRouter';
import { AuthContext } from './auth/AuthContext';
import authReducer from './auth/authReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false }
};

export const HeroesApp = () => {

    const [userState, dispatch] = useReducer(authReducer, {}, init);

    return (
        <AuthContext.Provider value={{ userState, dispatch }}>
            <AppRouter />
        </AuthContext.Provider>
    )
}
