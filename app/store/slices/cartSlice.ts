import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { Product } from "./productsSlice"

// Cart item interface extending Product with quantity
export interface CartItem extends Product {
  quantity: number
}

interface CartState {
  items: CartItem[]
  totalItems: number
  totalPrice: number
}

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add item to cart or increase quantity if already exists
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id)

      if (existingItem) {
        // If item already exists, increase quantity
        existingItem.quantity += 1
      } else {
        // If new item, add to cart with quantity 1
        state.items.push({ ...action.payload, quantity: 1 })
      }

      // Recalculate totals
      state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0)
      state.totalPrice = state.items.reduce((total, item) => total + item.price * item.quantity, 0)
    },
    // Update item quantity
    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const item = state.items.find((item) => item.id === action.payload.id)
      if (item) {
        item.quantity = action.payload.quantity
      }

      // Recalculate totals
      state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0)
      state.totalPrice = state.items.reduce((total, item) => total + item.price * item.quantity, 0)
    },
    // Remove item from cart completely
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)

      // Recalculate totals
      state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0)
      state.totalPrice = state.items.reduce((total, item) => total + item.price * item.quantity, 0)
    },
    // Clear entire cart
    clearCart: (state) => {
      state.items = []
      state.totalItems = 0
      state.totalPrice = 0
    },
  },
})

export const { addToCart, updateQuantity, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer
