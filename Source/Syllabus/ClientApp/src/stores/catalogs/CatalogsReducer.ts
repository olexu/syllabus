import { Reducer } from "redux";

import IAction from "../../models/IAction";
import baseReducer from "../../utilities/BaseReducer";
import CatalogsActions from "./CatalogsActions";
import { ICatalogsState } from "./models/ICatalogsState";
import { IFormResponseModel } from "./models/IFormResponseModel";
import { ISemesterResponseModel } from "./models/ISemesterResponseModel";

export const initialState: ICatalogsState = {
    forms: {},
    semesters: {},
};

const catalogsReducer: Reducer = baseReducer(initialState, {
    [CatalogsActions.REQUEST_SEMESTERS_FINISHED](state: ICatalogsState, action: IAction<ISemesterResponseModel[]>): ICatalogsState {
        if (action.payload) {
            return {
                ...state,
                semesters: {
                    ...state.semesters,
                    ...action.payload.reduce((obj: any, item) => {
                        obj[item.id] = item;
                        return obj;
                    }, {}),
                },
            };
        } else {
            return state;
        }
    },

    [CatalogsActions.REQUEST_FORMS_FINISHED](state: ICatalogsState, action: IAction<IFormResponseModel[]>): ICatalogsState {
        if (action.payload) {
            return {
                ...state,
                forms: {
                    ...state.forms,
                    ...action.payload.reduce((obj: any, item) => {
                        obj[item.id] = item;
                        return obj;
                    }, {}),
                },
            };
        } else {
            return state;
        }
    },
});

export default catalogsReducer;
