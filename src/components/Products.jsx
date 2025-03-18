import React, { useEffect } from 'react'
import { FaStar,FaRegHeart } from 'react-icons/fa'
import { MdOutlineRemoveRedEye,MdAddShoppingCart } from 'react-icons/md'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { products } from '../export';


const Products = () => {
  useEffect(()=>{
          AOS.init({
            offset:100,
            duration:500,
            easing:'ease-in-out',
          })
          AOS.refresh()
        },[])
  return (
    <div id='products' className='w-full lg:px-20 px-5 py-[80px] bg-gray-300
    flex flex-col justify-center items-center gap-4'>
      <h1 data-aos="zoom-in" data-aos-delay='100'
       className='text-purple-800 text-xl font-semibold '>Browse Collections</h1>
       <h1 data-aos="zoom-in" data-aos-delay='150'
       className='text-black font-semibold text-[42px]
       text-center leading-[50px]'>Trending Products</h1>
       <div data-aos="zoom-in" data-aos-delay='200'
       className='w-full grid lg:grid-cols-4 grid-cols-1
       justify-center items-center gap-10 mt-10'>
        {
          products.map((item,index)=>{
            return <div id='product-box' key={index}
            className='flex flex-col justify-between items-center
            gap-2 p-4 bg-white rounded-lg cursor-pointer relative'>
              <img src={item.img} alt="" />
              <div id='icons' className='flex justify-center gap-3 absolute top-[20px]'>
                <div className='bg-purple-700 hover:bg-yellow-400 hover:text-black
                 rounded-full p-3 text-white'>
                 <MdOutlineRemoveRedEye />
                </div>
                <div className='bg-purple-700 hover:bg-yellow-400 hover:text-black
                 rounded-full p-3 text-white'>
                 <FaRegHeart />
                </div>
                <div className='bg-purple-700 hover:bg-yellow-400 hover:text-black
                 rounded-full p-3 text-white'>
                 <MdAddShoppingCart />
                </div>
              </div>
              <h1 className='text-lg text-gray-400 font-semibold'>{item.category}</h1>
              <h1 className='text-xl font-semibold text-black'>{item.name}</h1>
              <h1 className='text-lg text-purple-800 font-semibold'>{item.price}</h1>
              <div className='w-full mt-0.5'>
                <hr  className='text-gray-300'/>
                <div className='flex justify-between items-center gap-6 mt-2'>
                  <div className='flex justify-start items-center gap-1'>
                    <FaStar className='text-purple-800'/>
                    <FaStar className='text-purple-800'/>
                    <FaStar className='text-purple-800'/>
                    <FaStar className='text-purple-800'/>
                    <FaStar className='text-purple-800'/>
                  </div>
                  <button className='bg-green-500 text-white px-4 py-2 rounded-lg
                   text-[13px] font-semibold'>sale 15%</button>
                </div>
              </div>
             </div>
          })
        }
       </div>
       <button data-aos="zoom-in" data-aos-delay='3000' 
       className='bg-purple-800 hover:bg-yellow-400 hover:text-black
        text-white font-semibold px-8 py-3 rounded-lg mt-8 cursor-pointer'>VIEW MORE</button>
    </div>
  )
}

export default Products