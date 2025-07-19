/**
 * Loading Spinner Component
 *
 * Displays a centered loading spinner with message while products are being fetched.
 * Provides visual feedback during the simulated API call delay.
 */
export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      {/* Animated Spinner */}
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>

      {/* Loading Message */}
      <h3 className="text-lg font-medium text-gray-900 mb-2">Loading Products...</h3>
      <p className="text-gray-600 text-center max-w-md">
        {"We're fetching the latest products for you. This will just take a moment."}
      </p>
    </div>
  )
}
