import { Outlet } from "react-router-dom";
import DefaultHeader from "./DefaultHeader";
import DefaultFooter from "./DefaultFooter";
import { Container } from "@mui/system";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import Loader from "../../loader";

const DefaultLayout: React.FC = () => {
  const { loading } = useTypedSelector((store) => store.product);

  return (
    <>
      <DefaultHeader />
      {loading ? <Loader /> : <></>}
      <Container fixed sx={{ p: 5 }}>
        <Outlet />
      </Container>
      <DefaultFooter />
    </>
  );
};

export default DefaultLayout;
