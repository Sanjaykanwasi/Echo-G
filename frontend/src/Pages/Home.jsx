import React from "react";
import GenreList from "../components/GenreList";

const Home = () => {
  return (
    <div className="grid grid-cols-4 px-8">
      <div className=" hidden md:block h-full">
        <GenreList />
      </div>
      <div className="md:col-span-3 h-full col-span-4">Game List</div>
    </div>
  );
};

export default Home;
