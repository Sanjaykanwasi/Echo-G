import React, { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";

const GenreList = ({ genereId, selectedGenresName }) => {
  const [genreList, setGenreList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    getGenreList();
  }, []);

  const getGenreList = () => {
    GlobalApi.getGenreList.then((resp) => {
      setGenreList(resp.data.results);
    });
  };

  return (
    <div>
      <h2 className="text-[40px] font-bold dark:text-purple-700">Genre</h2>
      {genreList.map((item, index) => (
        <div
          key={index}
          onClick={() => {
            setActiveIndex(index);
            genereId(item.id);
            selectedGenresName(item.name);
          }}
          className={`flex group gap-2 items-center mb-2 rounded-2xl cursor-pointer hover:bg-yellow-200 p-2 hover:dark:bg-yellow-200 ${
            activeIndex === index ? "bg-yellow-200 dark:bg-yellow-200" : null
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
            className={`dark:text-purple-600 text-[18px] group-hover:font-bold transition-all ease-out duration-400 ${
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
