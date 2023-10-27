import React from "react";
import rarro from "../asets/rarrow.png"

function SmallCard({ img }) {
  return (
    <>
    <div className=" w-[300px] h-[520px] shadow-xl lg:w-[340px] lg:h-[520px]">

    <div className=" w-[300px] h-[520px] lg:w-[340px] lg:h-[520px] bg-[#E9FFC2] rounded-t-md ">
        <img
          src={img}
          alt="idimg"
          className=" w-full h-[300px]   "
        />
        <div className="   p-2 rounded-b-md">   
          <div className="flex  ml-2 text-left   ">
            <h1 className="text-2xl font-bold ">
             ritik jha got 1cr packeg
            </h1>
          </div>
          <div className="flex flex-col ml-2 text-left justify-center items-center my-3">
            <p className=" overflow-hidden h-[100px]">
              ritik jha the student of NIT patna got 1cr packeg in his dream
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eos quisquam sit? Perferendis unde distinctio impedit, voluptates ad cumque, deserunt at iste autem consectetur, ipsa laborum? Sint impedit tenetur porro?
              compny
            </p>
          </div>

          <div className=" bg-[#AAC8A7] flex items-center w-1/2 p-1 rounded-md mb-3">
            <button className=" mx-3 p-1 rounded-sm px-2 font-bold">
               <span className="hidden lg:block"> Read More</span>
               <span className="block lg:hidden"> More</span>

            </button>
            <div>
                <img src={rarro} alt="aga" className=" w-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </>
  );
}

export default SmallCard;
