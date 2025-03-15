import React, { useEffect, useState } from "react";

const GamesByGenreId = ({ gameList, selectedGenresName }) => {
  //   useEffect(() => {
  //     console.log(gameList);
  //   }, []);

  return (
    <div>
      <h2 className="text-purple-800 font-bold text-[44px] mt-5">
        Popular {selectedGenresName} Games
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 cursor-pointer">
        {gameList.map((item, index) => (
          <div
            className="bg-yellow-200 p-2 rounded-2xl h-full pb-10 hover:scale-105 ease-in-out transition-all duration-300"
            key={index}
          >
            {" "}
            <img
              src={item.background_image}
              alt="Image"
              className="w-full h-[80%] rounded-2xl object-cover"
            />
            <h2 className="text-purple-800 font-bold text-[20px] flex items-center ">
              {item.name}{" "}
              <span className="p-1 rounded-full ml-2 text-[18px] bg-green-200 text-green-700 font-medium mt-2">
                {item.metacritic}
              </span>
            </h2>
            <h2 className="text-purple-800 font-bold text-[16px]">
              ⭐{item.rating} 💬{item.reviews_count} 🔥{item.suggestions_count}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamesByGenreId;
