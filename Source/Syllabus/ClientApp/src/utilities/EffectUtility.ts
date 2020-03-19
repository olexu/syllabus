import HttpErrorResponseModel from "../models/HttpErrorResponseModel";
import { AxiosResponse } from "axios";
import * as HttpUtility from "./HttpUtility";

export const getToModel = async <T>(endpoint: string, params?: any): Promise<T | HttpErrorResponseModel> => {
    const response: AxiosResponse | HttpErrorResponseModel = await HttpUtility.get(endpoint, params);

    return _restModelCreator<T>(response);
};

export const postToModel = async <T>(endpoint: string, data?: any): Promise<T | HttpErrorResponseModel> => {
    const response: AxiosResponse | HttpErrorResponseModel = await HttpUtility.post(endpoint, data);

    return _restModelCreator<T>(response);
};

const _restModelCreator = <T>(response: AxiosResponse | HttpErrorResponseModel): T | HttpErrorResponseModel => {
    if (response instanceof HttpErrorResponseModel) {
        return response;
    }
    return response.data as T;
};
