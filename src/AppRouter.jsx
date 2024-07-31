import { Routes, Route } from "react-router-dom";
import GetStarted from "./components/GetStarted/GetStarted";
import Error404 from "./components/ErrorPages/Error404/Error404";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<GetStarted />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default AppRoutes;
