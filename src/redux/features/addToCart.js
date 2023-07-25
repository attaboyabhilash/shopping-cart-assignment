import { createSlice } from "@reduxjs/toolkit"

export const addToCart = createSlice({
  name: "addToCart",
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    incrementCart: (state, action) => {
      state.items.push(action.payload)
    },
    decrementCart: (state, action) => {
      const fliteredItems = state.items.filter(
        (item) => item.id !== action.payload
      )
      state.items = fliteredItems
    },
    incrementCartItems: (state, action) => {
      const item = state.items.find((it) => it.id === action.payload)
      item.quantity += 1
    },
    incrementCartItemsByZero: (state, action) => {
      const item = state.items.find((it) => it.id === action.payload)
      item.quantity += 0
    },
    decrementCartItems: (state, action) => {
      const item = state.items.find((it) => it.id === action.payload)
      item.quantity -= 1
    },
    findTotalPrice: (state) => {
      const totalArray = state.items.map((item) => {
        return item.price * item.quantity
      })
      const total =
        totalArray.length > 1
          ? totalArray.reduce((a, b) => {
              return a + b
            })
          : totalArray[0]
      state.totalPrice = total
    },
    clearCart: (state) => {
      state.items = []
    },
  },
})

export const {
  incrementCart,
  decrementCart,
  incrementCartItems,
  incrementCartItemsByZero,
  decrementCartItems,
  clearCart,
  findTotalPrice,
} = addToCart.actions

export default addToCart.reducer
