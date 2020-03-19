import { ConnectedRouter } from "connected-react-router";
import { History } from "history";
import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { Dispatch } from "redux";

import RouteEnum from "../constants/RouteEnum";
import IAction from "../models/IAction";
import LoadingIndicator from "./components/loading-indicator/LoadingIndicator";
import MainNav from "./components/main-nav/MainNav";
import Toasts from "./components/toasts/Toasts";

const HomePage = lazy(() => import("./home-page/HomePage"));
const NotFoundPage = lazy(() => import("./not-found-page/NotFoundPage"));

interface IProps {
    readonly history: History;
    readonly dispatch: Dispatch<IAction<any>>;
}

const App: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
    return (
        <ConnectedRouter history={props.history}>
            <Suspense fallback={<LoadingIndicator isActive={true} />}>
                <MainNav />
                <Switch>
                    <Route exact={true} path={RouteEnum.Home} component={HomePage} />
                    <Route component={NotFoundPage} />
                </Switch>
                <Toasts />
            </Suspense>
        </ConnectedRouter>
    );
};

export default App;
