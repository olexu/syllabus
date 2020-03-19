import { RouterState } from "connected-react-router";
import { LocalizeState } from "react-localize-redux";

import { ICatalogsState } from "../stores/catalogs/models/ICatalogsState";
import IErrorState from "../stores/error/models/IErrorState";
import IRequestingState from "../stores/requesting/models/IRequestingState";
import IToastsState from "../stores/toasts/models/IToastsState";

export default interface IStore {
    readonly error: IErrorState;
    readonly requesting: IRequestingState;
    readonly router: RouterState;
    readonly localize: LocalizeState;
    readonly catalogs: ICatalogsState;
    readonly toasts: IToastsState;
}
