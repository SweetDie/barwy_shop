import * as ProductActionCreators from "../../components/home/store/actions";
import * as AuthActionCreators from "../../components/auth/store/actions";

const actions = {
  ...ProductActionCreators,
  ...AuthActionCreators
};

export default actions;
