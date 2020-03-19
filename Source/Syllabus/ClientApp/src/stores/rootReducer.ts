import { connectRouter } from "connected-react-router";
import { History } from "history";
import { localizeReducer } from "react-localize-redux";
import { combineReducers, Reducer, ReducersMapObject } from "redux";

import IStore from "../models/IStore";
import catalogsReducer from "./catalogs/CatalogsReducer";
import errorReducer from "./error/ErrorReducer";
import requestingReducer from "./requesting/RequestingReducer";
import toastsReducer from "./toasts/ToastsReducer";

const rootReducer = (history: History): Reducer<IStore> => {
    const reducerMap: ReducersMapObject<IStore> = {
        error: errorReducer,
        requesting: requestingReducer,
        router: connectRouter(history) as any,
        localize: localizeReducer as any,
        catalogs: catalogsReducer,
        toasts: toastsReducer,
    };

    return combineReducers(reducerMap);
};

export default rootReducer;
