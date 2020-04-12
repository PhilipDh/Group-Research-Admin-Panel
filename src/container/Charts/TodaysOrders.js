import React, { useState, useEffect } from "react";
import Chart from "../../components/Charts/Chart";
import moment from "moment";
import { generateChartData } from "../../util/chartUtility";

const orderData = require("../Orders/data");

function TodaysOrdersContainer(props) {
  const { token } = props;
  const [orders, setOrders] = useState([]);
  const [isLoading, setLoading] = useState(true);

  //console.log((moment(Date.now()).endOf("day")).format("MM/DD/YYYY hh mm"));

  var data = generateChartData(orderData.default);

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
        result.orders
          ? setOrders(generateChartData(result.orders))
          : setOrders([]);
        setLoading(false);
        console.log(orders);
      })
      .catch((error) => console.log("error", error));
  }, [token]);
  return <Chart orderData={orders} />;
}

export default TodaysOrdersContainer;
