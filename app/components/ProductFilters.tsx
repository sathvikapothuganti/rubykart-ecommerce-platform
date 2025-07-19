"use client"

import { useSelector, useDispatch } from "react-redux"
import { Filter, X } from "lucide-react"
import type { RootState, AppDispatch } from "../store/store"
import {
  setSelectedCategory,
  setSortBy,
  setPriceRange,
  clearFilters,
  type SortOption,
} from "../store/slices/productsSlice"
import { categories } from "../data/products"

/**
 * Product Filters Component
 * Provides category filtering, sorting, and price range controls
 */
export default function ProductFilters() {
  const dispatch = useDispatch<AppDispatch>()
  const { selectedCategory, sortBy, priceRange, maxPrice } = useSelector((state: RootState) => state.products)

  const sortOptions: { value: SortOption; label: string }[] = [
    { value: "featured", label: "Featured" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "rating", label: "Highest Rated" },
    { value: "newest", label: "Newest" },
  ]

  const handleCategoryChange = (categoryId: string) => {
    dispatch(setSelectedCategory(categoryId))
  }

  const handleSortChange = (sort: SortOption) => {
    dispatch(setSortBy(sort))
  }

  const handlePriceRangeChange = (min: number, max: number) => {
    dispatch(setPriceRange([min, max]))
  }

  const handleClearFilters = () => {
    dispatch(clearFilters())
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-24">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Filter className="h-5 w-5 text-gray-600" />
          <h3 className="font-semibold text-gray-900">Filters</h3>
        </div>
        <button
          onClick={handleClearFilters}
          className="text-sm text-blue-600 hover:text-blue-700 flex items-center space-x-1"
        >
          <X className="h-4 w-4" />
          <span>Clear</span>
        </button>
      </div>

      {/* Sort By */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-900 mb-3">Sort By</h4>
        <select
          value={sortBy}
          onChange={(e) => handleSortChange(e.target.value as SortOption)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-900 mb-3">Categories</h4>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category.id} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name="category"
                value={category.id}
                checked={selectedCategory === category.id}
                onChange={() => handleCategoryChange(category.id)}
                className="text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700 flex-1">{category.name}</span>
              <span className="text-xs text-gray-500">({category.count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-900 mb-3">Price Range</h4>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <input
              type="number"
              value={priceRange[0]}
              onChange={(e) => handlePriceRangeChange(Number(e.target.value), priceRange[1])}
              className="w-20 p-2 border border-gray-300 rounded text-sm"
              min="0"
              max={maxPrice}
            />
            <span className="text-gray-500">to</span>
            <input
              type="number"
              value={priceRange[1]}
              onChange={(e) => handlePriceRangeChange(priceRange[0], Number(e.target.value))}
              className="w-20 p-2 border border-gray-300 rounded text-sm"
              min="0"
              max={maxPrice}
            />
          </div>
          <div className="text-sm text-gray-600">
            ${priceRange[0]} - ${priceRange[1]}
          </div>
        </div>
      </div>
    </div>
  )
}
