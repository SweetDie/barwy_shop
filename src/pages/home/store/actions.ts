import {
  ProductActions,
  IServiceResponse,
  ProductActionTypes
} from "./types";
import { Dispatch } from "react";
import http from "../../../http_common";

export const GetProductList =
  () => async (dispatch: Dispatch<ProductActions>) => {
    try {
      const resp = await http.get<IServiceResponse>("/api/Product/getAll");
      const { data } = resp;
      dispatch({
        type: ProductActionTypes.PRODUCT_LIST,
        payload: {
          list: data.payload
        },
      });
    } catch (error: any) {
      console.log("error", error);
    }
  };
