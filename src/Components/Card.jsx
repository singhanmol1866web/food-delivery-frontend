import React from 'react'
import image1 from '../assets/image1.avif'
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from "react-redux"
import { Additem } from '../redux/cartslice';
import { toast } from 'react-toastify';





const Card = ({name,image,price,id,type}) => {
      let dispatch = useDispatch()
  return (
    <>
   <div className='w-60 h-82 bg-white p-2  flex flex-col gap-3 rounded-lg shadow-lg hover:border-2 border-green-300'>
       <div className='w-full h-40 overflow-hidden rounded-lg '>
<img src={image} alt="" className ='object-cover' />
      </div>
      <div className='text-2xl font-bold'>
         {name}
      </div>
      <div className='w-full flex justify-between items-center'>
<div className=' text-lg font-semibold text-green-400'>Rs {price}/-</div>
<div className=' flex justify-center items-center text-green-400'>{type==="veg"?<LuLeafyGreen />: <GiChickenOven /> }<span>{type}</span></div>
      </div>
      <button className='w-full p-2 bg-green-500 rounded-lg text-gray-500 hover:bg-green-300 transition-all cursor-pointer mt-auto ' onClick={()=>{dispatch(Additem({id ,name, price,image ,qty:1})); toast.success("Item added")}} >Add to dish</button>
   </div>
    </>
  )
}

export default Card