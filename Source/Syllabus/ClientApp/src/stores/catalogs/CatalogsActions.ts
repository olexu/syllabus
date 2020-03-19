import HttpErrorResponseModel from "../../models/HttpErrorResponseModel";
import IStore from "../../models/IStore";
import { ReduxDispatch } from "../../models/ReduxProps";
import * as ActionUtility from "../../utilities/ActionUtility";
import CatalogsEffects from "./CatalogsEffects";
import { IFormResponseModel } from "./models/IFormResponseModel";
import { ISemesterResponseModel } from "./models/ISemesterResponseModel";

type ActionUnion = void | HttpErrorResponseModel | ISemesterResponseModel | IFormResponseModel;

export default class CatalogsAction {
    public static readonly REQUEST_FORMS: string = "CatalogsActions.REQUEST_FORMS";
    public static readonly REQUEST_FORMS_FINISHED: string = "CatalogsActions.REQUEST_FORMS_FINISHED";

    public static readonly REQUEST_SEMESTERS: string = "CatalogsActions.REQUEST_SEMESTERS";
    public static readonly REQUEST_SEMESTERS_FINISHED: string = "CatalogsActions.REQUEST_SEMESTERS_FINISHED";

    public static requestSemesters(): any {
        return async (dispatch: ReduxDispatch<ActionUnion>, getState: () => IStore) => {
            await ActionUtility.createThunkEffect<ISemesterResponseModel>(
                dispatch,
                CatalogsAction.REQUEST_SEMESTERS,
                CatalogsEffects.requestSemesters,
            );
        };
    }

    public static requestForms(): any {
        return async (dispatch: ReduxDispatch<ActionUnion>, getState: () => IStore) => {
            await ActionUtility.createThunkEffect<ISemesterResponseModel>(dispatch, CatalogsAction.REQUEST_FORMS, CatalogsEffects.requestForms);
        };
    }
}
