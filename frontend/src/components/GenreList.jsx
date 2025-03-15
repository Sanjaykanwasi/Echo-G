import React, { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";

const GenreList = () => {
  const [genreList, setGenreList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    getGenreList();
  }, []);

  const getGenreList = () => {
    GlobalApi.getGenreList.then((resp) => {
      //   console.log(resp.data.results);
      setGenreList(resp.data.results);
    });
  };

  return (
    <div>
      <h2 className="text-[40px] font-bold dark:text-purple-700">Genre</h2>
      {genreList.map((item, index) => (
        <div
          key={index}
          onClick={() => setActiveIndex(index)}
          className={`flex group gap-2 items-center mb-2 rounded-2xl cursor-pointer hover:bg-purple-800 p-2 hover:dark:bg-purple-800 ${
            activeIndex === index ? "bg-purple-800 dark:bg-purple-800" : null
          }`}
        >
          <img
            src={item.image_background}
            alt="Image"
            className={`w-[60px] h-[60px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-400 ${
              activeIndex === index ? "scale-105" : null
            }`}
          />
          <h3
            className={`dark:text-yellow-600 text-[18px] group-hover:font-bold transition-all ease-out duration-400 ${
              activeIndex === index ? "font-bold" : null
            }`}
          >
            {item.name}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default GenreList;
