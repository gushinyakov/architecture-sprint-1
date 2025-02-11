import React, { ReactNode, useContext } from 'react';
import { Route, Redirect, RouterProps, RouteProps } from "react-router-dom";
import AuthContext from 'shared_context/AuthContext';

interface Props extends Pick<RouteProps, 'path' | 'exact'> {
    children: ReactNode;
}

const ProtectedRoute = ({ children, ...routeProps }: Props) => {
    const auth = useContext(AuthContext);

    return (
        <Route {...routeProps}>
            {
                () => auth.isLoggedIn ? children : <Redirect to="./signin" />
            }
        </Route>
    )
}

export default ProtectedRoute;