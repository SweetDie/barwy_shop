import { Outlet } from "react-router-dom";
import DefaultHeader from "./DefaultHeader";
import DefaultFooter from "./DefaultFooter";

const DefaultLayout = () => {
  return (
    <>
      <DefaultHeader />
      <div className="container">
        <Outlet />
      </div>
      <DefaultFooter />
    </>
  );
};

export default DefaultLayout;
