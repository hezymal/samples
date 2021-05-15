import React, { Fragment, useEffect, useState } from 'react';
import { userController } from 'App/controllers';

const AuthRoute = ({ render }) => {
    const [isAuth, setIsAuth] = useState();

    useEffect(() => {
        userController.subscribe(userController.logInEventKey, ({ user }) => {
            setIsAuth(!!user);
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
