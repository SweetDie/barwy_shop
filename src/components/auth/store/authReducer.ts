import { Action } from "@remix-run/router";
import { IAuthState, AuthActionTypes, AuthActions } from "./types";

const initialState: IAuthState = {
    token: null
};

export const authReducer = (
  state = initialState,
  action: AuthActions
): IAuthState => {
  switch (action.type) {
    case AuthActionTypes.LOGIN: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};
