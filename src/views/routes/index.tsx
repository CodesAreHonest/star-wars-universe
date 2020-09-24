import React, { PureComponent } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router";
import PublicRoutes from "./public";

import NotFoundPage from "../presentations/NotFoundPage";
import HomePage from "../presentations/HomePage";

interface RouteProps {
    props?: any
}

interface RouteState {
    publicRoutes: JSX.Element[]
}

class Routes extends PureComponent<RouteProps, RouteState> {

    constructor(props: any) {
        super(props);

        this.state = {
            publicRoutes: []
        }
    }

    componentDidMount() {
        this.renderPublicRoutes();
    }

    renderPublicRoutes = () => {
        const publicRoutes = PublicRoutes.map((route, index) => {
            const { exact, path, component } = route;
            return (
                <Route
                    exact={exact}
                    key={index}
                    path={path}
                    component={component}
                />
            )
        });

        this.setState({ publicRoutes });
    };

    render() {
        const { publicRoutes } = this.state;

        // redirect to home page
        const rootPathRedirection = publicRoutes.length !== 0 &&
                                    <Route exact path="/" render={() => <HomePage/>}/>;

        // redirect to 404 if round not found.
        const notFoundRedirection = publicRoutes.length !== 0 &&
                                    <Route component={NotFoundPage}/>;

        return (
            <Router>
                <Switch>
                    {publicRoutes}
                    {rootPathRedirection}
                    {notFoundRedirection}
                </Switch>
            </Router>
        )
    }
}

export default Routes;