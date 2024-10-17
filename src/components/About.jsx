import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
function About() {
  return (
    <div className='w-full p-20  bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className="font-['Neue_Montreal'] text-[3.9vw] leading-[4vw] tracking-normal">Ochi is    a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>

      <div className='flex gap-5 w-full pt-10 border-t-[1px] mt-20 border-[#a1b562]'>
        <div className='w-1/2 '>
          <h1 className='text-6xl'>Our approach:</h1>
          <button className='flex gap-5 items-center px-10 py-6 bg-zinc-900 rounded-full text-white mt-10'>Read More
            {/* <div className='w-3 h-3 bg-zinc-100 rounded-full'></div> */}

            <div className=' w-2 h-2  rounded-full border-[2px] bg-zinc-100'>
              {/* <span className='rotate-[45deg]'>
                <FaArrowUpLong />
              </span> */}

            </div>
          </button>
        </div>
        <div className='w-1/2 h-[70vh]  rounded-3xl'>
        <img className=' rounded-3xl' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default About
