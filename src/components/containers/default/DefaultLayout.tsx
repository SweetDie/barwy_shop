import { Outlet } from "react-router-dom";
import DefaultHeader from "./DefaultHeader";
import DefaultFooter from "./DefaultFooter";
import { Container } from "@mui/system";

const DefaultLayout: React.FC = () => {
  return (
    <>
      <DefaultHeader />
      <Container fixed sx={{ p: 5 }}>
        <Outlet />
      </Container>
      <DefaultFooter />
    </>
  );
};

export default DefaultLayout;
