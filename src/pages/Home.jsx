import React from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import AboutMe from '../components/AboutMe';
import { imagen2 } from '../assets';

const Home = () => {
  return (
    <>    
      <div className='w-full flex flex-col md:flex-row justify-between'>
        <div className='w-1/2 md:w-1/2 mx-6 items-center text-center my-auto'>
          <img src={imagen2} className='w-3/4 h-auto mx-10 my-10 shadow-lg rounded-3xl justify-center items-center' />
        </div>
        <div className='w-full md:w-1/2 mt-6 md:mt-0'>
          <AboutMe />
        </div>
      </div>   
    </>
  )
}
export default Home;