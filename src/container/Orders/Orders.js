import React, { useState, useEffect } from "react";
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
  TablePagination,
} from "@material-ui/core";

import OrderList from "../../components/Lists/OrderListPage";
import { allOrders, makeRequest } from "../../API";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  content: {
    marginTop: theme.spacing(2),
  },
}));

//Handles the state for the OrderList and all the network requests
const OrderListContainer = (props) => {
  const classes = useStyles();
  const { token } = props;

  //State for the page and rows that are being displayed
  const [orderStatus, setOrderStatus] = useState("ordered");
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState(5);
  const [orders, setOrders] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const handlePageChange = (event, page) => {
    setPage(page);
  };

  const handleRowsChange = (event) => {
    setRows(event.target.value);
  };

  const changeOrderStatus = async (value, id) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", token);
    myHeaders.append("Accept", "application/json");

    //Body for the PUT request
    var body = {
      order: id,
      status: value,
    };

    //Params for the network request
    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: JSON.stringify(body),
      redirect: "follow",
    };

    //PUT network request to change order status
    fetch("http://localhost:80/v1/admin/order", requestOptions)
      .then((response) => response.text())
      .then((result) => getAllOrders()) //Fetch updated results from backend
      .catch((error) => console.log("error", error));
  };

  const getAllOrders = async () => {
    //Headers for network request
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);

    var urlencoded = new URLSearchParams();

    //Params for network request
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    //Networ request to get all orders
    fetch("http://localhost:80/v1/admin/orders", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        result.orders
          ? setOrders(
              result.orders.sort((a, b) => {
                let aDate = new Date(a.orderedOn);
                let bDate = new Date(b.orderedOn);
                return aDate - bDate;
              })
            )
          : setOrders([]);
        setLoading(false);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getAllOrders();
  }, [token]);

  //Renders the OrderList component
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <OrderList
          orders={orders}
          orderStatus={orderStatus}
          rows={rows}
          page={page}
          handlePageChange={handlePageChange}
          handleRowsChange={handleRowsChange}
          changeOrderStatus={changeOrderStatus}
        />
      </div>
    </div>
  );
};

export default OrderListContainer;
