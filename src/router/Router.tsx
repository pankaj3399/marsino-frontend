import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardLayout from "../layouts/DashbaordLayout";
// import Home from "../pages/Home/Home";
import { ROUTES } from "./RouteConfig";
import Reports from "../pages/report/Report";

type Props = {};

const Router = (props: Props) => {
  return (
    <Routes>
      <Route
        path={ROUTES.HOME.path}
        element={<DashboardLayout children={<Reports />} />}
      />
      <Route
        path={ROUTES.REPORTS.path}
        element={<DashboardLayout children={<Reports />} />}
      />
    </Routes>
  );
};

export default Router;
