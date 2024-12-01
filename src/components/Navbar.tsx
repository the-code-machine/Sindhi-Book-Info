'use client'
import { menu } from '@/content/navbar';
import { navItem } from '@/types/navbar';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function Navbar() {
  const [date, setDate] = useState<null | Date>(null); // Initially null for server rendering

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between w-full p-3 bg-white h-16">
        <img src="/logo/navLogo.svg" alt="Logo" />
        <div className="flex flex-col justify-end items-end">
          <p>
            {date
              ? date.toLocaleDateString() // Client-rendered value
              : 'Loading...'} {/* Static fallback */}
          </p>
          <p className="font-semibold text-[16px]">
            {date
              ? `${date.toLocaleTimeString()} IST` // Client-rendered value
              : 'Loading...'} {/* Static fallback */}
          </p>
        </div>
      </div>
      <div className="bg-primary  h-10 w-full flex md:px-8 px-4 md:justify-between items-center">
        <div className=' flex space-x-5 h-full justify-center items-center'>
          {menu.map((item: navItem, index: number) => (
            <div key={index} className=' text-white uppercase text-[14px] font-medium'> <Link href={item.link}>{item.title}</Link></div>
          ))}
        </div>
        <div className=' md:flex hidden'>

        </div>
      </div>
    </div >
  );
}
