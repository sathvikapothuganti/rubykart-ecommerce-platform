"use client"

import { useSelector } from "react-redux"
import type { RootState } from "../store/store"
import ProductCard from "./ProductCard"
import ProductFilters from "./ProductFilters"
import LoadingSpinner from "./LoadingSpinner"
import ErrorMessage from "./ErrorMessage"

/**
 * Enhanced Product Grid Component with Filters and Sorting
 */
export default function ProductGrid() {
  const { filteredItems, loading, error, searchQuery, selectedCategory } = useSelector(
    (state: RootState) => state.products,
  )

  // Loading state
  if (loading) {
    return <LoadingSpinner />
  }

  // Error state
  if (error) {
    return <ErrorMessage message={error} />
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Filters Sidebar */}
      <div className="lg:w-64 flex-shrink-0">
        <ProductFilters />
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {searchQuery
                ? `Search Results for "${searchQuery}"`
                : selectedCategory === "all"
                  ? "All Products"
                  : selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1).replace("-", " ")}
            </h2>
            <p className="text-gray-600 mt-1">
              {filteredItems.length} {filteredItems.length === 1 ? "product" : "products"} found
            </p>
          </div>
        </div>

        {/* Empty Results */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="text-gray-400 mb-4">
                <svg className="mx-auto h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your filters or search terms to find what you're looking for.
              </p>
            </div>
          </div>
        ) : (
          /* Product Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredItems.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
