import { Route, Redirect } from "react-router-dom";
import React from "react";

function RoutesProtected({ isAuth: isAuth, component: Component, ...rest }) {
    return <Route
        {...rest} render={(props) => {
            if (isAuth) {
                return <Component />;
            } else {
                return <Redirect to={{ pathname: '/', state: { from: props.location } }} />
            };
        }} />
}

export default RoutesProtected;