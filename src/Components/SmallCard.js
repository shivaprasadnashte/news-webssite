import React, { useEffect, useState } from "react";
import rarro from "../asets/rarrow.png";

function SmallCard({ title, description, img, url }) {
  // {data.articles?.map((item) => {

  // })}
  return (
    <>
      <div className=" relative w-[300px] h-[590px] shadow-xl lg:w-[340px] lg:h-max-[590px]">
        <div className=" w-[300px] h-[520px] lg:w-[340px] lg:h-[520px]  rounded-t-md ">
          <img src={img} alt="idimg" className=" w-full h-[300px]   " />
          <div className="   p-2 rounded-b-md">
            <div className="flex  ml-2 text-left  ">
              <h1 className=" font-bold ">{title}</h1>
            </div>
            <div className=" flex flex-col ml-2 text-left justify-center items-center my-3">
              <p className=" overflow-auto  container h-[110px]">
                {description}
              </p>
            </div>
            <a href={url}>
              <div className="absolute bottom-0  flex items-center w-1/2 p-1 rounded-md mb-3">
                <button className=" mx-3 p-1 rounded-sm px-2 font-bold">
                  <span className="hidden lg:block"> Read More</span>
                  <span className="block lg:hidden"> More</span>
                </button>
                <div>
                  <img src={rarro} alt="aga" className=" w-6" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default SmallCard;
