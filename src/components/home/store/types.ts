export interface IProductItem {
  id: number;
  name: string;
  price: number;
  article: string;
  size: string;
}

export interface IProductResponse {
  data: Array<IProductItem>;
  current_page: number;
  total: number;
  last_page: number;
}

export interface IProductState {
  list: Array<IProductItem>;
  current_page: number;
  total: number;
  count_pages: number;
}

export interface IProductSearch {
  name?: string;
  page?: number | string | null;
  count?: number | string | null;
}

export enum ProductActionTypes {
  PRODUCT_LIST = "PRODUCT_LIST",
}

export interface GetProductsAction {
  type: ProductActionTypes.PRODUCT_LIST;
  payload: IProductState;
}

export type ProductActions = GetProductsAction;
