import React from "react";
import { Route, Switch } from "react-router-dom";
import Sidebar from "../../../components/Navbar component/Sidebar/Sidebar";
import Dashboard from "../dashboardPage/Dashboard";
const DashboardRouter = () => {
  return (
    <div id="dashboard">
      <Sidebar />
      <main
        className="dashboard-layout col-md-9  col-lg-10 px-md-4"
        style={{ marginLeft: "265px" }}
      >
        <Switch>
          <Route path={"/dashboard"} component={Dashboard} />
        </Switch>
      </main>
    </div>
  );
};

export default DashboardRouter;
