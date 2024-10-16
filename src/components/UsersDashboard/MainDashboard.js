import React from "react";
import SearchUsers from "./SearchUsers";
import ListUsers from "./ListUsers";

const MainDashboard = () => {
  return (
    <div className="w-full flex flex-col justify-between items-center p-10 space-y-5">
      <SearchUsers />
      <ListUsers />
    </div>
  );
};

export default MainDashboard;
