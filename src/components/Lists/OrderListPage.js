import React from "react";
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
  Select,
  MenuItem,
  FormControl,
  Collapse
} from "@material-ui/core";
import moment from "moment";

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1050
  },
  nameContainer: {
    display: "flex",
    alignItems: "center"
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  actions: {
    justifyContent: "flex-end"
  },
  formControl: {
    minWidth: 120
  },
  selectEmpty: {
    // marginTop: theme.spacing(2)
  }
}));

const OrderList = props => {
  const classes = useStyles();
  const {
    orders,
    handleChange,
    orderStatus,
    rows,
    page,
    handlePageChange,
    handleRowsChange
  } = props;
  return (
    <Card>
      <CardContent className={classes.content}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell>Products</TableCell>
              <TableCell>Order Date</TableCell>
              <TableCell>Order Status</TableCell>
              <TableCell>Order Total ($)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.slice(rows * page, rows + rows * page).map(order => (
              <TableRow className={classes.tableRow} key={order.id}>
                <TableCell className>{order.email}</TableCell>
                <TableCell>{order.products.length}</TableCell>
                <TableCell>
                  {moment(order.orderDate).format("DD/MM/YYYY")}
                </TableCell>
                <TableCell>
                  <FormControl className={classes.formControl}>
                    <Select value={orderStatus} onChange={handleChange}>
                      <MenuItem value="pending">Pending</MenuItem>
                      <MenuItem value="ordered">Ordered</MenuItem>
                      <MenuItem value="shipped">Shipped</MenuItem>
                      <MenuItem value="completed">Completed</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell>{order.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <CardActions className={classes.actions}>
          <TablePagination
            component="div"
            count={orders.length}
            onChangePage={handlePageChange}
            onChangeRowsPerPage={handleRowsChange}
            page={page}
            rowsPerPage={rows}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default OrderList;
