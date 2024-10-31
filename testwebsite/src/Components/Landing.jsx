import { useState } from "react";
import Nav from "./Landing/Nav";
import Products from "./Landing/Products";
import Search from "./Landing/Search";

function Landing() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={darkMode == 0 ? "light" : "dark"}>
      <div className="flex bg-white dark:bg-[#202020]">
        <Nav toggleDarkMode={toggleDarkMode} />
        <div className="flex flex-col w-full">
          <Search />
          <Products />
        </div>
      </div>
    </div>
  );
}

export default Landing;
