export interface ILoginCredentials {
  email: string;
  password: string;
}

export interface IRegister {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string | null;
  lastName: string | null;
}

export interface IAuthProvider {
  provider: string;
  token: string;
}

export interface IAuthState {
  token: string | null;
}

export enum AuthActionTypes {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
}

export interface ILoginAction {
  type: AuthActionTypes.LOGIN;
  payload: IAuthState;
}

export interface IRegisterAction {
  type: AuthActionTypes.REGISTER;
}

export type AuthActions = ILoginAction | IRegisterAction;
