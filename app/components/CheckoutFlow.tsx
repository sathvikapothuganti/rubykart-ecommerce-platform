"use client"

import type React from "react"

import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { X, CreditCard, Truck, CheckCircle } from "lucide-react"
import type { RootState, AppDispatch } from "../store/store"
import { clearCart } from "../store/slices/cartSlice"

interface CheckoutFlowProps {
  onClose: () => void
}

type CheckoutStep = "shipping" | "payment" | "confirmation"

/**
 * Complete Checkout Flow Component
 * Handles shipping, payment, and order confirmation
 */
export default function CheckoutFlow({ onClose }: CheckoutFlowProps) {
  const dispatch = useDispatch<AppDispatch>()
  const { items, totalPrice } = useSelector((state: RootState) => state.cart)
  const [currentStep, setCurrentStep] = useState<CheckoutStep>("shipping")
  const [orderNumber, setOrderNumber] = useState("")

  // Form states
  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
  })

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
  })

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentStep("payment")
  }

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate payment processing
    const orderNum = "ORD-" + Date.now().toString().slice(-6)
    setOrderNumber(orderNum)
    setCurrentStep("confirmation")

    // Clear cart after successful order
    setTimeout(() => {
      dispatch(clearCart())
    }, 2000)
  }

  const handleClose = () => {
    if (currentStep === "confirmation") {
      dispatch(clearCart())
    }
    onClose()
  }

  const tax = totalPrice * 0.08
  const shipping = totalPrice > 100 ? 0 : 9.99
  const finalTotal = totalPrice + tax + shipping

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={handleClose} />

      {/* Modal */}
      <div className="absolute inset-4 bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="flex h-full">
          {/* Order Summary Sidebar */}
          <div className="w-1/3 bg-gray-50 p-6 border-r border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>

            {/* Items */}
            <div className="space-y-3 mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex items-center space-x-3">
                  <img
                    src={item.imageUrl || "/placeholder.svg"}
                    alt={item.name}
                    className="h-12 w-12 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{item.name}</p>
                    <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                  </div>
                  <p className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="border-t border-gray-200 pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Subtotal:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Tax:</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Shipping:</span>
                <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between text-lg font-semibold border-t border-gray-200 pt-2">
                <span>Total:</span>
                <span>${finalTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
              <div className="flex items-center space-x-4">
                {/* Step Indicators */}
                <div className="flex items-center space-x-2">
                  <div
                    className={`flex items-center space-x-2 ${currentStep === "shipping" ? "text-blue-600" : currentStep === "payment" || currentStep === "confirmation" ? "text-green-600" : "text-gray-400"}`}
                  >
                    <Truck className="h-5 w-5" />
                    <span className="text-sm font-medium">Shipping</span>
                  </div>
                  <div className="w-8 h-px bg-gray-300" />
                  <div
                    className={`flex items-center space-x-2 ${currentStep === "payment" ? "text-blue-600" : currentStep === "confirmation" ? "text-green-600" : "text-gray-400"}`}
                  >
                    <CreditCard className="h-5 w-5" />
                    <span className="text-sm font-medium">Payment</span>
                  </div>
                  <div className="w-8 h-px bg-gray-300" />
                  <div
                    className={`flex items-center space-x-2 ${currentStep === "confirmation" ? "text-green-600" : "text-gray-400"}`}
                  >
                    <CheckCircle className="h-5 w-5" />
                    <span className="text-sm font-medium">Confirmation</span>
                  </div>
                </div>
              </div>
              <button onClick={handleClose} className="text-gray-400 hover:text-gray-600 transition-colors">
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Step Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {currentStep === "shipping" && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Shipping Information</h2>
                  <form onSubmit={handleShippingSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <input
                          type="text"
                          required
                          value={shippingInfo.firstName}
                          onChange={(e) => setShippingInfo({ ...shippingInfo, firstName: e.target.value })}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <input
                          type="text"
                          required
                          value={shippingInfo.lastName}
                          onChange={(e) => setShippingInfo({ ...shippingInfo, lastName: e.target.value })}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        required
                        value={shippingInfo.email}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                      <input
                        type="text"
                        required
                        value={shippingInfo.address}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                        <input
                          type="text"
                          required
                          value={shippingInfo.city}
                          onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                        <input
                          type="text"
                          required
                          value={shippingInfo.state}
                          onChange={(e) => setShippingInfo({ ...shippingInfo, state: e.target.value })}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
                        <input
                          type="text"
                          required
                          value={shippingInfo.zipCode}
                          onChange={(e) => setShippingInfo({ ...shippingInfo, zipCode: e.target.value })}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={shippingInfo.phone}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, phone: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors mt-6"
                    >
                      Continue to Payment
                    </button>
                  </form>
                </div>
              )}

              {currentStep === "payment" && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Information</h2>
                  <form onSubmit={handlePaymentSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Name on Card</label>
                      <input
                        type="text"
                        required
                        value={paymentInfo.nameOnCard}
                        onChange={(e) => setPaymentInfo({ ...paymentInfo, nameOnCard: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                      <input
                        type="text"
                        required
                        placeholder="1234 5678 9012 3456"
                        value={paymentInfo.cardNumber}
                        onChange={(e) => setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                        <input
                          type="text"
                          required
                          placeholder="MM/YY"
                          value={paymentInfo.expiryDate}
                          onChange={(e) => setPaymentInfo({ ...paymentInfo, expiryDate: e.target.value })}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                        <input
                          type="text"
                          required
                          placeholder="123"
                          value={paymentInfo.cvv}
                          onChange={(e) => setPaymentInfo({ ...paymentInfo, cvv: e.target.value })}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-medium text-gray-900 mb-2">Order Total: ${finalTotal.toFixed(2)}</h3>
                      <p className="text-sm text-gray-600">Your card will be charged ${finalTotal.toFixed(2)}</p>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors mt-6"
                    >
                      Complete Order
                    </button>
                  </form>
                </div>
              )}

              {currentStep === "confirmation" && (
                <div className="text-center">
                  <div className="mb-6">
                    <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Confirmed!</h2>
                    <p className="text-gray-600">
                      Thank you for your purchase. Your order has been successfully placed.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Order Details</h3>
                    <p className="text-sm text-gray-600 mb-1">
                      Order Number: <span className="font-medium">{orderNumber}</span>
                    </p>
                    <p className="text-sm text-gray-600 mb-1">
                      Total: <span className="font-medium">${finalTotal.toFixed(2)}</span>
                    </p>
                    <p className="text-sm text-gray-600">Estimated Delivery: 3-5 business days</p>
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={handleClose}
                      className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                      Continue Shopping
                    </button>
                    <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                      Track Your Order
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
