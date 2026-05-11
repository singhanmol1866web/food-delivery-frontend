import React, { createContext, useState } from 'react'
import { food_items } from '../food'
export const dataContext = createContext()

const Usercontext = ({children}) => {
let [input, setinput]=useState("")
let [cate, setcate] = useState(food_items)
let [showcart , setshowcart]=useState(false)
    let data = {
    input,
    setinput,
    cate,
    setcate,
    showcart,
    setshowcart
    }
  return (
    <div>
    <dataContext.Provider value ={data}>
        {children}
    </dataContext.Provider>
    </div>
  )
}

export default Usercontext