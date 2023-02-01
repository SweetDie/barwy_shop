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
        token: action.payload.token
      };
    }
    default:
      return state;
  }
};
