import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit"
import { productsData, type Product } from "../../data/products"

export type { Product } from "../../data/products"

export type SortOption = "featured" | "price-low" | "price-high" | "rating" | "newest"

interface ProductsState {
  items: Product[]
  filteredItems: Product[]
  loading: boolean
  error: string | null
  searchQuery: string
  selectedCategory: string
  sortBy: SortOption
  priceRange: [number, number]
  maxPrice: number
}

// Async thunk to simulate API call for fetching products
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1500))
  return productsData
})

const initialState: ProductsState = {
  items: [],
  filteredItems: [],
  loading: false,
  error: null,
  searchQuery: "",
  selectedCategory: "all",
  sortBy: "featured",
  priceRange: [0, 2000],
  maxPrice: 2000,
}

// Helper function to apply filters and sorting
const applyFiltersAndSort = (state: ProductsState) => {
  let filtered = [...state.items]

  // Apply category filter
  if (state.selectedCategory !== "all") {
    filtered = filtered.filter((product) => product.category === state.selectedCategory)
  }

  // Apply search filter
  if (state.searchQuery.trim() !== "") {
    const query = state.searchQuery.toLowerCase()
    filtered = filtered.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query),
    )
  }

  // Apply price range filter
  filtered = filtered.filter((product) => product.price >= state.priceRange[0] && product.price <= state.priceRange[1])

  // Apply sorting
  switch (state.sortBy) {
    case "price-low":
      filtered.sort((a, b) => a.price - b.price)
      break
    case "price-high":
      filtered.sort((a, b) => b.price - a.price)
      break
    case "rating":
      filtered.sort((a, b) => b.rating - a.rating)
      break
    case "newest":
      // For demo purposes, sort by id (assuming higher id = newer)
      filtered.sort((a, b) => Number.parseInt(b.id) - Number.parseInt(a.id))
      break
    case "featured":
    default:
      // Keep original order for featured
      break
  }

  state.filteredItems = filtered
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload
      applyFiltersAndSort(state)
    },
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload
      applyFiltersAndSort(state)
    },
    setSortBy: (state, action: PayloadAction<SortOption>) => {
      state.sortBy = action.payload
      applyFiltersAndSort(state)
    },
    setPriceRange: (state, action: PayloadAction<[number, number]>) => {
      state.priceRange = action.payload
      applyFiltersAndSort(state)
    },
    clearFilters: (state) => {
      state.searchQuery = ""
      state.selectedCategory = "all"
      state.sortBy = "featured"
      state.priceRange = [0, state.maxPrice]
      applyFiltersAndSort(state)
    },
    clearError: (state) => {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload

        // Calculate max price for price range filter
        state.maxPrice = Math.max(...action.payload.map((p) => p.price))
        state.priceRange = [0, state.maxPrice]

        applyFiltersAndSort(state)
        state.error = null
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Failed to fetch products"
        state.items = []
        state.filteredItems = []
      })
  },
})

export const { setSearchQuery, setSelectedCategory, setSortBy, setPriceRange, clearFilters, clearError } =
  productsSlice.actions

export default productsSlice.reducer
