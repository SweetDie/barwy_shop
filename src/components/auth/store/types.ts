export interface ILoginCredentials {
  email: string;
  password: string;
}

export interface IAuthResponse {
    token: string;
  }


export interface IAuthState {
    token: string | null;
  }

export enum AuthActionTypes {
  LOGIN = "LOGIN",
}

export interface ILoginAction {
    type: AuthActionTypes.LOGIN;
    payload: IAuthState;
  }

export type AuthActions = ILoginAction;