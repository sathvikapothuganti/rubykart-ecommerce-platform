"use client"

import type React from "react"

import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { X, ShoppingCart, Star, Plus, Minus } from "lucide-react"
import type { AppDispatch, RootState } from "../store/store"
import { addToCart } from "../store/slices/cartSlice"
import { addReview, markReviewHelpful } from "../store/slices/reviewsSlice"
import type { Product } from "../store/slices/productsSlice"

interface ProductModalProps {
  product: Product
  isOpen: boolean
  onClose: () => void
}

/**
 * Product Detail Modal with Reviews
 */
export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const dispatch = useDispatch<AppDispatch>()
  const reviews = useSelector((state: RootState) =>
    state.reviews.reviews.filter((review) => review.productId === product.id),
  )

  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState<"description" | "specifications" | "reviews">("description")
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [newReview, setNewReview] = useState({
    userName: "",
    rating: 5,
    comment: "",
  })

  if (!isOpen) return null

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch(addToCart(product))
    }
    onClose()
  }

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(
      addReview({
        productId: product.id,
        userName: newReview.userName,
        rating: newReview.rating,
        comment: newReview.comment,
      }),
    )
    setNewReview({ userName: "", rating: 5, comment: "" })
    setShowReviewForm(false)
  }

  const handleMarkHelpful = (reviewId: string) => {
    dispatch(markReviewHelpful(reviewId))
  }

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />

      {/* Modal */}
      <div className="absolute inset-4 bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="flex h-full">
          {/* Product Images */}
          <div className="w-1/2 p-6">
            <div className="relative">
              <button
                onClick={onClose}
                className="absolute top-0 right-0 z-10 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Main Image */}
              <div className="mb-4">
                <img
                  src={product.images[selectedImage] || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>

              {/* Image Thumbnails */}
              <div className="flex space-x-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? "border-blue-500" : "border-gray-200"
                    }`}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="w-1/2 flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-gray-200">
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">{product.brand}</p>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600 ml-2">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center mb-4">
                <span className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-500 line-through ml-3">${product.originalPrice.toFixed(2)}</span>
                )}
              </div>

              {/* Quantity and Add to Cart */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="p-2 hover:bg-gray-100 transition-colors">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>{product.inStock ? "Add to Cart" : "Out of Stock"}</span>
                </button>
              </div>

              {/* Stock Status */}
              {product.inStock && product.stockCount <= 5 && (
                <p className="text-sm text-orange-600">Only {product.stockCount} left in stock!</p>
              )}
            </div>

            {/* Tabs */}
            <div className="flex-1 flex flex-col">
              <div className="flex border-b border-gray-200">
                {[
                  { id: "description", label: "Description" },
                  { id: "specifications", label: "Specifications" },
                  { id: "reviews", label: `Reviews (${reviews.length})` },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-6 py-3 font-medium text-sm border-b-2 transition-colors ${
                      activeTab === tab.id
                        ? "border-blue-500 text-blue-600"
                        : "border-transparent text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="flex-1 overflow-y-auto p-6">
                {activeTab === "description" && (
                  <div>
                    <p className="text-gray-700 mb-4">{product.description}</p>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index} className="text-gray-700 flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === "specifications" && (
                  <div>
                    <div className="space-y-3">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                          <span className="font-medium text-gray-900">{key}:</span>
                          <span className="text-gray-700">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "reviews" && (
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-lg font-semibold">Customer Reviews</h3>
                      <button
                        onClick={() => setShowReviewForm(!showReviewForm)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
                      >
                        Write a Review
                      </button>
                    </div>

                    {/* Review Form */}
                    {showReviewForm && (
                      <form onSubmit={handleSubmitReview} className="bg-gray-50 p-4 rounded-lg mb-6">
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input
                              type="text"
                              required
                              value={newReview.userName}
                              onChange={(e) => setNewReview({ ...newReview, userName: e.target.value })}
                              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
                            <div className="flex space-x-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                  key={star}
                                  type="button"
                                  onClick={() => setNewReview({ ...newReview, rating: star })}
                                  className={`p-1 ${star <= newReview.rating ? "text-yellow-400" : "text-gray-300"}`}
                                >
                                  <Star className="h-5 w-5 fill-current" />
                                </button>
                              ))}
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Review</label>
                            <textarea
                              required
                              rows={3}
                              value={newReview.comment}
                              onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          </div>
                          <div className="flex space-x-2">
                            <button
                              type="submit"
                              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
                            >
                              Submit Review
                            </button>
                            <button
                              type="button"
                              onClick={() => setShowReviewForm(false)}
                              className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </form>
                    )}

                    {/* Reviews List */}
                    <div className="space-y-4">
                      {reviews.length === 0 ? (
                        <p className="text-gray-600 text-center py-8">
                          No reviews yet. Be the first to review this product!
                        </p>
                      ) : (
                        reviews.map((review) => (
                          <div key={review.id} className="border-b border-gray-200 pb-4">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center space-x-2">
                                <span className="font-medium text-gray-900">{review.userName}</span>
                                <div className="flex items-center">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-4 w-4 ${
                                        i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                                      }`}
                                    />
                                  ))}
                                </div>
                              </div>
                              <span className="text-sm text-gray-500">{review.date}</span>
                            </div>
                            <p className="text-gray-700 mb-2">{review.comment}</p>
                            <button
                              onClick={() => handleMarkHelpful(review.id)}
                              className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                            >
                              Helpful ({review.helpful})
                            </button>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
