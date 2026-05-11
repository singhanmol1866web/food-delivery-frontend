import React, { useState } from 'react'
import Nav from '../Components/Nav'
import { cateories } from '../Category'
import Card from '../Components/Card'
import { food_items } from '../food'
import { useContext } from 'react'
import { dataContext } from '../context/Usercontext'
import { RxCross1 } from "react-icons/rx";
import Card2 from '../Components/Card2'
import { useSelector } from 'react-redux'
import { ReducerType } from '@reduxjs/toolkit'
import { LuChartNoAxesColumnIncreasing } from 'react-icons/lu'
import { toast } from 'react-toastify'



const Home = () => {
  let {cate ,setcate, input,showcart, setshowcart} = useContext(dataContext)

  function filter(NAME){
    
    

    if(NAME ==="All"){
      setcate(food_items)
    }
    else{
      let newlist = food_items.filter((item)=> {
        return item.food_category === NAME});
      
        
      setcate(newlist);
    }

  }

  let item = useSelector((state)=>state.cart)

  let subtotal = item.reduce((total,item)=>total+item.qty*item.price,0)
  let deliveryfees = 20;
  let taxes = subtotal*0.5/100;
  let total = Math.floor(subtotal+deliveryfees+taxes);
  

  return (
    <>
    <div className='bg-slate-200 w-full min-h-screen'>
        <Nav/>
           {/* ///////////////  categories  all ///////////// */}
       {input==="" && <div className=' flex flex-wrap justify-center items-center gap-6 w-full '>
       {cateories.map((item)=> {
          return <div key={item.id} onClick={()=> filter(item.name)}className='w-32 h-32 bg-white flex flex-col items-start gap-5 p-5 justify-start font-semibold rounded-lg hover:bg-green-300 cursor-pointer transition-all duration-200'>
            {item.image}
            {item.name}    
            </div>
                 })}  
         </div> }

{/* //////////////////// */}
 
           <div className='w-full flex flex-wrap gap-20 px-5 justify-center items-center pt-8 pb-8'> 
            {cate.length>1?
            cate.map((item)=> {
              return <Card key={item.id}  name={item.food_name} image={item.food_image} price={item.price}id={item.id}
               type = {item.food_type}/>
            }):<div className='text-2xl'>No this found</div>}
           </div> 

           <div className={` w-full md:w-100 h-full fixed top-0 right-0 bg-white shadow-xl px-8 pt-3 transition-all duration-500 flex  flex-col items-center overflow-auto ${showcart?"translate-x-0":"translate-x-full"}`}>
            <header className=' w-full flex justify-between items-center '>
              <span className=' text-green-400 text-lg font-semibold'>Order item</span>
              <RxCross1 className='w-6 h-6 text-green-400 font-semibold text-lg cursor-pointer hover:text-gray-500' onClick={()=>setshowcart(false)} />
            </header>
          {item.length>0?  <>
           <div className='w-full mt-9 flex flex-col gap-8'>
            {item.map((item)=>{
              return  <Card2 key={item.id} name={item.name} price={item.price}image={item.image} id={item.id} qty={item.qty}/>
            })}
           </div>
           <div className='w-full border-t-2 border-b-2 border-gray-500 mt-7 flex flex-col gap-3 p-8'>
<div className='flex w-full justify-between items-center'>
  <span className='text-lg text-gray-600 font-semibold'>Subtotal</span>
  <span className='text-green-400 font-semibold text-lg'>Rs {subtotal} /-</span>
</div>
<div className='flex w-full justify-between items-center'>
  <span className='text-lg text-gray-600 font-semibold'>Delivery Fee</span>
  <span className='text-green-400 font-semibold text-lg'>Rs {deliveryfees} /-</span>
</div>
<div className='flex w-full justify-between items-center'>
  <span className='text-lg text-gray-600 font-semibold'>Taxes</span>
  <span className='text-green-400 font-semibold text-lg'>Rs {taxes} /-</span>
</div>

           </div>
           
            <div className='flex w-full justify-between items-center p-9'>
  <span className='text-2xl text-gray-600 font-semibold'>Total</span>
  <span className='text-green-400 font-semibold text-lg'>Rs {total} /-</span>
</div>
<button className='w-full h-10 p-2 bg-green-500 rounded-lg text-gray-500 hover:bg-green-300 transition-all cursor-pointer mb-5 ' onClick={()=>{toast.success("Order placed")}}>Place Order</button>
        
            </>:<div className='text-center text-2xl text-green-500 font-semibold pt-15 '>Empty Cart</div> }
          
           </div>
          
    </div>
    </>
  )
}

export default Home