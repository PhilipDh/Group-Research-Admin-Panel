import React from "react";
import UsersTile from "../../components/Tile/UsersTile";

//Handles the state for the UsersTile and all the network requests
export default function UsersTileContainer() {
  return <UsersTile users={1512} />;
}
