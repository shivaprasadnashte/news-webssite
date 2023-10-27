import React from 'react'
import BGARD from "../Components/Bigcard";
import IDIMG from '../asets/idimg.jpg';
import IMAG from '../asets/imgbw4.jpeg';
import IMA from '../asets/logo1.jpg';
function Newspage() {
  return (
    <>
    <div>
    <div className=' flex flex-col items-center py-6 gap-7 lg:flex lg:flex-row  lg:justify-evenly p-3'>
    <BGARD img={IDIMG}/>
    <BGARD img={IMA}/>
    </div>
    <div className=' flex flex-col items-center py-6 gap-7 lg:flex lg:flex-row  lg:justify-evenly p-3'>
    <BGARD img={IDIMG}/>
    <BGARD img={IMA}/>
    </div>
    <div className=' flex flex-col items-center py-6 gap-7 lg:flex lg:flex-row  lg:justify-evenly p-3'>
    <BGARD img={IDIMG}/>
    <BGARD img={IMA}/>
    </div>
    </div>
   
    </>
  )
}

export default Newspage