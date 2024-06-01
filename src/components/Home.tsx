// Home component that displays a list of available rooms

import React from "react";
import RoomCard from "./RoomCard";

const Home = () => {
  const rooms = [
    { id: 1, type: "Single", available: true, price: 100 },
    { id: 2, type: "Double", available: false, price: 200 },
    { id: 3, type: "Suite", available: true, price: 300 },
  ];

  return (
    <div>
      <h1>Available Rooms</h1>
      <div>
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default Home;
