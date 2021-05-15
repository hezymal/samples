import React, { Fragment, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { userController } from 'App/controllers';

const LogOutPage = () => {
    const history = useHistory();

    useEffect(() => {
        userController.logOut();
        history.push('/login');
    }, [history]);

    return (
        <Fragment />
    );
};

export default LogOutPage;
