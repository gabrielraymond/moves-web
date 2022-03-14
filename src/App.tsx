import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import DashboardRouter from "./page/dashboard/dashboard router/DashboardRouter";
import LandingPage from "./page/landingPage/LandingPage";
import Login from "./page/login/Login";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path={"/"} exact component={LandingPage} />
          <Route path={"/login"} component={Login} />
          <Route component={DashboardRouter} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
