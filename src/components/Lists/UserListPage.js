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
  TablePagination
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
  }
}));

const UserList = props => {
  const classes = useStyles();
  const { users, page, rows, handlePageChange, handleRowsChange } = props;
  return (
    <Card>
      <CardContent className={classes.content}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Registration Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.slice(rows * page, rows + rows * page).map(user => (
              <TableRow hover className={classes.tableRow} key={user.id}>
                <TableCell className>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  {user.address.city}, {user.address.state},{" "}
                  {user.address.country}
                </TableCell>
                <TableCell>
                  {moment(user.createdAt).format("DD/MM/YYYY")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <CardActions className={classes.actions}>
          <TablePagination
            component="div"
            count={users.length}
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

export default UserList;
