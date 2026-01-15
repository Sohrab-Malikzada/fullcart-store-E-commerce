export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: string;
  image: string;
  images?: string[];
  inStock: boolean;
  stockCount: number;
  rating: number;
  reviewCount: number;
  featured?: boolean;
  tags?: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  productCount: number;
}

export const categories: Category[] = [
  {
    id: "1",
    name: "Electronics",
    slug: "electronics",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop",
    productCount: 8,
  },
  {
    id: "2",
    name: "Clothing",
    slug: "clothing",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop",
    productCount: 6,
  },
  {
    id: "3",
    name: "Home & Living",
    slug: "home-living",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=300&fit=crop",
    productCount: 5,
  },
  {
    id: "4",
    name: "Accessories",
    slug: "accessories",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400&h=300&fit=crop",
    productCount: 7,
  },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Noise-Canceling Headphones",
    price: 299.99,
    originalPrice: 349.99,
    description: "Premium wireless headphones with active noise cancellation, 30-hour battery life, and crystal-clear audio quality. Perfect for music lovers and professionals alike.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop",
    ],
    inStock: true,
    stockCount: 23,
    rating: 4.8,
    reviewCount: 342,
    featured: true,
    tags: ["wireless", "noise-canceling", "premium"],
  },
  {
    id: "2",
    name: "Minimalist Leather Watch",
    price: 189.00,
    description: "Elegant minimalist watch with genuine leather strap. Japanese quartz movement ensures precision timekeeping with understated sophistication.",
    category: "accessories",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop",
    inStock: true,
    stockCount: 45,
    rating: 4.6,
    reviewCount: 128,
    featured: true,
    tags: ["minimalist", "leather", "luxury"],
  },
  {
    id: "3",
    name: "Smart Home Speaker",
    price: 129.99,
    originalPrice: 149.99,
    description: "Voice-controlled smart speaker with premium sound quality. Control your smart home, play music, and get answers to your questions hands-free.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=600&h=600&fit=crop",
    inStock: true,
    stockCount: 67,
    rating: 4.5,
    reviewCount: 567,
    featured: true,
    tags: ["smart-home", "voice-control", "speaker"],
  },
  {
    id: "4",
    name: "Organic Cotton T-Shirt",
    price: 45.00,
    description: "Sustainably made organic cotton t-shirt. Soft, breathable, and perfect for everyday wear. Available in multiple colors.",
    category: "clothing",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
    inStock: true,
    stockCount: 150,
    rating: 4.4,
    reviewCount: 89,
    tags: ["organic", "sustainable", "cotton"],
  },
  {
    id: "5",
    name: "Ceramic Plant Pot Set",
    price: 68.00,
    description: "Set of 3 handcrafted ceramic plant pots in various sizes. Modern design with drainage holes and matching saucers.",
    category: "home-living",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&h=600&fit=crop",
    inStock: true,
    stockCount: 34,
    rating: 4.7,
    reviewCount: 156,
    featured: true,
    tags: ["ceramic", "handcrafted", "plants"],
  },
  {
    id: "6",
    name: "Laptop Backpack",
    price: 89.00,
    originalPrice: 110.00,
    description: "Water-resistant laptop backpack with padded compartments for 15-inch laptops. Features multiple pockets and ergonomic design.",
    category: "accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop",
    inStock: true,
    stockCount: 78,
    rating: 4.5,
    reviewCount: 234,
    tags: ["laptop", "water-resistant", "travel"],
  },
  {
    id: "7",
    name: "Wireless Charging Pad",
    price: 39.99,
    description: "Fast wireless charging pad compatible with all Qi-enabled devices. Sleek design with LED indicator and anti-slip surface.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e5?w=600&h=600&fit=crop",
    inStock: true,
    stockCount: 200,
    rating: 4.3,
    reviewCount: 445,
    tags: ["wireless", "charging", "fast-charge"],
  },
  {
    id: "8",
    name: "Linen Throw Blanket",
    price: 125.00,
    description: "Luxurious 100% linen throw blanket. Naturally temperature-regulating and softens with every wash. Perfect for any season.",
    category: "home-living",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop",
    inStock: true,
    stockCount: 28,
    rating: 4.9,
    reviewCount: 67,
    tags: ["linen", "luxury", "cozy"],
  },
  {
    id: "9",
    name: "Classic Denim Jacket",
    price: 120.00,
    description: "Timeless denim jacket with a modern fit. Made from premium selvedge denim that develops unique character over time.",
    category: "clothing",
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&h=600&fit=crop",
    inStock: true,
    stockCount: 42,
    rating: 4.6,
    reviewCount: 178,
    tags: ["denim", "classic", "premium"],
  },
  {
    id: "10",
    name: "Portable Bluetooth Speaker",
    price: 79.99,
    description: "Compact waterproof Bluetooth speaker with 360° sound. 12-hour battery life and built-in microphone for calls.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=600&fit=crop",
    inStock: true,
    stockCount: 95,
    rating: 4.4,
    reviewCount: 312,
    tags: ["bluetooth", "portable", "waterproof"],
  },
  {
    id: "11",
    name: "Leather Wallet",
    price: 75.00,
    description: "Handcrafted genuine leather wallet with RFID blocking technology. Slim design with ample card slots and bill compartment.",
    category: "accessories",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=600&fit=crop",
    inStock: true,
    stockCount: 63,
    rating: 4.7,
    reviewCount: 201,
    tags: ["leather", "rfid", "handcrafted"],
  },
  {
    id: "12",
    name: "Scented Candle Set",
    price: 48.00,
    description: "Set of 3 hand-poured soy wax candles with natural essential oils. Long-lasting burn time of 45+ hours each.",
    category: "home-living",
    image: "https://images.unsplash.com/photo-1602607753941-8e3ed14f57bf?w=600&h=600&fit=crop",
    inStock: false,
    stockCount: 0,
    rating: 4.8,
    reviewCount: 289,
    tags: ["soy-wax", "essential-oils", "handmade"],
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((product) => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((product) => product.featured);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.category.toLowerCase().includes(lowercaseQuery) ||
      product.tags?.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
};
