import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";

import ProductList from "../../components/Lists/ProductListPage";

import products from "./data";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  content: {
    marginTop: theme.spacing(2),
  },
}));

//Handles the state for the ProductList and all the network requests
const ProductsListContainer = (props) => {
  const classes = useStyles();
  const { token } = props;

  var myHeaders = new Headers();
  myHeaders.append("Authorization", token);

  var urlencoded = new URLSearchParams();

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  //State for current page, amount of rows displayed and on which column is filtered
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState(10);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:80/v1/admin/products", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setProducts(result.products);
        setLoading(false);
      })
      .catch((error) => console.log("error", error));
  }, [token]);

  const handlePageChange = (event, page) => {
    setPage(page);
  };

  const handleRowsChange = (event) => {
    setRows(event.target.value);
  };

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        {isLoading ? (
          <div>Loading</div>
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default ProductsListContainer;
