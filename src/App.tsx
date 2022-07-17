import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { URL_LOGIN, URL_BREWERIES } from "./constants/urlRoutes";
import Breweries from "./pages/Breweries";
import Login from "./pages/Login";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={URL_LOGIN} />} />
        <Route path={URL_LOGIN} element={<Login />} />
        <Route path={URL_BREWERIES} element={<Breweries />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
