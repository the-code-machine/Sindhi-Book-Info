import React from 'react'

export default function HeroSection() {
    
    return (
        <div className='w-full py-32  flex justify-center items-center bg-primary border-t-2 border-white'>
            <div className=' flex flex-col  md:w-6/12 w-full  justify-center items-center'>
                <h1 className='text-overLayHeading text-6xl font-extrabold'>Sindhi Books Info.</h1>
                <p className=' text-white font-medium text-[22px] text-center'>Preserving the Essence of Sindhi Literature</p>

                <div className=' bg-white rounded-md w-full flex p-2 mt-3  justify-center items-center'>
                    <input type="text" className=' w-full h-full mr-2 px-3 outline-none text-black placeholder:text-black' placeholder='Search by Book name, Author, library etc.' />
                    <button className=' btn-primary'> Search</button>
                </div>
                <p className='  text-paragraphLight text-sm font-normal text-center mt-3'>From classical masterpieces to contemporary works, explore a rich collection of books that embody the wisdom, tradition, and creativity of Sindh. Whether you’re a passionate reader, a researcher, or someone eager to reconnect with your roots, We invites you to dive into a treasure trove of knowledge and stories.</p>
            </div>

        </div>
    )
}
