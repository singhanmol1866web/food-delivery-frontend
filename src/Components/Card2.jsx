

import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { decrementqty, incrementqty, Removeitem } from '../redux/cartslice';

const Card2 = ({name,id,price,image,qty}) => {
    let dispatch = useDispatch()
  return (
    <div className='w-full h-32 p-1 shadow-lg flex justify-between items-center'>
        <div className='flex h-full gap-3 items-center'>
            {/* Image Box - Standard width/height use ki hai */}
            <div className='w-24 h-24 overflow-hidden rounded-lg shrink-0'>
                <img src={image} alt={name} className='w-full h-full object-cover'/>
            </div> 
            
            <div className='flex flex-col gap-2'>
                <div className='text-lg text-gray-600 font-semibold'>{name}</div>
                
                {/* Quantity Box - Fixed width taaki buttons chote na hon */}
                <div className='w-32 h-10 bg-slate-400 flex rounded-lg overflow-hidden shadow-lg font-semibold border-2 border-green-300 text-xl'>
                    <button 
                        className='flex-1 h-full bg-white text-green-400 hover:bg-gray-300 flex justify-center items-center' 
                        onClick={()=>qty>1?dispatch(decrementqty({id})):1}
                    >
                        -
                    </button>
                    <span className='flex-1 h-full bg-slate-200 flex justify-center items-center text-green-400'>
                        {qty}
                    </span>
                    <button 
                        className='flex-1 h-full bg-white text-green-400 hover:bg-gray-300 flex justify-center items-center' 
                        onClick={()=> dispatch(incrementqty({id}))}
                    >
                        +
                    </button>
                </div>
            </div>
        </div>

        {/* Right Side - Price and Delete */}
        <div className='flex flex-col justify-between items-end h-full py-2'>
            <span className='text-lg text-green-400 font-semibold whitespace-nowrap'>Rs {price} /-</span>
            <MdDelete 
                className='text-3xl text-gray-400 cursor-pointer hover:text-red-500 transition-colors' 
                onClick={()=> dispatch(Removeitem(id))}
            />
        </div>
    </div>
  )
}

export default Card2