import React, { useEffect, useState } from "react";
import OrdersTile from "../../components/Tile/OrdersTile";

//Handles the state for the OrdersTile and all the network requests
export default function OrdersTileContainer(props) {
  const { token } = props;
  const [orders, setOrders] = useState("N/A");
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

    //Network request to get amount of orders
    fetch("http://localhost:80/v1/admin/orders", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        result.totalOrders ? setOrders(result.totalOrders) : setOrders(0);
        setLoading(false);
      })
      .catch((error) => console.log("error", error));
  }, [token]);

  return <OrdersTile products={orders} />;
}
