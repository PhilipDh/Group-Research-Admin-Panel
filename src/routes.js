import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { RouteWithLayout } from "./components";
import { Main as MainLayout } from "./layout";
import { UsersList, Dashboard, OrdersList, ProductsList } from "./container";

//All routes that are reachable for the website
//If the user simply goes to teh websites url, he/she will be redirected to /dashboard
//Each Route is wrapped in the "RouteWithLayout" component to keep each page consistent
//The MainLayout provides a sidebar and a main content page
const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/dashboard" />
      <RouteWithLayout
        component={Dashboard}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={OrdersList}
        exact
        layout={MainLayout}
        path="/orders"
      />
      <RouteWithLayout
        component={UsersList}
        exact
        layout={MainLayout}
        path="/users"
      />
      <RouteWithLayout
        component={ProductsList}
        exact
        layout={MainLayout}
        path="/products"
      />
    </Switch>
  );
};

export default Routes;
