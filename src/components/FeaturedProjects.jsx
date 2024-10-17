import { motion,  useAnimation } from 'framer-motion'



function FeaturedProjects() {
    const cards = [useAnimation(), useAnimation()]

    const handleHover = () => {
        cards[index].start({y:"0"})
    }
    return (
        <div className='w-full py-20'>
            <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
                <h1 className='text-8xl font-["Neue_Montreal"] tracking-tight'>Featured Projects</h1>

            </div>

            <div className='px-20'>
                <div className="cards w-full flex gap-10 mt-10">


                    <motion.div onHoverStart={()=>handleHover(1)}
                        className="cardcontainer relative  w-1/2 h-[75vh]  ">

                        <h1 className=' card absolute z-[9] text-8xl leading-none tracking-tighter right-[-35vh] -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] flex overflow-hidden '>

                            {"FYDE".split('').map((item, index) => {
                                return <motion.span
                                initial={{y:"100%"}}
                                animate={cards[0]}
                                    className='inline-block '>{item}</motion.span>
                            })}
                        </h1>
                        <div className='card w-full h-full rounded-xl  overflow-hidden'>

                            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" alt="" />
                        </div>

                    </motion.div>
                    <div className="cardcontainer relative  w-1/2 h-[75vh] ">
                        <h1 className='absolute z-[9] text-8xl leading-none tracking-tighter right-full translate-x-1/2 top-1/2 -translate-y-1/2 flex overflow-hidden text-[#CDEA68]'>

                            {"VISE".split('').map((item, index) => {
                                return <span >{item}</span>
                            })}
                        </h1>
                        <div className='card w-full h-full rounded-xl  overflow-hidden'>
                            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default FeaturedProjects;
