import { Dispatch } from "react";
import http from "../../../http_common";
import {
  AuthActionTypes,
  AuthActions,
  IAuthProvider,
  IServiceResponse,
  ILoginCredentials,
  IRegister,
} from "./types";

export const Login =
  (credentials: ILoginCredentials) =>
  async (dispatch: Dispatch<AuthActions>) => {
    try {
      const resp = await http.post<IServiceResponse>(
        "/api/Account/login",
        credentials
      );
      const { data } = resp;
      dispatch({
        type: AuthActionTypes.LOGIN,
        payload: {
          token: data.payload,
        },
      });
      return Promise.resolve(data.message);
    } catch (error: any) {
      const { data } = error.response;
      return Promise.reject(data.message);
    }
  };

export const LoginWithProvider =
  (authProvider: IAuthProvider) => async (dispatch: Dispatch<AuthActions>) => {
    try {
      const resp = await http.post<IServiceResponse>(
        "/api/Account/externalLogin",
        authProvider
      );
      const { data } = resp;
      dispatch({
        type: AuthActionTypes.LOGIN,
        payload: {
          token: data.payload,
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
      const resp = await http.post<IServiceResponse>(
        "/api/Account/register",
        newUser
      );
      const { data } = resp;
      dispatch({
        type: AuthActionTypes.REGISTER
      });
      return Promise.resolve(data.message);
    } catch (error: any) {
      const { data } = error.response;
      return Promise.reject(data.message);
    }
  };