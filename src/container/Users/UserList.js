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

import { UserList, Searchbar } from "../../components/";

import users from "./data";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  content: {
    marginTop: theme.spacing(2),
  },
  searchbar: {
    width: 250,
  },
}));

//Handles the state for the UserList and all the network requests
const UserListContainer = (props) => {
  const classes = useStyles();
  const { token } = props;

  //State for the current page, amount of rows and the filtering of the user list
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState(5);
  const [userList, setUserList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const handlePageChange = (event, page) => {
    setPage(page);
  };

  const handleRowsChange = (event) => {
    setRows(event.target.value);
  };

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);

    var urlencoded = new URLSearchParams();

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("http://localhost:80/v1/admin/users", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setUserList(result.users);
        setFilteredList(result.users);
        setLoading(false);
      })
      .catch((error) => console.log("error", error));
  }, [token]);

  //Filters the userlist on input in the text field
  const handleSearch = (event) => {
    setFilteredList(
      userList.filter((val) => val.firstName.search(event.target.value) != -1)
    );
  };

  return (
    <div className={classes.root}>
      <Searchbar
        className={classes.searchbar}
        placeholder="Search Userlist"
        onChange={handleSearch}
      />
      <div className={classes.content}>
        <UserList
          users={filteredList}
          rows={rows}
          page={page}
          handlePageChange={handlePageChange}
          handleRowsChange={handleRowsChange}
        />
      </div>
    </div>
  );
};

export default UserListContainer;
