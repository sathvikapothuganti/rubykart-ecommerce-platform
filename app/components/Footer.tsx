import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

/**
 * Footer Component
 *
 * Contains social media links, contact information, and copyright notice.
 * Designed to be responsive and maintain the minimalistic aesthetic.
 *
 * Features:
 * - Social media icons with hover effects
 * - Contact information
 * - Copyright notice
 * - Responsive layout
 */
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Information */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">RubyKart</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Your trusted destination for the latest tech gadgets and accessories. Quality products, competitive
              prices, and exceptional service.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-600">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-sm">support@mystore.com</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm">1-800-RUBYKART</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-sm">92 Commerce St, Hi-Tech City, TC Hyderabad</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Connect With Us</h4>
            <p className="text-gray-600 text-sm mb-4">
              Follow us on social media for the latest updates and exclusive offers.
            </p>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-gray-100"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>

              {/* Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-gray-100"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-600 transition-colors p-2 rounded-lg hover:bg-gray-100"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-700 transition-colors p-2 rounded-lg hover:bg-gray-100"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            © {currentYear} RubyKart. All rights reserved. Built with ❤️ for amazing shopping experiences.
          </p>
        </div>
      </div>
    </footer>
  )
}
