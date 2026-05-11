import React, { useContext, useEffect } from 'react'
import { MdFastfood } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaShopify } from "react-icons/fa";
import { dataContext } from '../context/Usercontext';
import { food_items } from '../food';
import { useSelector } from 'react-redux'



const Nav = () => {
   let {input, setinput , cate ,setcate, showcart,setshowcart}= useContext(dataContext)

   useEffect(()=>{
    let newlist = food_items.filter((item)=>item.food_name.toLowerCase().includes(input.toLowerCase()))
    setcate(newlist) 
   },[input])
   
 let item =  useSelector((state)=>state.cart)
  return (
    <>

    <div className="w-full h-25 flex justify-between items-center gap-5 px-5 md:px-8" >
<div className='w-12 h-14 bg-white flex justify-center items-center rounded-md'>
<MdFastfood className='w-8 h-8 text-green-400  cursor-pointer' />
</div>

<form action="" className =' flex items-center  justify-between bg-white px-5 gap-5 h-11 rounded-md w-152 md:w-220' onSubmit={(e)=> e.preventDefault()}>
    <CiSearch  className='text-green-400 h-7 w-7 font-semibold ' />
<input type="text" placeholder='Search items ......' className='w-full text-lg outline-none' onChange={(e)=> setinput(e.target.value)}  value={input}/>
</form>

<div className='w-12 h-14 bg-white flex justify-center items-center rounded-md relative  px-1 '>
    <span className='absolute top-0 right-1 text-green-400 font-semibold cursor-pointer' >{item.length}</span>
<FaShopify className='w-8 h-8  text-green-400 cursor-pointer ' onClick={()=>setshowcart(true)} />
</div>



</div>
    
 </>
  )
}

export default Nav