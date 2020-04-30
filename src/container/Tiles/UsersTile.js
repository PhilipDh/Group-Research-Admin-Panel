import React, { useState, useEffect } from "react";
import UsersTile from "../../components/Tile/UsersTile";

//Handles the state for the UsersTile and all the network requests
export default function UsersTileContainer(props) {
  const { token } = props;
  const [users, setUsers] = useState("N/A");
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

    //Network request to get the total amount of users
    fetch("http://localhost:80/v1/admin/users", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        result.total ? setUsers(result.total) : setUsers(0);
        setLoading(false);
      })
      .catch((error) => console.log("error", error));
  }, [token]);
  return <UsersTile users={users} />;
}
