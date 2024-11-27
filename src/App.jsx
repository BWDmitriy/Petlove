import { Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import LoginPage from "./pages/LoginPage/LoginPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default App;
