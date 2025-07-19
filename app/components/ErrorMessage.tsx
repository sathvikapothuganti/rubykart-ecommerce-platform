"use client"

import { useDispatch } from "react-redux"
import { AlertCircle, RefreshCw } from "lucide-react"
import type { AppDispatch } from "../store/store"
import { fetchProducts, clearError } from "../store/slices/productsSlice"

interface ErrorMessageProps {
  message: string
}

/**
 * Error Message Component
 *
 * Displays error state when product fetching fails.
 * Includes retry functionality and clear error messaging.
 */
export default function ErrorMessage({ message }: ErrorMessageProps) {
  const dispatch = useDispatch<AppDispatch>()

  // Handle retry button click
  const handleRetry = () => {
    dispatch(clearError())
    dispatch(fetchProducts())
  }

  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="max-w-md mx-auto text-center">
        {/* Error Icon */}
        <div className="text-red-500 mb-4">
          <AlertCircle className="mx-auto h-16 w-16" />
        </div>

        {/* Error Title */}
        <h3 className="text-lg font-medium text-gray-900 mb-2">Oops! Something went wrong</h3>

        {/* Error Message */}
        <p className="text-gray-600 mb-6">{message || "Failed to load products. Please try again."}</p>

        {/* Retry Button */}
        <button
          onClick={handleRetry}
          className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
        >
          <RefreshCw className="h-4 w-4" />
          <span>Try Again</span>
        </button>
      </div>
    </div>
  )
}
