import React, { useState, useEffect } from "react";
import ProductsTile from "../../components/Tile/ProductsTile";

//Handles the state for the ProductTile and all the network requests
export default function ProductsTileContainer(props) {
  const { token } = props;
  const [products, setProducts] = useState("N/A");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
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

    //Network request to get amount of products
    fetch("http://localhost:80/v1/admin/products", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        result.totalProducts
          ? setProducts(result.totalProducts)
          : setProducts(0);
        setLoading(false);
      })
      .catch((error) => console.log("error", error));
  }, [token]);

  return <ProductsTile products={products} />;
}
