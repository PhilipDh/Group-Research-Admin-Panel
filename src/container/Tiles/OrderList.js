import React, { useEffect, useState } from "react";
import { OrderShortList } from "../../components/Tile/";

//Handles the state for the OrdersTile and all the network requests
export default function OrdersTileContainer(props) {
  const { token } = props;
  const [orderList, setOrderList] = useState([]);
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

    fetch("http://localhost:80/v1/admin/orders", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        result.totalOrders
          ? setOrderList(result.orders.slice(0, 5))
          : setOrderList([]);
        setLoading(false);
      })
      .catch((error) => console.log("error", error));
  }, [token]);

  return <OrderShortList orders={orderList} />;
}
