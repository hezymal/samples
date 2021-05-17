import React, { Suspense, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import { userController } from "App/controllers";
import "./App.css";
import AuthRoute from "./components/AuthRoute";
import PrivateSegment from "./segments/PrivateSegment";
import PublicSegment from "./segments/PublicSegment";
import relayEnvironment from "./relayEnvironment";

const App = () => {
    useEffect(() => {
        userController.logInFromStorage();
    }, []);

    return (
        <BrowserRouter>
            <RelayEnvironmentProvider environment={relayEnvironment}>
                <Suspense fallback={"Loading..."}>
                    <AuthRoute
                        render={(isAuth) =>
                            isAuth ? <PrivateSegment /> : <PublicSegment />
                        }
                    />
                </Suspense>
            </RelayEnvironmentProvider>
        </BrowserRouter>
    );
};

export default App;
