import React, { useState, useEffect } from "react";
import ProductsTile from "../../components/Tile/ProductsTile";

//Handles the state for the ProductTile and all the network requests
export default function ProductsTileContainer(props) {
  const { token } = props;
  const [products, setProducts] = useState("N/A");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);

    var urlencoded = new URLSearchParams();

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("http://localhost:80/v1/admin/products", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        result.totalProducts
          ? setProducts(result.totalProducts)
          : setProducts(0);
        setLoading(false);
      })
      .catch((error) => console.log("error", error));
  });

  return <ProductsTile products={products} />;
}
