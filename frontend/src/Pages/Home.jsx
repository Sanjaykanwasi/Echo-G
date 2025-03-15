import React, { useEffect, useState } from "react";
import GenreList from "../components/GenreList";
import GlobalApi from "../Services/GlobalApi";
import Banner from "../components/Banner";
import TrendingGames from "../components/TrendingGames";
import GamesByGenreId from "../components/GamesByGenreId";

const Home = () => {
  const [allGameList, setAllGameList] = useState();
  const [gameListByGenre, setGameListByGenre] = useState([]);
  const [selectedGenresName, setSelectedGenresName] = useState("Action");

  useEffect(() => {
    getAllGames();
    getGameListByGenresId(4);
  }, []);

  const getAllGames = () => {
    GlobalApi.getAllGames.then((resp) => {
      setAllGameList(resp.data.results);
    });
  };

  const getGameListByGenresId = (id) => {
    GlobalApi.getGameListByGenreId(id).then((resp) => {
      setGameListByGenre(resp.data.results);
    });
  };

  return (
    <div className="grid grid-cols-4 px-8">
      <div className=" hidden md:block h-full">
        <GenreList
          selectedGenresName={(name) => setSelectedGenresName(name)}
          genereId={(genereId) => getGameListByGenresId(genereId)}
        />
      </div>
      <div className="md:col-span-3 h-full col-span-4">
        {allGameList?.length > 0 && gameListByGenre.length > 0 ? (
          <div>
            <Banner gameBanner={allGameList[0]} />
            <TrendingGames gameList={allGameList} />
            <GamesByGenreId
              gameList={gameListByGenre}
              selectedGenresName={selectedGenresName}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
