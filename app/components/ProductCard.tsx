"use client"

import type React from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { ShoppingCart, Heart, Star, Eye } from "lucide-react"
import type { AppDispatch } from "../store/store"
import { addToCart } from "../store/slices/cartSlice"
import type { Product } from "../store/slices/productsSlice"
import ProductModal from "./ProductModal"

interface ProductCardProps {
  product: Product
}

/**
 * Enhanced Product Card Component with Reviews and Modal
 */
export default function ProductCard({ product }: ProductCardProps) {
  const dispatch = useDispatch<AppDispatch>()
  const [isAddingToCart, setIsAddingToCart] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [showModal, setShowModal] = useState(false)

  // Handle adding product to cart with visual feedback
  const handleAddToCart = async (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsAddingToCart(true)
    dispatch(addToCart(product))
    setTimeout(() => setIsAddingToCart(false), 300)
  }

  // Handle product card click - show product modal
  const handleCardClick = () => {
    setShowModal(true)
  }

  // Handle wishlist toggle
  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsLiked(!isLiked)
  }

  // Handle quick view
  const handleQuickView = (e: React.MouseEvent) => {
    e.stopPropagation()
    setShowModal(true)
  }

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <>
      <div
        onClick={handleCardClick}
        className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group border border-gray-200 overflow-hidden"
      >
        {/* Product Image Container */}
        <div className="relative overflow-hidden bg-gray-100">
          <img
            src={product.imageUrl || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />

          {/* Discount Badge */}
          {discountPercentage > 0 && (
            <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              -{discountPercentage}%
            </div>
          )}

          {/* Stock Status */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="bg-white text-gray-900 px-3 py-1 rounded-lg font-medium">Out of Stock</span>
            </div>
          )}

          {/* Action Buttons */}
          <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={handleWishlistToggle}
              className={`p-2 rounded-full transition-all duration-200 ${
                isLiked
                  ? "bg-red-500 text-white shadow-md"
                  : "bg-white/80 text-gray-600 hover:bg-white hover:text-red-500"
              }`}
            >
              <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
            </button>
            <button
              onClick={handleQuickView}
              className="p-2 rounded-full bg-white/80 text-gray-600 hover:bg-white hover:text-blue-500 transition-all duration-200"
            >
              <Eye className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Product Information */}
        <div className="p-4">
          {/* Brand */}
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{product.brand}</p>

          {/* Product Name */}
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600 ml-2">
              {product.rating} ({product.reviewCount})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center mb-3">
            <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through ml-2">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>

          {/* Stock Info */}
          {product.inStock && product.stockCount <= 5 && (
            <p className="text-sm text-orange-600 mb-3">Only {product.stockCount} left in stock!</p>
          )}

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={isAddingToCart || !product.inStock}
            className={`w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              !product.inStock
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : isAddingToCart
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 text-white hover:shadow-md active:scale-95"
            }`}
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="text-sm">
              {!product.inStock ? "Out of Stock" : isAddingToCart ? "Adding..." : "Add to Cart"}
            </span>
          </button>
        </div>
      </div>

      {/* Product Modal */}
      {showModal && <ProductModal product={product} isOpen={showModal} onClose={() => setShowModal(false)} />}
    </>
  )
}
