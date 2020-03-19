import { IFormResponseModel } from "./IFormResponseModel";
import { ISemesterResponseModel } from "./ISemesterResponseModel";

export interface IFormsState {
    readonly [id: string]: IFormResponseModel | null;
}

export interface ISemestersState {
    readonly [id: string]: ISemesterResponseModel | null;
}

export interface ICatalogsState {
    readonly forms: IFormsState;
    readonly semesters: ISemestersState;
}
