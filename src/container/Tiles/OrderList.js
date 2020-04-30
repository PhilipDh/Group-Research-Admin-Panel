import React, { useEffect, useState } from "react";
import { OrderShortList } from "../../components/Tile/";

//Handles the state for the OrdersTile and all the network requests
export default function OrdersTileContainer(props) {
  const { token } = props;
  const [orderList, setOrderList] = useState([]);
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

    //Network request to get all orders
    fetch("http://localhost:80/v1/admin/orders", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        result.totalOrders
          ? setOrderList(
              result.orders.slice(0, 5).sort((a, b) => {
                let aDate = new Date(a.orderedOn);
                let bDate = new Date(b.orderedOn);
                return aDate - bDate;
              })
            )
          : setOrderList([]);
        setLoading(false);
      })
      .catch((error) => console.log("error", error));
  }, [token]);

  return <OrderShortList orders={orderList} />;
}
