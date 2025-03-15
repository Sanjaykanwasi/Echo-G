import React, { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { HiMiniMoon } from "react-icons/hi2";
import { HiMiniSun } from "react-icons/hi2";

import logo from "../assets/logo.png";

const Header = () => {
  const [toggleMode, setToggleMode] = useState(true);

  return (
    <div className="flex items-center justify-between w-full p-4 ">
      <img src={logo} width={70} height={70} alt="Logo" />
      <div className="flex bg-purple-200 p-2 mx-5 w-[80%] items-center rounded-2xl">
        <HiMagnifyingGlass className="text-black ml-2" />
        <input
          placeholder="Search Games"
          className=" px-2 p-2 bg-transparent text-black outline-none"
          type="text"
        />
      </div>
      <div>
        {toggleMode ? (
          <HiMiniMoon
            onClick={() => setToggleMode(!toggleMode)}
            className="text-[55px] bg-purple-200 p-1 cursor-pointer rounded-full text-black"
          />
        ) : (
          <HiMiniSun
            onClick={() => setToggleMode(!toggleMode)}
            className="text-[55px] bg-purple-200 p-1 cursor-pointer rounded-full text-black"
          />
        )}
      </div>
    </div>
  );
};

export default Header;
