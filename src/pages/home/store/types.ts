export interface IProductItem {
  id: number;
  name: string;
  price: number;
  article: string;
  size: string;
  categories: Array<ICategoryItem>
}

export interface ICategoryItem {
  id: number,
  name: string
}

export interface IProductCardProps {
  product: IProductItem
}

export interface IServiceResponse {
  message: string;
  payload: any;
  isSuccess: boolean;
  errors: Array<string>
}

export interface IProductState {
  list: Array<IProductItem>;
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
