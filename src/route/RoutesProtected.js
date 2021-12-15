import { Route, Redirect } from "react-router-dom";

function RoutesProtected({ isAuth: isAuth, component: component, ...rest }) {
    return <Route {...rest} render={(props) => {
        if (isAuth) {
            return <Component />;
        } else {
            return <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        }
    }} />
}

export default RoutesProtected;