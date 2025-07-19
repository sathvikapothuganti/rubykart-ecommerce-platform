"use client"

import { Provider } from "react-redux"
import { store } from "./store/store"
import ECommerceApp from "./components/ECommerceApp"

export default function Home() {
  return (
    <Provider store={store}>
      <ECommerceApp />
    </Provider>
  )
}
