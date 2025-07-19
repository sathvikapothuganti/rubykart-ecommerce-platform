import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { reviewsData, type Review } from "../../data/products"

interface ReviewsState {
  reviews: Review[]
  loading: boolean
  error: string | null
}

const initialState: ReviewsState = {
  reviews: reviewsData,
  loading: false,
  error: null,
}

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    addReview: (state, action: PayloadAction<Omit<Review, "id" | "date" | "helpful">>) => {
      const newReview: Review = {
        ...action.payload,
        id: Date.now().toString(),
        date: new Date().toISOString().split("T")[0],
        helpful: 0,
      }
      state.reviews.push(newReview)
    },
    markReviewHelpful: (state, action: PayloadAction<string>) => {
      const review = state.reviews.find((r) => r.id === action.payload)
      if (review) {
        review.helpful += 1
      }
    },
  },
})

export const { addReview, markReviewHelpful } = reviewsSlice.actions
export default reviewsSlice.reducer
