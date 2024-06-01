// room component

import React from "react";

const RoomCard = ({ room }) => {
  return (
    <div>
      <h2>{room.type}</h2>
      <p>{room.available ? "Available" : "Not Available"}</p>
      <p>Price: ${room.price}</p>
    </div>
  );
};

export default RoomCard;
