import React, { forwardRef } from "react";
import Link from "@material-ui/core/Link";
import { NavLink as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "../Title";
import moment from "moment";

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function OrderShortList(props) {
  const classes = useStyles();

  const { orders } = props;
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Order Status</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order._id}>
              <TableCell>
                {moment(order.orderedOn).format("DD/MM/YYYY")}
              </TableCell>
              <TableCell>{order.user.email}</TableCell>
              <TableCell>UK</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell align="right">{order.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
