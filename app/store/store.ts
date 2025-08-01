import { configureStore } from "@reduxjs/toolkit"
import productsReducer from "./slices/productsSlice"
import cartReducer from "./slices/cartSlice"
import reviewsReducer from "./slices/reviewsSlice"

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    reviews: reviewsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
