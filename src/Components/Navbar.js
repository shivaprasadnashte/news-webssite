import React, { useState, useContext } from "react";
import LOGO from "../asets/logo.png";
import MENU from "../asets/menu.svg";
import SEARCH from "../asets/search.svg";

function Navbar() {
  //================================================================//
  const [state, setState] = useState(false);
  const [state2, setState2] = useState(false);
  const change = () => {
    setState(!state);
  };
  const change2 = () => {
    setState2(!state2);
  };
  //=================================================================//

  return (
    <>
      <div className=" flex   shadow-2xl items-center justify-between p-2">
        <div className=" flex items-center">
          <img src={LOGO} alt="logo" className=" h-12 md:mx-4 " />
        </div>

        <div className="  flex md:mx-4 gap-3 items-center">
          <a href="/src/App.js" className=" hidden md:block">
            {" "}
            HOME
          </a>
          <a href="/src/App.js" className="hidden md:block">
            ABOUT
          </a>
          <select name="Select" className=" text-center">
            <option value="crime">CATEGORY</option>
            <option value="crime">CATEGORY</option>
            <option value="crime">CATEGORY</option>
            <option value="crime">CATEGORY</option>
            <option value="crime">CATEGORY</option>
            <option value="crime">CATEGORY</option>
          </select>

          <img
            src={SEARCH}
            alt="search"
            className=" h-5 mr-2 md:hidden block"
            onClick={change}
          />
          <img
            src={MENU}
            alt="menu"
            className=" h-5 mr-2 md:hidden block"
            onClick={change2}
          />

          <div className=" md:flex hidden">
            <div className=" border-2 border-gray-200">
              <input
                type="text"
                className=" rounded-sm focus:outline-none px-1 "
                placeholder="search a news"
              />
            </div>
            <div>
              <button className=" mx-3 p-1 rounded-sm ">SEARCH</button>
            </div>
          </div>
        </div>
      </div>
      <div className={state ? "block" : " hidden "}>
        <div className="md:hidden flex w-full justify-evenly mt-4 ">
          <div className=" flex">
            <div className=" border-2 b border-gray-500">
              <input
                type="text"
                className=" rounded-sm w-full placeholder:px-2  "
                placeholder="search a news"
              />
            </div>
            <div>
              <button className=" mx-2 border-2 border-black py-2 px-2 rounded-sm ">
                SEARCH
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={state2 ? "block" : " hidden"}>
        <div className="md:hidden items-center text-right mr-2 ">
          <div>
            <a href="/src/App.js" className=" ">
              {" "}
              HOME
            </a>
          </div>
          <div>
            <a href="/src/App.js" className="">
              ABOUT
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
