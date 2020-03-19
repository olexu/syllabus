import { getActiveLanguage } from "react-localize-redux";
import { createSelector, Selector } from "reselect";

import IStore from "../../models/IStore";
import { IFormsState, ISemestersState } from "../../stores/catalogs/models/ICatalogsState";
import { IForm } from "./models/IForm";
import { ISemester } from "./models/ISemester";

const getLanguageCode = (state: IStore) => getActiveLanguage(state.localize).code;

const _selectSemesters = (semestersState: ISemestersState, languageCode: string): ISemester[] => {
    return Object.keys(semestersState).map((id: string) => {
        let name: string | undefined;
        switch (languageCode) {
            case "en":
                name = semestersState[id]?.name_En;
                break;
            case "ru":
                name = semestersState[id]?.name_En;
                break;
            default:
                name = semestersState[id]?.name_Uk;
        }
        return {
            id: semestersState[id]?.id,
            name,
        } as ISemester;
    });
};

const _selectForms = (formsState: IFormsState, languageCode: string): IForm[] => {
    return Object.keys(formsState).map((id: string) => {
        let name: string | undefined;
        switch (languageCode) {
            case "en":
                name = formsState[id]?.name_En;
                break;
            case "ru":
                name = formsState[id]?.name_En;
                break;
            default:
                name = formsState[id]?.name_Uk;
        }
        return {
            id: formsState[id]?.id,
            name,
        } as IForm;
    });
};

export const selectSemesters: Selector<IStore, ISemester[]> = createSelector(
    [(state: IStore) => state.catalogs.semesters, getLanguageCode],
    _selectSemesters,
);

export const selectForms: Selector<IStore, IForm[]> = createSelector([(state: IStore) => state.catalogs.forms, getLanguageCode], _selectForms);
