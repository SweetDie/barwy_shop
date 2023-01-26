import { Dispatch } from "react";
import http from "../../../http_common";
import {
  AuthActionTypes,
  AuthActions,
  IAuthResponse,
  ILoginCredentials,
} from "./types";

export const Login =
  (credentials: ILoginCredentials) =>
  async (dispatch: Dispatch<AuthActions>) => {
    try {
      const resp = await http.post<IAuthResponse>(
        "/api/Account/login",
        {
          email: credentials.email,
          password: credentials.password
        }
      );
      const { data } = resp;
      dispatch({
        type: AuthActionTypes.LOGIN,
        payload: {
          token: data.token,
        },
      });
    } catch (error: any) {
      console.log("error", error);
    }
  };
