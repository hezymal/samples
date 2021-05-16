import React, { Fragment, useEffect, useState } from 'react';
import { userController } from 'App/controllers';

const AuthRoute = ({ render }) => {
    const [isAuth, setIsAuth] = useState();

    useEffect(() => {
        userController.subscribe(userController.logInEventKey, () => {
            setIsAuth(true);
        });

        userController.subscribe(userController.logOutEventKey, () => {
            setIsAuth(false);
        });
    }, [setIsAuth]);

    return (
        <Fragment>
            {render(isAuth)}
        </Fragment>
    );
};

export default AuthRoute;
