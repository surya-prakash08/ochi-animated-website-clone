import React from 'react'

function Cards() {
    return (
        <div className='w-full h-screen bg-zinc-900 flex items-center px-32 gap-5'>
            <div className='cardcontainer h-[50vh] w-1/2'>
                <div className=" card relative flex items-center justify-center card rounded-xl w-full h-full bg-[#004D43]">

                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />

                    <button className='absolute left-10 bottom-10 px-5 py-2 border-2 rounded-full'>&copy;2024-2025</button>
                </div>
            </div>
            <div className='cardcontainer flex gap-5 w-1/2 h-[50vh]'>

                <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#1a2e2b]">
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />

                    <button className='absolute left-10 bottom-10 px-5 py-2 border-2 rounded-full'>&copy;2024-2025</button>
                </div>
                <div className="relative flex items-center justify-center card rounded-xl w-1/2 h-full bg-[#1a2e2b]">
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />

                    <button className='absolute left-10 bottom-10 px-5 py-2 border-2 rounded-full'>&copy;2024-2025</button>
                </div>
            </div>
        </div>
    )
}

export default Cards
