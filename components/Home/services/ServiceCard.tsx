/* eslint-disable react/jsx-no-undef */
"use client"

import React from 'react'
import Image from 'next/image';

// Props type 
type Props = {
  service: {
    id: number;
    title: string;
    description: string;
    icon: string;
  };
};

const ServiceCard = ({service}: Props) => {
  return (
    <div className="shadow-2xl p-6 rounded-lg bg-[#814ced]">
      <Image src={service.icon} alt={service.title} width={50} height={50} />
      <h1 className='mt-4 text-lg font-bold text-gray-100 ' >{service.title} </h1>
      <p className='mt-3 text-sm text-white text-opacity-80 '>{service.description} </p>
    </div>
  );
}

export default ServiceCard;