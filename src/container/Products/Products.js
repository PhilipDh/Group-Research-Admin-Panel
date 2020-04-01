import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";

import ProductList from "../../components/Lists/ProductListPage";

import products from "./data";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

//Handles the state for the ProductList and all the network requests
const ProductsListContainer = () => {
  const classes = useStyles();

  //State for current page, amount of rows displayed and on which column is filtered
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState(5);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");

  const handlePageChange = (event, page) => {
    setPage(page);
  };

  const handleRowsChange = event => {
    setRows(event.target.value);
  };

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <ProductList
          products={products}
          rows={rows}
          page={page}
          handlePageChange={handlePageChange}
          handleRowsChange={handleRowsChange}
          order={order}
          setOrder={setOrder}
          orderBy={orderBy}
          setOrderBy={setOrderBy}
        />
      </div>
    </div>
  );
};

export default ProductsListContainer;
