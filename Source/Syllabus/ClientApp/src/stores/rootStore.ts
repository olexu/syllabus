import { applyMiddleware, createStore, Middleware, Store } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import { routerMiddleware } from "connected-react-router";
import { History } from "history";
import rootReducer from "./rootReducer";
import IStore from "../models/IStore";
import errorToastMiddleware from "../middlewares/errorToastMiddleware";

const rootStore = (initialState: Partial<IStore>, history: History): Store<IStore> => {
    const middleware: Middleware[] = [thunk, routerMiddleware(history), errorToastMiddleware()].filter(Boolean);

    const store: Store<IStore> = createStore(rootReducer(history), initialState as any, composeWithDevTools(applyMiddleware(...middleware)));

    return store;
};

export default rootStore;
