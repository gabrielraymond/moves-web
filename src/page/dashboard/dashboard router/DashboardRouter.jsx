import React from "react";
import { Route, Switch } from "react-router-dom";
import { useRecoilState } from "recoil";
import Sidebar from "../../../components/Navbar component/Sidebar/Sidebar";
import { authentication } from "../../../store";
import Dashboard from "../dashboardPage/Dashboard";
const DashboardRouter = () => {
  return (
    <div id="dashboard">
      <Sidebar />
      <main
        className="dashboard-layout"
        style={{
          marginLeft: "265px",
          padding: "30px 60px",
          width: "calc(100% - 265px)",
        }}
      >
        <Switch>
          <Route path={"/dashboard"} component={Dashboard} />
        </Switch>
      </main>
    </div>
  );
};

export default DashboardRouter;
