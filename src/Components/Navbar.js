import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LOGO from "../asets/logo.png";
import SEARCH from "../asets/search.svg";
import { FaAngleDown } from "react-icons/fa6";


function Navbar() {
  
  const [state, setState] = useState(false);
  const [state2, setState2] = useState(false);
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const navigate = useNavigate();

  const change = () => {
    setState(!state);
  };
  const change2 = () => {
    setState2(!state2);
  };

  const submit = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
  };

  const setCategory = (searchTerm) => {
    navigate(`/search/${searchTerm}`);
  };
  return (
    <>
      <div className=" flex   shadow-2xl items-center justify-between p-2">
        <div className=" flex items-center"
        onClick={()=>{
          navigate('/')
        }}>
          <img src={LOGO} alt="logo" className=" h-12 md:mx-4 " />
        </div>

        <div className="  flex md:mx-4 gap-3 items-center">
         
          <p onClick={()=>{
            navigate('/')
          }} className=" hidden sm:block hover:cursor-pointer">
          HOME
          </p>
        

      <div className="  flex items-center gap-2 hover:cursor-pointer sm:text-lg text-sm"
          onClick={()=>{
            setShow(!show)
          }}
          >
            <p>CATEGORIES</p>
            <FaAngleDown />
          </div>
          <img
            src={SEARCH}
            alt="search"
            className=" h-5 mr-2 md:hidden block"
            onClick={change}
          />
        

          <div className=" md:flex hidden">
            <div className=" border-2 flex items-center border-gray-200">
              <input
                name="search"
                value={search}
                onChange={handleChange}
                type="text"
                className=" rounded-sm focus:outline-none px-1 "
                placeholder="search a news"
              />
            </div>
            {(search.length>0)?
            <div>
              <button className=" mx-3 p-1 rounded-sm border-2 border-gray-200 shadow-lg  bg-gray-200" onClick={submit}>
                SEARCH
              </button>
            </div>:
            <div>
            <button className=" mx-3 p-1 rounded-sm border-2 border-gray-200 shadow-lg hover:cursor-not-allowed ">
              SEARCH
            </button>
          </div>
}

          </div>
        </div>
      </div>
      <div className={state ? "block" : " hidden "}>
        <div className="md:hidden flex w-full justify-evenly mt-4 ">
          <div className=" flex">
            <div className=" flex  items-center border-2 b border-gray-500">
              <input
                name="search"
                value={search}
                onChange={handleChange}
                type="text"
                className=" rounded-sm w-full px-2 focus:outline-none  "
                placeholder="search a news"
              />
            </div>
            {(search.length>0)?
            <div>
              <button className=" mx-3 p-1 rounded-sm border-2 border-gray-200 shadow-lg  bg-gray-400" onClick={submit}>
                SEARCH
              </button>
            </div>:
            <div>
            <button className=" mx-3 p-1 rounded-sm border-2 border-gray-200 shadow-lg hover:cursor-not-allowed ">
              SEARCH
            </button>
          </div>
}
          </div>
        </div>
      </div>

      
      {show&&<div className="flex items-end md:absolute md:z-20 md:w-64  md:top-16 md:right-80   justify-end">
      <div className="hover:cursor-pointer flex flex-col w-full justify-center  items-center bg-gray-200">
        <p className="hover:cursor-pointer border-2 border-gray-300 w-full text-center hover:text-blue-500"
        onClick={()=>{
          setCategory('entertainment')
        }}>Entertainment</p>
        <p className="hover:cursor-pointer border-2 border-gray-300 w-full text-center hover:text-blue-500"
        onClick={()=>{
          setCategory('general')
        }}>General</p>
        <p className="hover:cursor-pointer border-2 border-gray-300 w-full text-center hover:text-blue-500"
        onClick={()=>{
          setCategory('health')
        }}>Health</p>
        <p className="hover:cursor-pointer border-2 border-gray-300 w-full text-center hover:text-blue-500"
        onClick={()=>{
          setCategory('science')
        }}>Science</p>
        <p className="hover:cursor-pointer border-2 border-gray-300 w-full text-center hover:text-blue-500"
        onClick={()=>{
          setCategory('sports')
        }}>Sports</p>
        <p className="hover:cursor-pointer border-2 border-gray-300 w-full text-center hover:text-blue-500"
        onClick={()=>{
          setCategory('technology')
        }}>Technology</p>
        <p className="hover:cursor-pointer border-2 border-gray-300 w-full text-center hover:text-blue-500"
        onClick={()=>{
          setCategory('business')
        }}>Business</p>
        <p className="hover:cursor-pointer border-2 border-gray-300 w-full text-center hover:text-blue-500"
        onClick={()=>{
          setCategory('bitcoin')
        }}>Bitcoin</p>
        <p className="hover:cursor-pointer border-2 border-gray-300 w-full text-center hover:text-blue-500"
        onClick={()=>{
          setCategory('apple')
        }}>ppleApple</p>
        <p className="hover:cursor-pointer border-2 border-gray-300 w-full text-center hover:text-blue-500"
        onClick={()=>{
          setCategory('tesla')
        }}> Tesla</p>
        <p className="hover:cursor-pointer border-2 border-gray-300 w-full text-center hover:text-blue-500"
        onClick={()=>{
          setCategory('microsoft')
        }}>Microsoft</p>
        <p className="hover:cursor-pointer border-2 border-gray-300 w-full text-center hover:text-blue-500"
        onClick={()=>{
          setCategory('google')
        }} >Google</p>
        <p className="hover:cursor-pointer border-2 border-gray-300 w-full text-center hover:text-blue-500"
        onClick={()=>{
          setCategory('facebook')
        }}>Facebook</p>
      </div>
      </div>
}
    </>
  );
}

export default Navbar;
