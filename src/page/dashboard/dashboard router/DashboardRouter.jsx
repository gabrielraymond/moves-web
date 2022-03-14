import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../dashboardPage/Dashboard";
const DashboardRouter = () => {
  return (
    <div>
      <Switch>
        <Route path={"/dashboard"} component={Dashboard} />
      </Switch>
    </div>
  );
};

export default DashboardRouter;
