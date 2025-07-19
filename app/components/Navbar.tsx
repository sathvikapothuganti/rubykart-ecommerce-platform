"use client"

import type React from "react"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Search, User, ShoppingCart } from "lucide-react"
import type { RootState, AppDispatch } from "../store/store"
import { setSearchQuery } from "../store/slices/productsSlice"
import CartModal from "./CartModal"
import CheckoutFlow from "./CheckoutFlow"

/**
 * Enhanced Navigation Bar Component with Cart Modal
 */
export default function Navbar() {
  const dispatch = useDispatch<AppDispatch>()
  const { searchQuery } = useSelector((state: RootState) => state.products)
  const { totalItems } = useSelector((state: RootState) => state.cart)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [showCartModal, setShowCartModal] = useState(false)
  const [showCheckout, setShowCheckout] = useState(false)

  // Handle search input changes and dispatch to Redux
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value))
  }

  // Toggle user menu visibility
  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu)
  }

  // Handle cart modal
  const toggleCartModal = () => {
    setShowCartModal(!showCartModal)
  }

  // Handle checkout flow
  const handleCheckout = () => {
    setShowCheckout(true)
  }

  return (
    <>
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight">RubyKart</h1>
            </div>

            {/* Search Bar - Hidden on mobile, visible on tablet+ */}
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search products..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              {/* Mobile Search Icon */}
              <button className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors">
                <Search className="h-5 w-5" />
              </button>

              {/* User Profile Icon with Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleUserMenu}
                  className="p-2 text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-100"
                >
                  <User className="h-5 w-5" />
                </button>

                {/* Simple User Menu Dropdown */}
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10">
                    <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-100">
                      <p className="font-medium">Welcome, Guest!</p>
                      <p className="text-gray-500">guest@mystore.com</p>
                    </div>
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                      Profile Settings
                    </button>
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                      Order History
                    </button>
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                      Sign Out
                    </button>
                  </div>
                )}
              </div>

              {/* Shopping Cart Icon with Badge */}
              <button
                onClick={toggleCartModal}
                className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-100"
              >
                <ShoppingCart className="h-5 w-5" />
                {/* Cart Item Count Badge */}
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                    {totalItems > 99 ? "99+" : totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Search Bar - Visible only on mobile */}
          <div className="md:hidden pb-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search products..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Cart Modal */}
      <CartModal isOpen={showCartModal} onClose={() => setShowCartModal(false)} onCheckout={handleCheckout} />

      {/* Checkout Flow */}
      {showCheckout && <CheckoutFlow onClose={() => setShowCheckout(false)} />}
    </>
  )
}
