import React from 'react'

export default function Navbar() {
  return (
    <div>navbar
    <div class="bg-white h-full w-screen">
        <div class="bg-green-500  h-10 w-full flex justify-between px-8 items-center">
        <ul class="md:flex hidden font-semibold space-x-5">
            <li class="mx-[10px] cursor-pointer" >Home</li>
            <li class="mx-[10px] cursor-pointer">Books</li>
            <li class="mx-[10px] cursor-pointer">About</li>
            <li class="mx-[10px] cursor-pointer">Gallery</li>
        </ul>
       </div> 
       </div>
        <div class="bg-green-500 space-x-3 h-full flex justify-center items-center">
          <h1>SINDHI BOOK INFO.</h1>
        </div>
    
    </div>
  )
}
