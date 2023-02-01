import { Action } from "@remix-run/router";
import { IProductState, ProductActionTypes, ProductActions } from "./types";

const initialState: IProductState = {
  list: []
};

export const productReducer = (
  state = initialState,
  action: ProductActions
): IProductState => {
  switch (action.type) {
    case ProductActionTypes.PRODUCT_LIST: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};
