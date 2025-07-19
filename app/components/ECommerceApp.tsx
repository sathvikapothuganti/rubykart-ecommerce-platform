"use client"

import { useEffect } from "react"
import { useDispatch } from "react-redux"
import type { AppDispatch } from "../store/store"
import { fetchProducts } from "../store/slices/productsSlice"
import Navbar from "./Navbar"
import HeroSection from "./HeroSection"
import ProductGrid from "./ProductGrid"
import Footer from "./Footer"

/**
 * Main ECommerce Application Component
 *
 * This is the root component that orchestrates the entire single-page application.
 * It handles the initial data fetching and renders all major sections of the app.
 *
 * Structure:
 * - Navbar: Contains logo, search, profile, and cart
 * - HeroSection: Welcome banner with branding
 * - ProductGrid: Main content area displaying products
 * - Footer: Social links and copyright information
 */
export default function ECommerceApp() {
  const dispatch = useDispatch<AppDispatch>()

  // Fetch products when component mounts
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Main Content Area */}
      <main className="container mx-auto px-4 py-8">
        <ProductGrid />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
