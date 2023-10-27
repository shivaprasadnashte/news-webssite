import React from 'react'
import SCARD from '../Components/SmallCard';


import IDIMG from '../asets/idimg.jpg';
import IMAG from '../asets/imgbw4.jpeg';
import IMA from '../asets/logo1.jpg';
// import NewsCard from './Components/NewsCard';

function Body() {
  return (
    <>
       <main>
          
          <div className=" p-4 bg-[#FDFFAE]  ">
            <div className=" hidden  lg:flex lg:flex-row justify-evenly  py-5 gap-5  w-screen  ">
              <SCARD img={IDIMG} />
              <SCARD img={IMAG} />
              <SCARD img={IMA}  />
            </div>

            <div className=" lg:hidden flex-col flex md:flex md:flex-row justify-evenly  py-5 gap-5  w-screen  ">
              <SCARD img={IDIMG} />
              <SCARD img={IMAG} />
              
            </div>
            <div className=" hidden  lg:flex lg:flex-row justify-evenly  py-5 gap-5  w-screen  ">
              <SCARD img={IDIMG} />
              <SCARD img={IMAG} />
              <SCARD img={IMA}  />
            </div>

            <div className=" lg:hidden flex-col flex md:flex md:flex-row justify-evenly  py-5 gap-5  w-screen  ">
              <SCARD img={IDIMG} />
              <SCARD img={IMAG} />
              
            </div>
            <div className=" hidden  lg:flex lg:flex-row justify-evenly  py-5 gap-5  w-screen  ">
              <SCARD img={IDIMG} />
              <SCARD img={IMAG} />
              <SCARD img={IMA}  />
            </div>

            <div className=" lg:hidden flex-col flex md:flex md:flex-row justify-evenly  py-5 gap-5  w-screen  ">
              <SCARD img={IDIMG} />
              <SCARD img={IMAG} />
              
            </div>
            <div className=" lg:hidden flex-col flex md:flex md:flex-row justify-evenly  py-5 gap-5  w-screen  ">
              <SCARD img={IDIMG} />
              <SCARD img={IMAG} />
              
            </div>
          </div>
         
        </main></>
  )
}

export default Body