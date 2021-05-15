import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { userController } from 'App/controllers';
import './App.css';
import PrivateApp from './apps/PrivateApp';
import PublicApp from './apps/PublicApp';
import AuthRoute from './components/AuthRoute';

const App = () => {
    useEffect(() => {
        userController.logInFromStorage();
    }, []);

    return (
        <BrowserRouter>
            <AuthRoute render={isAuth => isAuth ? <PrivateApp /> : <PublicApp />} />
        </BrowserRouter>
    );
};

export default App;
