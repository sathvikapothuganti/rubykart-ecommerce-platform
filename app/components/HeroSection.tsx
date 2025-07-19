/**
 * Hero Section Component
 *
 * A visually appealing banner section that appears below the navbar.
 * Features a welcoming message and brand positioning to engage users.
 * Designed to be responsive and maintain the minimalistic aesthetic.
 */
export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Discover Amazing Products
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Shop the latest tech gadgets and accessories with fast shipping and unbeatable prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md">
              Shop Now
            </button>
            <button className="border border-gray-300 hover:border-gray-400 text-gray-700 font-medium py-3 px-8 rounded-lg transition-colors duration-200 hover:bg-gray-50">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
