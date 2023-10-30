import React from "react";
import rarro from "../asets/rarrow.png";

function Bigcard({ img }) {
  return (
    <>
      <div className=" w-[300px]  md:w-[500px] lg:w-[600px] h-[200px] flex gap-2  shadow-xl">
        <div className="  w-[900px] h-[200px] ">
          <img src={img} alt="s" className=" w-full h-full " />
        </div>
        <div className="  mr-2">
          <div>
            <h1 className="text-2xl font-bold  ">ritik jha got 1cr packeg</h1>
          </div>
          <div>
            <p className=" overflow-hidden h-[100px]">
              ritik jha the student of NIT patna got 1cr packeg in his dream
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eos
              quisquam sit? Perferendis unde distinctio impedit, voluptates ad
              cumque, deserunt at iste autem consectetur, ipsa laborum? Sint
              impedit tenetur porro?
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
    </>
  );
}

export default Bigcard;
