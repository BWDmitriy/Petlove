// src/App.jsx
import React, { useState } from "react";
import Header from "./components/Header";
import Loader from "./components/Loader";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Header isAuthenticated={isAuthenticated} />
      {loading && <Loader />}
      {/* Other components and routes */}
    </>
  );
}

export default App;
