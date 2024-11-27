// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
// import NewsPage from "./pages/NewsPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import NoticesPage from "./pages/NoticesPage/NoticesPage";
import FriendsPage from "./pages/FriendsPage/FriendsPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import AddPetPage from "./pages/AddPetPage/AddPetPage";

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/notices" element={<NoticesPage />} />
      <Route path="/friends" element={<FriendsPage />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/add-pet" element={<AddPetPage />} />
    </Routes>
  );
};

export default App;
