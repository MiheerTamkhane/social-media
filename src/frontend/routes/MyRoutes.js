import { Routes, Route } from "react-router-dom";
import {
  RegisterPage,
  HomePage,
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
      <Route path="/" element={<HomePage page={<Feed />} />} />
      <Route path="/profile" element={<HomePage page={<ProfilePage />} />} />
      <Route path="/bookmarks" element={<HomePage page={<BookmarkPage />} />} />
      <Route path="/explore" element={<HomePage page={<ExplorePage />} />} />
    </Routes>
  );
};
