import { createSlice } from "@reduxjs/toolkit";
import cartItems from '../cartItems'


const initialState = {
  cartItems: cartItems,
  amount: cartItems.length,
  total: 0,
  isLoading: true,
};


const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
      clearCart:(state)=>{
        state.cartItems=[]
        state.amount=state.cartItems.length
      },
      increase:(state,{payload})=>{
        
        const filteredCart=state.cartItems.map((item)=>{
          if(item.id==payload){
            item.amount=item.amount+1
            return {...item}
          }
          else{
            return {...item}
          }
        })
        state.cartItems=filteredCart
      },
      decrease:(state,{payload})=>{
        const filteredCart=state.cartItems.map((item)=>{
          if(item.id===payload){
            if(item.amount==1){
              item.amount=1
            }
            else{
              item.amount=item.amount-1
            }
            return {...item}
          }
          else{
            return {...item}
          }
        })
        state.cartItems=filteredCart
      },
      removeItem:(state,{payload})=>{
        const filteredCart=state.cartItems.filter((item)=>item.id!==payload)
        state.cartItems=filteredCart
      },
      calculateTotal:(state)=>{
        const {total,amount}=state.cartItems.reduce((acc,curr)=>{
          acc.amount+=curr.amount
          acc.total+=curr.price * curr.amount
          return acc
        },{total:0,amount:0})
        state.amount=amount
        state.total=total.toFixed(2)
      }
      

    }
})

export const {clearCart,increase,decrease,removeItem,calculateTotal}=cartSlice.actions


export default cartSlice.reducer