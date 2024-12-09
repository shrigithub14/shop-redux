import { createSlice } from "@reduxjs/toolkit"

export const CartSlice = createSlice({
   name:"cart",
   initialState:[],
   reducers:{
    add:(state,action)=>{
       state.push(action.payload);
       // payload jo bhi input parameter send kiya hai\
    },
    remove:( state,action)=>{
       return state.filter((item) => item.id !==action.payload);
       // vahi retain krna jo pass nhi kiya  
    },
   }
})

export const {add,remove} = CartSlice.actions;
export default CartSlice.reducer;