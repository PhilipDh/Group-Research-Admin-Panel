import moment from "moment";

function createData(time, amount) {
  return { time, amount };
}

export const generateChartData = (data) => {
  var placed = {
    fromZero: 0,
    fromThree: 0,
    fromSix: 0,
    fromNine: 0,
    fromTwelve: 0,
    fromFifteen: 0,
    fromEighteen: 0,
    fromTwentyOne: 0,
  };

  var data = data.filter((order) =>
    moment(order.orderedOn).isBetween(
      moment(Date.now()).startOf("day"),
      moment(Date.now()).endOf("day")
    )
  );

  for (let i = 0; i < data.length; i++) {
    const element = data[i].orderedOn;
    console.log(element);
    if (
      moment(element).isBetween(
        moment(Date.now()).startOf("day"),
        moment(Date.now()).startOf("day").add(3, "hours")
      )
    ) {
      placed.fromZero++;
      console.log("is between 0 and 3");
    } else if (
      moment(element).isBetween(
        moment(Date.now()).startOf("day").add(3, "hours"),
        moment(Date.now()).startOf("day").add(6, "hours")
      )
    ) {
      placed.fromThree++;
      console.log("is between 3 and 6");
    } else if (
      moment(element).isBetween(
        moment(Date.now()).startOf("day").add(6, "hours"),
        moment(Date.now()).startOf("day").add(9, "hours")
      )
    ) {
      placed.fromSix++;
      console.log("is between 6 and 9");
    } else if (
      moment(element).isBetween(
        moment(Date.now()).startOf("day").add(9, "hours"),
        moment(Date.now()).startOf("day").add(12, "hours")
      )
    ) {
      placed.fromNine++;
      console.log("is between 9 and 12");
    } else if (
      moment(element).isBetween(
        moment(Date.now()).startOf("day").add(12, "hours"),
        moment(Date.now()).startOf("day").add(15, "hours")
      )
    ) {
      placed.fromTwelve++;
      console.log("is between 12 and 15");
    } else if (
      moment(element).isBetween(
        moment(Date.now()).startOf("day").add(15, "hours"),
        moment(Date.now()).startOf("day").add(18, "hours")
      )
    ) {
      placed.fromFifteen++;
      console.log("is between 15 and 18");
    } else if (
      moment(element).isBetween(
        moment(Date.now()).startOf("day").add(18, "hours"),
        moment(Date.now()).startOf("day").add(21, "hours")
      )
    ) {
      placed.fromEighteen++;
      console.log("is between 18 and 21");
    } else if (
      moment(element).isBetween(
        moment(Date.now()).startOf("day").add(21, "hours"),
        moment(Date.now()).startOf("day").add(24, "hours")
      )
    ) {
      placed.fromTwentyOne++;
      console.log("is between 21 and 24");
    } else {
      console.log(moment(element).format("DD/HH/YYYY hh:mm:ss"));
    }
  }
  //   console.log(placed);

  const values = [
    createData("00:00", placed.fromZero),
    createData("03:00", placed.fromThree),
    createData("06:00", placed.fromSix),
    createData("09:00", placed.fromNine),
    createData("12:00", placed.fromTwelve),
    createData("15:00", placed.fromFifteen),
    createData("18:00", placed.fromEighteen),
    createData("21:00", placed.fromTwentyOne),
    createData("24:00", undefined),
  ];

  return values;
};
