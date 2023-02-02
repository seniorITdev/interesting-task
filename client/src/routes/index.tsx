import { ReactElement } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../views/LoginPage";
import RegisterPage from "../views/RegisterPage";
import Profile from "../views/ProfilePage";
import CreateProfile from "../views/CreateProfile";
import EditProfile from "../views/EditProfile";
import NotFoundPage from "../views/NotFoundPage";

const RootRouter: React.FC = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="/profile/create" element={<CreateProfile />} />
      <Route path="/profile/edit/:id" element={<EditProfile />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default RootRouter;
