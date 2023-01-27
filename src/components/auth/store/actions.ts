import { Dispatch } from "react";
import http from "../../../http_common";
import {
  AuthActionTypes,
  AuthActions,
  IAuthProvider,
  IAuthResponse,
  ILoginCredentials,
  IRegister,
} from "./types";

export const Login =
  (credentials: ILoginCredentials) =>
  async (dispatch: Dispatch<AuthActions>) => {
    try {
      const resp = await http.post<IAuthResponse>(
        "/api/Account/login",
        credentials
      );
      const { data } = resp;
      dispatch({
        type: AuthActionTypes.LOGIN,
        payload: {
          token: data.token,
        },
      });
      return Promise.resolve("Успішний вхід");
    } catch (error: any) {
      const { data } = error.response;
      return Promise.reject(data.error);
    }
  };

export const LoginWithProvider =
  (authProvider: IAuthProvider) => async (dispatch: Dispatch<AuthActions>) => {
    try {
      const resp = await http.post<IAuthResponse>(
        "/api/Account/googleExternalLogin",
        authProvider
      );
      const { data } = resp;
      dispatch({
        type: AuthActionTypes.LOGIN,
        payload: {
          token: data.token,
        },
      });
      return Promise.resolve("Успішний вхід");
    } catch (error: any) {
      const { data } = error.response;
      return Promise.reject(data.error);
    }
  };

  export const Register =
  (newUser: IRegister) => async (dispatch: Dispatch<AuthActions>) => {
    try {
      const resp = await http.post(
        "/api/Account/register",
        newUser
      );
      const { data } = resp;
      dispatch({
        type: AuthActionTypes.REGISTER
      });
      return Promise.resolve("Реєстрація пройшла успішно");
    } catch (error: any) {
      const { data } = error.response;
      return Promise.reject(data.error);
    }
  };