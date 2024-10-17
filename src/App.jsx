import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marqee from './components/Marqee'
import About from './components/About'
import Eyes from './components/Eyes'
import FeaturedProjects from './components/FeaturedProjects'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';


function App() {


const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className=' w-full min-h-screen  text-white bg-zinc-900'>
      <Navbar/>
      <LandingPage/>
      <Marqee/>
      <About/>
      <Eyes/>
      <FeaturedProjects/>
      <Cards/>
      <Footer/>

      <div className="author flex justify-center items-center"><h1 className='font-semibold text-2xl h-20 '>
        Made with &#x2764; by Surya Prakash
        </h1></div>
    </div>
  )
}

export default App
