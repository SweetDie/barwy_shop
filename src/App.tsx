import "./App.css";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/containers/default";
import LoginPage from "./pages/auth/login";
import NotFoundPage from "./pages/notFound";
import HomePage from "./pages/home";
import RegisterPage from "./pages/auth/register";
import CreateProductPage from "./pages/product/productCreate";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="create" element={<CreateProductPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
