import { Routes, Route } from "react-router-dom";
import {
  RegisterPage,
  Home,
  ProfilePage,
  BookmarkPage,
  ExplorePage,
} from "../pages";
import { Feed } from "../components";
import Mockman from "mockman-js";
export const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/mock" element={<Mockman />} />
      <Route path="/" element={<Home page={<Feed />} />} />
      <Route path="/profile" element={<Home page={<ProfilePage />} />} />
      <Route path="/bookmarks" element={<Home page={<BookmarkPage />} />} />
      <Route path="/explore" element={<Home page={<ExplorePage />} />} />
    </Routes>
  );
};
