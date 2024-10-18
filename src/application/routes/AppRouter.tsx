import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DefaultContextProvider } from "../../model/context/ContextProvider";
import { Dashboard, Home } from "../pages";
import { DASHBOARD_ROUTE, HOME_ROUTE } from "./routes";

export default function AppRouter() {
  return (
    <Router>
      <DefaultContextProvider>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path={HOME_ROUTE} element={<Home />} />
          <Route path={DASHBOARD_ROUTE} element={<Dashboard />} />
        </Routes>
      </DefaultContextProvider>
    </Router>
  );
};
