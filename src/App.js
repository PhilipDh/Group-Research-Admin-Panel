import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";
import Routes from "./routes";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import theme from "./theme";
import { allOrders } from "./API/routes";
import { makeRequest } from "./API/request";

const browserHistory = createBrowserHistory();

//Entry point for the Application
//Renders the Routes file
//Themeprovider provides the general theme for the application with the Material UI guidelines
function App() {
  const [token, setToken] = useState(
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNWRhN2RkMTAyODc3MDAyMjQxYzczMiIsImlhdCI6MTU4NjY4NDMwNSwiZXhwIjoxNTg2Njg3OTA1fQ.Nivn3_mnhCNJsyf704EqtguVrLJdF27fFdkp_nPXUJo"
  );

  return (
    <ThemeProvider theme={theme}>
      <Router history={browserHistory}>
        <Routes token={token} setToken={setToken} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
