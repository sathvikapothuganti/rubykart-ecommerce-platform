# RubyKart - Modern E-Commerce Application

A comprehensive, modern e-commerce single-page application built with React.js, Redux Toolkit, and Tailwind CSS. Features a complete shopping experience from product browsing to checkout completion.

![RubyKart Demo](https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop)

## 🚀 Features

### 🛍️ **Shopping Experience**
- **Product Catalog**: 12+ realistic products with high-quality images
- **Advanced Search**: Real-time product search with instant results
- **Smart Filtering**: Filter by category, price range, and sort options
- **Product Details**: Comprehensive product modals with image galleries
- **Reviews System**: Customer reviews with ratings and helpful votes
- **Wishlist**: Save favorite products for later

### 🛒 **Shopping Cart & Checkout**
- **Interactive Cart**: Slide-out cart modal with quantity controls
- **Multi-Step Checkout**: Professional checkout flow (Shipping → Payment → Confirmation)
- **Order Management**: Complete order processing with confirmation
- **Real-time Totals**: Live calculation of subtotals, tax, and shipping

### 🎨 **User Interface**
- **Modern Design**: Clean, minimalistic interface inspired by major e-commerce sites
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Theme**: Theme switching with user preference persistence
- **Smooth Animations**: Professional transitions and loading states
- **Accessibility**: WCAG compliant with proper ARIA labels

### 🔧 **Technical Features**
- **State Management**: Comprehensive Redux Toolkit implementation
- **Performance**: Optimized with lazy loading and efficient re-renders
- **Type Safety**: Full TypeScript implementation
- **Error Handling**: Graceful error states and user feedback
- **Local Storage**: Cart and theme persistence

## 🛠️ Tech Stack

- **Frontend Framework**: Next.js 14 with App Router
- **UI Library**: React 18 with TypeScript
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image component
- **Development**: ESLint, Prettier

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/sathvikapothuganti
/rubykart.git
   cd rubykart
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Usage Guide

### **Browsing Products**
- Use the search bar to find specific products
- Apply filters using the sidebar (category, price range, sorting)
- Click on product cards to view detailed information
- Add products to wishlist using the heart icon

### **Shopping Cart**
- Click the cart icon in the navbar to open the cart modal
- Adjust quantities using the +/- buttons
- Remove items or clear the entire cart
- Proceed to checkout when ready

### **Checkout Process**
1. **Shipping Information**: Enter delivery details
2. **Payment Information**: Add payment method (demo mode)
3. **Order Confirmation**: Review and confirm your order

### **Product Reviews**
- View existing customer reviews in product modals
- Write your own reviews with star ratings
- Mark helpful reviews to help other customers

## 📁 Project Structure

```
rubykart/
├── app/
│   ├── components/           # React components
│   │   ├── CartModal.tsx    # Shopping cart modal
│   │   ├── CheckoutFlow.tsx # Multi-step checkout
│   │   ├── ProductCard.tsx  # Product display cards
│   │   ├── ProductModal.tsx # Product detail modal
│   │   ├── ProductGrid.tsx  # Product listing
│   │   ├── ProductFilters.tsx # Filter sidebar
│   │   ├── Navbar.tsx       # Navigation bar
│   │   └── ...
│   ├── contexts/            # React contexts
│   │   └── ThemeContext.tsx # Theme management
│   ├── data/               # Static data
│   │   └── products.ts     # Product dataset
│   ├── store/              # Redux store
│   │   ├── slices/         # Redux slices
│   │   │   ├── productsSlice.ts
│   │   │   ├── cartSlice.ts
│   │   │   └── reviewsSlice.ts
│   │   └── store.ts        # Store configuration
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── public/                 # Static assets
├── README.md              # Project documentation
├── package.json           # Dependencies
└── tailwind.config.ts     # Tailwind configuration
```

## 🎨 Key Components

### **ProductCard**
Displays product information with interactive features:
- Product images with hover effects
- Pricing with discount badges
- Star ratings and review counts
- Add to cart and wishlist buttons
- Stock status indicators

### **CartModal**
Comprehensive shopping cart interface:
- Item list with thumbnails
- Quantity controls
- Price calculations
- Checkout initiation

### **CheckoutFlow**
Multi-step checkout process:
- Form validation
- Order summary
- Payment simulation
- Order confirmation

### **ProductModal**
Detailed product view featuring:
- Image gallery with thumbnails
- Tabbed content (description, specs, reviews)
- Review system with ratings
- Add to cart with quantity selection

## 🔄 State Management

The application uses Redux Toolkit for state management with three main slices:

- **Products Slice**: Product data, filtering, and search
- **Cart Slice**: Shopping cart items and calculations  
- **Reviews Slice**: Customer reviews and ratings

## 🎨 Styling & Theming

- **Tailwind CSS**: Utility-first CSS framework
- **Custom Components**: Reusable UI components
- **Theme System**: Dark/light mode with persistence
- **Responsive Design**: Mobile-first approach
- **Animations**: Smooth transitions and micro-interactions

## 🚀 Performance Optimizations

- **Code Splitting**: Automatic code splitting with Next.js
- **Image Optimization**: Next.js Image component with lazy loading
- **State Optimization**: Efficient Redux selectors and memoization
- **Bundle Analysis**: Optimized bundle size

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### **Development Guidelines**
- Follow TypeScript best practices
- Use meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Follow the existing code style

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Design Inspiration**: Modern e-commerce platforms
- **Images**: [Unsplash](https://unsplash.com) for high-quality product photos
- **Icons**: [Lucide React](https://lucide.dev) for beautiful icons
- **UI Components**: Custom components built with Tailwind CSS

## 📞 Support

If you have any questions or need help with setup, please:

- 📧 Email: support@rubykart.com
- 🐛 Report bugs: [GitHub Issues](https://github.com/sathvikapothuganti
/rubykart/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/sathvikapothuganti
/rubykart/discussions)

## 🗺️ Roadmap

### **Upcoming Features**
- [ ] User authentication and profiles
- [ ] Order history and tracking
- [ ] Product recommendations
- [ ] Admin dashboard
- [ ] Real payment integration
- [ ] Multi-language support
- [ ] Advanced analytics

### **Version History**
- **v1.0.0** - Initial release with core e-commerce features
- **v1.1.0** - Added reviews system and enhanced filtering
- **v1.2.0** - Implemented theme switching and improved UX

---

**Built with ❤️ by the RubyKart Team**

*Happy Shopping! 🛍️*
