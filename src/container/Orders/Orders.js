import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TablePagination
} from "@material-ui/core";

import OrderList from "../../components/Lists/OrderListPage";

import orders from "./data";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

//Handles the state for the OrderList and all the network requests
const OrderListContainer = () => {
  const classes = useStyles();

  //State for the page and rows that are being displayed
  const [orderStatus, setOrderStatus] = useState("ordered");
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState(5);

  const handlePageChange = (event, page) => {
    setPage(page);
  };

  const handleRowsChange = event => {
    setRows(event.target.value);
  };

  const handleChange = event => setOrderStatus(event.target.value);

  //Renders the OrderList component
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <OrderList
          orders={orders}
          orderStatus={orderStatus}
          handleChange={handleChange}
          rows={rows}
          page={page}
          handlePageChange={handlePageChange}
          handleRowsChange={handleRowsChange}
        />
      </div>
    </div>
  );
};

export default OrderListContainer;
