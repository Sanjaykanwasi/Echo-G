import React from "react";

const TrendingGames = ({ gameList }) => {
  return (
    <div className="mt-5 hidden md:block">
      <h2 className="font-bold text-[44px] dark:text-purple-700">
        Trending Games
      </h2>
      <div className="md:grid  md:grid-cols-3 gap-3 mt-5 lg:grid-cols-4">
        {gameList.map(
          (item, index) =>
            index < 4 && (
              <div
                className="bg-yellow-200 rounded-2xl group hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer"
                key={index}
              >
                <img
                  className="h-[470px] rounded-2xl object-cover"
                  src={item.background_image}
                />
                <h2 className="dark:text-purple-600 text-[20px] font-bold p-2">
                  {item.name}
                </h2>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default TrendingGames;
