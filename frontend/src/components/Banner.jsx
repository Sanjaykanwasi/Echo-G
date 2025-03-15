import React, { useEffect } from "react";

const Banner = ({ gameBanner }) => {
  //   useEffect(() => {
  //     // console.log("gameBanner", gameBanner);
  //   }, []);

  return (
    <div className="relative">
      <div className="absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 to-transparent w-full">
        <h2 className="text-white text-[44px] font-bold"> {gameBanner.name}</h2>
        <button className="bg-purple-400 text-white px-2 p-1 rounded-lg">
          Get Now
        </button>
      </div>
      <img
        src={gameBanner.background_image}
        className=" md:h-[650px] w-full object-cover rounded-2xl"
      />
    </div>
  );
};

export default Banner;
