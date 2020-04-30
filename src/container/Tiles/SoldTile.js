import React, { useState, useEffect } from "react";
import SoldTile from "../../components/Tile/SoldTile";

//Handles the state for the SoldTile and all the network requests
export default function SoldTileContainer(props) {
  const { token } = props;
  const [revenue, setRevenue] = useState("N/A");
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

    //Network request to get total for all orders
    fetch("http://localhost:80/v1/admin/orders", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        result.totalRevenue ? setRevenue(result.totalRevenue) : setRevenue(0);
        setLoading(false);
      })
      .catch((error) => console.log("error", error));
  }, [token]);

  return <SoldTile money={revenue} />;
}
