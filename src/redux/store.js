import { configureStore } from '@reduxjs/toolkit'
import CartSlice from './slices/CasrtSlice'


export const store = configureStore({
  reducer: {
    cart :CartSlice
  }
}) ;