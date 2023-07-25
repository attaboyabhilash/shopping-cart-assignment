import { configureStore } from "@reduxjs/toolkit"
import addToCart from "./features/addToCart"

export default configureStore({
  reducer: {
    cart: addToCart,
  },
})
