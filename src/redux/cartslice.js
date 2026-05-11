import { createSlice, ReducerType } from "@reduxjs/toolkit";
import { act } from "react";

const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        Additem:(state,action)=>{
            let exitItem = state.find((item)=>item.id===action.payload.id);
            if(exitItem){
               return state.map((item)=>item.id===action.payload.id?{...item,qty:item.qty+1}:item)
            }
            else{
            state.push(action.payload)
            }
        },
        Removeitem:(state,action)=>{
            return state.filter((item)=>item.id!==action.payload)
        },
        incrementqty:(state,action)=>{
             return state.map((item)=>item.id===action.payload.id?{...item,qty:item.qty+1}:item)
        },

         decrementqty:(state,action)=>{
             return state.map((item)=>item.id===action.payload.id?{...item,qty:item.qty-1}:item)
        }

    }
})

export const {Additem,Removeitem,incrementqty,decrementqty}=cartSlice.actions;
export default cartSlice.reducer;