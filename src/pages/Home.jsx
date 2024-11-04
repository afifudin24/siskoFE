import TopBar from '../components/TopBar/TopBar'
import Carousel from '../components/Carousel/Carousel'
import NewArrivals from '../components/NewArrivals/NewArrivals'
import image1 from '../assets/images/image1.png'
import CarouselHotBrand from '../components/Carousel/CarouselHotBrand'
import Footer from '../components/Home/Footer/Footer'
import { useState } from 'react'
const Home = () => {
  return (
    <>
      <TopBar />
      <Carousel />
      <NewArrivals />
      <div className='bg-background w-full my-10'>
        <div className='w-11/12 items-center py-5 md:w-10/12 mx-auto flex justify-between'>
          <div className='w-7/12'>
            <p className='font-sans font-bold text-[48px]'>Electronic Gadget</p>
            <p className='font-sans font-bold text-[48px] text-primary'>
              Essentials
            </p>
            <p className='text-textColor-secondary text-justify font-bold text-[20px]'>
              From sleek smartphones to captivating laptops, these are the tools
              you need to navigate the digital world with style and
              sophistication. Don’t miss a beat—choose wisely!
            </p>
          </div>
          <div className='w-5/12 flex justify-end'>
            <img className='w-1/2 self-end ' src={image1} alt='tes' />
          </div>
        </div>
      </div>
      <CarouselHotBrand />
      <Footer />
    </>
  )
}

export default Home
