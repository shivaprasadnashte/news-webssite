import React, { useEffect } from 'react'

import { Link } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Hero({ image, title, desc, urlToReadMore, index, setIndex }) {
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(index + 1)
        }, 5000);
        return () => clearInterval(interval);
        // eslint-disable-next-line
    },[index])  // eslint-disable-line react-hooks/exhaustive-deps
    return (
        <>
            <div className='bg-neutral lg:py-20 mt-10 lg:h-[400px] p-2 flex flex-col lg:flex-row items-center justify-center'>
                <button className='mr-2 hidden lg:block btn btn-primary'
                    onClick={() => {
                        if (index === 0) {
                            setIndex(9)
                            return
                        }
                        setIndex(index - 1)
                    }}><FaChevronLeft className='text-2xl' /></button>
                <img src={image} className='w-[400px] h-[250px]' alt="headerImage" />
                <div className=' lg:px-5 text-white py-5 flex flex-col items-center gap-5'>
                    <h1 className='text-lg  lg:text-3xl font-bold'>{title}</h1>
                    <p className='text-sm  lg:text-lg'>{desc}</p>
                    <Link to={urlToReadMore}>
                        <button className='btn hidden lg:block btn-primary'>Read More</button>
                    </Link>
                </div>
                <div className='flex items-center justify-center gap-10'>
                    <button className='btn  lg:hidden btn-primary'
                        onClick={() => {
                            if (index === 0) {
                                setIndex(9)
                                return
                            }
                            setIndex(index - 1)
                        }}><FaChevronLeft className='text-2xl' /></button>
                    <Link to={urlToReadMore}>
                        <button className='btn lg:hidden btn-primary'>Read More</button>
                    </Link>
                    <button className='btn lg:pl-2 btn-primary'
                        onClick={
                            () => {
                                setIndex(index + 1)
                            }

                        }><FaChevronRight className='text-2xl' /></button>
                </div>
            </div>
        </>
    )
}

export default Hero