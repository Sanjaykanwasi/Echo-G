import React, { useEffect, useState } from "react";
import GenreList from "../components/GenreList";
import GlobalApi from "../Services/GlobalApi";
import Banner from "../components/Banner";

const Home = () => {
  const [allGameList, setAllGameList] = useState();

  useEffect(() => {
    getAllGames();
  }, []);

  const getAllGames = () => {
    GlobalApi.getAllGames.then((resp) => {
      // console.log(resp.data.results);
      setAllGameList(resp.data.results);
    });
  };

  return (
    <div className="grid grid-cols-4 px-8">
      <div className=" hidden md:block h-full">
        <GenreList />
      </div>
      <div className="md:col-span-3 h-full col-span-4">
        {allGameList?.length > 0 ? (
          <Banner gameBanner={allGameList[0]} />
        ) : null}
      </div>
    </div>
  );
};

export default Home;
