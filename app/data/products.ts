// Enhanced product data structure with real product information
export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  imageUrl: string
  images: string[]
  description: string
  category: string
  brand: string
  rating: number
  reviewCount: number
  inStock: boolean
  stockCount: number
  features: string[]
  specifications: Record<string, string>
}

export interface Review {
  id: string
  productId: string
  userName: string
  rating: number
  comment: string
  date: string
  helpful: number
}

// Product categories
export const categories = [
  { id: "all", name: "All Products", count: 0 },
  { id: "headphones", name: "Headphones", count: 0 },
  { id: "smartphones", name: "Smartphones", count: 0 },
  { id: "laptops", name: "Laptops", count: 0 },
  { id: "accessories", name: "Accessories", count: 0 },
  { id: "gaming", name: "Gaming", count: 0 },
  { id: "smart-home", name: "Smart Home", count: 0 },
]

// Comprehensive product dataset with real-world inspired data
export const productsData: Product[] = [
  {
    id: "1",
    name: "Sony WH-1000XM5 Wireless Noise Canceling Headphones",
    price: 399.99,
    originalPrice: 449.99,
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop",
    ],
    description:
      "Industry-leading noise canceling with Dual Noise Sensor technology. Up to 30-hour battery life with quick charge.",
    category: "headphones",
    brand: "Sony",
    rating: 4.8,
    reviewCount: 2847,
    inStock: true,
    stockCount: 15,
    features: [
      "Industry-leading noise canceling",
      "30-hour battery life",
      "Quick charge (3 min = 3 hours)",
      "Touch sensor controls",
      "Speak-to-chat technology",
    ],
    specifications: {
      "Driver Size": "30mm",
      "Frequency Response": "4Hz-40kHz",
      "Battery Life": "30 hours",
      "Charging Time": "3 hours",
      Weight: "250g",
    },
  },
  {
    id: "2",
    name: "iPhone 15 Pro Max",
    price: 1199.99,
    imageUrl: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400&h=300&fit=crop",
    ],
    description: "The most advanced iPhone ever with titanium design, A17 Pro chip, and professional camera system.",
    category: "smartphones",
    brand: "Apple",
    rating: 4.7,
    reviewCount: 1523,
    inStock: true,
    stockCount: 8,
    features: [
      "A17 Pro chip",
      "Titanium design",
      "Pro camera system",
      "6.7-inch Super Retina XDR display",
      "Action Button",
    ],
    specifications: {
      Display: "6.7-inch Super Retina XDR",
      Chip: "A17 Pro",
      Storage: "256GB",
      Camera: "48MP Main, 12MP Ultra Wide",
      Battery: "Up to 29 hours video playback",
    },
  },
  {
    id: "3",
    name: "MacBook Pro 14-inch M3",
    price: 1999.99,
    imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
    ],
    description:
      "Supercharged by M3 chip. Built for all types of creatives, including developers, photographers, filmmakers, and more.",
    category: "laptops",
    brand: "Apple",
    rating: 4.9,
    reviewCount: 892,
    inStock: true,
    stockCount: 5,
    features: [
      "M3 chip with 8-core CPU",
      "14-inch Liquid Retina XDR display",
      "Up to 22 hours battery life",
      "Three Thunderbolt 4 ports",
      "MagSafe 3 charging",
    ],
    specifications: {
      Chip: "Apple M3",
      Memory: "16GB unified memory",
      Storage: "512GB SSD",
      Display: "14.2-inch Liquid Retina XDR",
      Weight: "3.5 pounds",
    },
  },
  {
    id: "4",
    name: "AirPods Pro (2nd generation)",
    price: 249.99,
    imageUrl: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=300&fit=crop",
    ],
    description: "Up to 2x more Active Noise Cancellation. Adaptive Transparency. Personalized Spatial Audio.",
    category: "accessories",
    brand: "Apple",
    rating: 4.6,
    reviewCount: 3421,
    inStock: true,
    stockCount: 25,
    features: [
      "2x more Active Noise Cancellation",
      "Adaptive Transparency",
      "Personalized Spatial Audio",
      "Up to 6 hours listening time",
      "MagSafe charging case",
    ],
    specifications: {
      Chip: "Apple H2",
      "Battery Life": "6 hours (AirPods), 30 hours (case)",
      Connectivity: "Bluetooth 5.3",
      "Water Resistance": "IPX4",
      Weight: "5.3g each",
    },
  },
  {
    id: "5",
    name: "PlayStation 5 Console",
    price: 499.99,
    imageUrl: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=400&h=300&fit=crop",
    ],
    description:
      "Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with haptic feedback.",
    category: "gaming",
    brand: "Sony",
    rating: 4.8,
    reviewCount: 1876,
    inStock: true,
    stockCount: 3,
    features: [
      "Ultra-high speed SSD",
      "Haptic feedback",
      "3D Audio technology",
      "4K gaming up to 120fps",
      "Ray tracing support",
    ],
    specifications: {
      CPU: "AMD Zen 2, 8 Cores",
      GPU: "AMD RDNA 2",
      Memory: "16GB GDDR6",
      Storage: "825GB SSD",
      "Optical Drive": "4K UHD Blu-ray",
    },
  },
  {
    id: "6",
    name: "Amazon Echo Dot (5th Gen)",
    price: 49.99,
    originalPrice: 59.99,
    imageUrl: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1543512214-318c7553f230?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    ],
    description: "Our most popular smart speaker with Alexa. Crisp vocals and balanced bass for full sound.",
    category: "smart-home",
    brand: "Amazon",
    rating: 4.4,
    reviewCount: 5632,
    inStock: true,
    stockCount: 50,
    features: ["Improved audio quality", "Built-in Alexa", "Smart home hub", "Voice control", "Compact design"],
    specifications: {
      Speaker: '1.73" driver',
      Connectivity: "Wi-Fi, Bluetooth",
      Dimensions: '3.9" x 3.5"',
      Weight: "10.7 oz",
      Power: "AC adapter",
    },
  },
  {
    id: "7",
    name: "Samsung Galaxy S24 Ultra",
    price: 1299.99,
    imageUrl: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&h=300&fit=crop",
    ],
    description: "The ultimate Android flagship with S Pen, 200MP camera, and AI-powered features.",
    category: "smartphones",
    brand: "Samsung",
    rating: 4.7,
    reviewCount: 987,
    inStock: true,
    stockCount: 12,
    features: [
      "200MP main camera",
      "Built-in S Pen",
      "AI-powered features",
      "6.8-inch Dynamic AMOLED display",
      "5000mAh battery",
    ],
    specifications: {
      Display: '6.8" Dynamic AMOLED 2X',
      Processor: "Snapdragon 8 Gen 3",
      RAM: "12GB",
      Storage: "256GB",
      Camera: "200MP + 50MP + 12MP + 10MP",
    },
  },
  {
    id: "8",
    name: "Dell XPS 13 Plus",
    price: 1399.99,
    imageUrl: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=400&h=300&fit=crop",
    ],
    description: "Redesigned for the modern world. Featuring a stunning 13.4-inch display and premium build quality.",
    category: "laptops",
    brand: "Dell",
    rating: 4.5,
    reviewCount: 654,
    inStock: true,
    stockCount: 7,
    features: [
      "13.4-inch InfinityEdge display",
      "12th Gen Intel Core processors",
      "Premium aluminum build",
      "Capacitive function keys",
      "Windows Hello",
    ],
    specifications: {
      Processor: "Intel Core i7-1260P",
      Memory: "16GB LPDDR5",
      Storage: "512GB SSD",
      Display: '13.4" FHD+ InfinityEdge',
      Weight: "2.73 lbs",
    },
  },
  {
    id: "9",
    name: "Logitech MX Master 3S",
    price: 99.99,
    imageUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400&h=300&fit=crop",
    ],
    description: "Advanced wireless mouse with ultra-fast scrolling, app-specific customization, and ergonomic design.",
    category: "accessories",
    brand: "Logitech",
    rating: 4.8,
    reviewCount: 2341,
    inStock: true,
    stockCount: 18,
    features: [
      "MagSpeed electromagnetic scrolling",
      "8K DPI sensor",
      "App-specific customization",
      "70-day battery life",
      "Multi-device connectivity",
    ],
    specifications: {
      Sensor: "Darkfield high precision",
      DPI: "200-8000 DPI",
      Battery: "Up to 70 days",
      Connectivity: "USB-C, Bluetooth, Logi Bolt",
      Weight: "141g",
    },
  },
  {
    id: "10",
    name: "Nintendo Switch OLED",
    price: 349.99,
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=300&fit=crop",
    ],
    description:
      "Enhanced Nintendo Switch with vibrant 7-inch OLED screen, wide adjustable stand, and dock with wired LAN port.",
    category: "gaming",
    brand: "Nintendo",
    rating: 4.6,
    reviewCount: 1432,
    inStock: true,
    stockCount: 9,
    features: [
      "7-inch OLED screen",
      "Enhanced audio",
      "Wide adjustable stand",
      "Dock with wired LAN port",
      "64GB internal storage",
    ],
    specifications: {
      Screen: "7-inch OLED multi-touch",
      Resolution: "1280x720 (handheld)",
      Storage: "64GB internal",
      Battery: "4.5-9 hours",
      Dimensions: '4.0" x 9.5" x 0.55"',
    },
  },
  {
    id: "11",
    name: "Bose QuietComfort 45",
    price: 329.99,
    originalPrice: 379.99,
    imageUrl: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=300&fit=crop",
    ],
    description: "Wireless Bluetooth headphones with world-class noise cancellation and premium comfort.",
    category: "headphones",
    brand: "Bose",
    rating: 4.7,
    reviewCount: 1876,
    inStock: true,
    stockCount: 11,
    features: [
      "World-class noise cancellation",
      "24-hour battery life",
      "Premium comfort",
      "Crystal clear calls",
      "Aware Mode",
    ],
    specifications: {
      Driver: "TriPort acoustic architecture",
      Battery: "24 hours wireless",
      Charging: "USB-C, 15 min = 3 hours",
      Weight: "238g",
      Connectivity: "Bluetooth 5.1",
    },
  },
  {
    id: "12",
    name: "iPad Pro 12.9-inch M2",
    price: 1099.99,
    imageUrl: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=300&fit=crop",
    ],
    description: "The ultimate iPad experience with M2 chip, Liquid Retina XDR display, and all-day battery life.",
    category: "accessories",
    brand: "Apple",
    rating: 4.8,
    reviewCount: 743,
    inStock: true,
    stockCount: 6,
    features: [
      "M2 chip performance",
      "12.9-inch Liquid Retina XDR display",
      "All-day battery life",
      "Apple Pencil support",
      "Thunderbolt connectivity",
    ],
    specifications: {
      Chip: "Apple M2",
      Display: "12.9-inch Liquid Retina XDR",
      Storage: "128GB",
      Camera: "12MP Wide, 10MP Ultra Wide",
      Battery: "Up to 10 hours",
    },
  },
]

// Mock reviews data
export const reviewsData: Review[] = [
  {
    id: "1",
    productId: "1",
    userName: "AudioPhile123",
    rating: 5,
    comment: "Absolutely incredible noise cancellation. Best headphones I've ever owned!",
    date: "2024-01-15",
    helpful: 23,
  },
  {
    id: "2",
    productId: "1",
    userName: "MusicLover",
    rating: 4,
    comment: "Great sound quality, but a bit pricey. Worth it for the features though.",
    date: "2024-01-10",
    helpful: 15,
  },
  {
    id: "3",
    productId: "2",
    userName: "TechReviewer",
    rating: 5,
    comment: "The camera quality is outstanding. A17 Pro chip makes everything so smooth.",
    date: "2024-01-12",
    helpful: 31,
  },
  {
    id: "4",
    productId: "3",
    userName: "Developer99",
    rating: 5,
    comment: "Perfect for development work. M3 chip handles everything I throw at it.",
    date: "2024-01-08",
    helpful: 28,
  },
  {
    id: "5",
    productId: "4",
    userName: "FitnessGuru",
    rating: 4,
    comment: "Great for workouts. Noise cancellation works well in the gym.",
    date: "2024-01-14",
    helpful: 12,
  },
]

// Update category counts
categories.forEach((category) => {
  if (category.id === "all") {
    category.count = productsData.length
  } else {
    category.count = productsData.filter((product) => product.category === category.id).length
  }
})
