import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Container,
  Grid,
  Box,
  Paper,
  Link,
} from "@material-ui/core";
import { Deposits, OrdersShortList } from "../../components";
import {
  UsersTile,
  OrdersTile,
  SoldTile,
  ProductsTile,
  OrderListTile,
} from "../Tiles";
import { default as TodaysOrders } from "../Charts";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard(props) {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const { token } = props;

  //Rendering the main Dashboard with all its components on a Grid layout
  return (
    <div className={classes.root}>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3} justify="center">
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={classes.paper}>
              <UsersTile token={token} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={classes.paper}>
              <OrdersTile token={token} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={classes.paper}>
              <SoldTile token={token} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={classes.paper}>
              <ProductsTile token={token} />
            </Paper>
          </Grid>
          {/* Chart */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper className={fixedHeightPaper}>
              <TodaysOrders token={token} />
            </Paper>
          </Grid>
          {/* Recent Deposits */}

          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <OrderListTile token={token} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
