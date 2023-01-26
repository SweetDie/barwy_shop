import "./App.css";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/containers/default";
import LoginPage from "./components/auth/login";
import NotFoundPage from "./components/notFound";
import HomePage from "./components/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
