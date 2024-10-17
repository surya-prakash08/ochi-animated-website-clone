import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {

    
    return (
        <div data-scroll data-scroll-section  data-scroll-speed="-.5" className='w-full h-[70vh] bg-zinc-900 pt-1 overflow-hidden'>
            <div className="textstructure mt-40 px-20 ">

                {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
                    return <div className=" masker ">
                        <div className='w-fit flex '>
                        {index === 1 && (<motion.div initial={{widows:0}} animate={{width:"9vw"}} transition={{ease:[0.45, 0, 0.55, 1], duration:1}} className=' w-[6vw] h-[4.1vw] bg-green-500 relative top-[1.4vw] rounded-md mr-[1vw]' ></motion.div>)}

                            <h1 className="flex items-center font-['Founders_Grotesk_X-Condensed'] uppercase text-[6vw] leading-[7vw] h-full  text-9xl font-bold">{item}</h1>
                        </div>
                    </div>
                })}


            </div>
            <div className='my-0 flex justify-between items-center border-t-[1px] border-zinc-800 mt-20 py-5 px-25 '>
                {["For Public and Private Companies", "From the first pitch to IPO"].map((item, index) => <p className='text-md font-light tracking-tight leading-none'>{item}

                </p>)}
                <div className="start flex items-center gap-5">
                    <div className='px-5 py-2 border-[1px] border-zinc-400 rounded-full font-light text-md uppercase'>Start the project</div>
                    <div className='w-10 h-10 flex items-center justify-center rounded-full border-[2px] border-zinc-500'>
                        <span className='rotate-[45deg]'>
                            <FaArrowUpLong />
                        </span>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
