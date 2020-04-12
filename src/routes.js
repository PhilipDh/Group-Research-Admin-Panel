import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { RouteWithLayout } from "./components";
import { Main as MainLayout, Minimal as MinimalLayout } from "./layout";
import {
  UsersList,
  Dashboard,
  OrdersList,
  ProductsList,
  Login,
} from "./container";

//All routes that are reachable for the website
//If the user simply goes to the websites url, he/she will be redirected to /dashboard
//Each Route is wrapped in the "RouteWithLayout" component to keep each page consistent
//The MainLayout provides a sidebar and a main content page
const Routes = (props) => {
  return (
    <Switch>
      <Redirect exact from="/" to="/dashboard" />
      <RouteWithLayout
        component={Dashboard}
        exact
        layout={MainLayout}
        path="/dashboard"
        token={props.token}
        setToken={props.setToken}
      />
      <RouteWithLayout
        component={OrdersList}
        exact
        layout={MainLayout}
        path="/orders"
        token={props.token}
        setToken={props.setToken}
      />
      <RouteWithLayout
        component={UsersList}
        exact
        layout={MainLayout}
        path="/users"
        token={props.token}
        setToken={props.setToken}
      />
      <RouteWithLayout
        component={ProductsList}
        exact
        layout={MainLayout}
        path="/products"
        token={props.token}
        setToken={props.setToken}
      />
      <RouteWithLayout
        component={Login}
        exact
        layout={MinimalLayout}
        path="/login"
        token={props.token}
        setToken={props.setToken}
      />
    </Switch>
  );
};

export default Routes;
