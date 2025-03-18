import React, { useEffect } from 'react'
import client1 from '../assets/client1.png'
import client2 from '../assets/client2.png'
import client3 from '../assets/client3.png'
import client4 from '../assets/client4.png'
import client5 from '../assets/client5.png'
import client6 from '../assets/client6.png'
import google from '../assets/google.jpg'
import apple from '../assets/apple.jpg'
import pay1 from '../assets/pay-1.jpg'
import pay2 from '../assets/pay-2.jpg'
import pay3 from '../assets/pay-3.jpg'
import pay4 from '../assets/pay-4.jpg'
import {Link} from 'react-scroll'
import { FaArrowUp } from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
   useEffect(()=>{
                AOS.init({
                  offset:100,
                  duration:500,
                  easing:'ease-in-out',
                })
                AOS.refresh()
              },[])
  return (
    <div id='contact' className='w-full flex flex-col justify-center items-center'>
      <div data-aos="zoom-in" data-aos-delay='100' className='w-full bg-purple-700 
       lg:px-20 px-10 py-8 grid lg:grid-cols-6 grid-cols-2 justify-center 
        items-center gap-10'>
       <img src={client1} alt=""  className='w-[130px] opacity-70 
        cursor-pointer hover:opacity-100'/>
       <img src={client2} alt=""  className='w-[130px] opacity-70 
        cursor-pointer hover:opacity-100'/>
       <img src={client3} alt=""  className='w-[130px] opacity-70 
        cursor-pointer hover:opacity-100'/>
       <img src={client4} alt=""  className='w-[130px] opacity-70 
        cursor-pointer hover:opacity-100'/>
       <img src={client5} alt=""  className='w-[130px] opacity-70 
        cursor-pointer hover:opacity-100'/>
       <img src={client6} alt=""  className='w-[130px] opacity-70 
        cursor-pointer hover:opacity-100'/>
      </div>

      <div className='w-full lg:px-20 px-5 py-[60px] bg-gray-400 
       grid lg:grid-cols-[auto,auto,auto,auto] grind-cols-1 justify-between items-start lg:gap-3 gap-10'>
        <div data-aos="zoom-in" data-aos-delay='200' className='flex flex-col justify-center items-start gap-10
         grow'>
          <div className='flex flex-col justify-center items-start gap-4'>
            <h1 className='text-4xl font-bold text-purple-600'>Electra Shop</h1>
          </div>
         </div>
       </div>

      <div></div>
    </div>
  )
}

export default Footer