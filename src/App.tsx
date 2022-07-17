import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { URL_LOGIN, URL_BREWERIES } from "./constants/urlRoutes";
import Login from "./pages/Login";

const Breweries = lazy(() => import("./pages/Breweries"));

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={URL_LOGIN} />} />
        <Route path={URL_LOGIN} element={<Login />} />
        <Route
          path={URL_BREWERIES}
          element={
            <Suspense>
              <Breweries />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
