import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";
import { AppBar, Toolbar } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: 64,
    height: "100%",
  },
  content: {
    height: "100%",
  },
}));

const Minimal = (props) => {
  const { children } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="primary" position="fixed">
        <Toolbar></Toolbar>
      </AppBar>
      <main className={classes.content}>{children}</main>
    </div>
  );
};

Minimal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Minimal;
