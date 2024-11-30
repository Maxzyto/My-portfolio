/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */
import { BaseInfo } from '@/Data/date'
import React from 'react'
import Image from "next/image";
import { FaDownload } from 'react-icons/fa';

function Hero() {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative">
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* subheading */}
          <div className="text-2xl md:text-3xl lg:text-4xl mb-5 text-gray-300 font-semibold">
            <h1>I am {BaseInfo.name} </h1>
            {/* Text Content */}
            <h1 className="text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] xl:leading-[3.5rem] xl:leading[4rem] text-white ">
              {BaseInfo.position}
            </h1>
            {/* Description  */}
            <p className="mt-6 text-sm md:text-base text-white text-opacity-60">
              {BaseInfo.description}
            </p>
            {/* download button  */}
            <button className='md:px-8 md:py-2.5  px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg mt-8 bg-blue-700 hover:bg-blue-900 flex items-center space-x-2  '>
              <span>Download My Resume </span>
              <FaDownload />
            </button>
          </div>
          {/* Image content */}
          <div className='mx-auto hidden lg:block rounded-[3rem]  border-[3.5px] border-blue-950 overflow-x-hidden '>
          <Image src={BaseInfo.profilePic} alt={BaseInfo.name} width={300} height={300} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero