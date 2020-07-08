import React from "react";
import Nav from "./nav";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

// Routes
import PropertiesPage from "../layout/pages/propertiesPage";
import PropertyDetailPage from "./pages/propertyDetailsPage";
import LoginPage from "./pages/loginPage";
import RegisterPage from "../layout/pages/registerPage";

// auth
import * as userActions from "../store/actions/userActions";
import PrivateRoute from "../components/auth/privateRoute";

const Layout = () => {
  const dispatch = useDispatch();

  const token = localStorage.getItem("token");
  dispatch(userActions.setUserToken(token));

  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Switch>
          <PrivateRoute exact path="/">
            <PropertiesPage />
          </PrivateRoute>
          <PrivateRoute path="/property/:id">
            <PropertyDetailPage />
          </PrivateRoute>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Layout;
