import HttpErrorResponseModel from "../../models/HttpErrorResponseModel";
import * as EffectUtility from "../../utilities/EffectUtility";
import { IFormResponseModel } from "./models/IFormResponseModel";
import { ISemesterResponseModel } from "./models/ISemesterResponseModel";

export default class CatalogsEffect {
    public static async requestSemesters(): Promise<ISemesterResponseModel | HttpErrorResponseModel> {
        return EffectUtility.getToModel<ISemesterResponseModel>("api/Semesters");
    }

    public static async requestForms(): Promise<IFormResponseModel | HttpErrorResponseModel> {
        return EffectUtility.getToModel<IFormResponseModel>("api/Forms");
    }
}
