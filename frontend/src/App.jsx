import React, { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import Header from "./components/Header";
import { ThemeContext } from "./Context/ThemeContext";

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={`${theme} ${
          theme === "light" ? "bg-gray-200" : null
        } h-[100vh]`}
      >
        <Header />
        <Home />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
