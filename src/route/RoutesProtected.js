import { Route, Redirect } from "react-router-dom";
import React from "react";

function RoutesProtected({ auth: auth, component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={
                (props) => {
                    if (auth) {
                        return <Component {...props} />;
                    } else {
                        return <Redirect to={{ path: '/', state: { from: props.location } }} />
                    }
                }
            }
        />
    )
}

export default RoutesProtected;