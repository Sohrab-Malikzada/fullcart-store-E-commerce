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
    name: "الکترونیک",
    slug: "electronics",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop",
    productCount: 8,
  },
  {
    id: "2",
    name: "پوشاک",
    slug: "clothing",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop",
    productCount: 6,
  },
  {
    id: "3",
    name: "خانه و زندگی",
    slug: "home-living",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=300&fit=crop",
    productCount: 5,
  },
  {
    id: "4",
    name: "لوازم جانبی",
    slug: "accessories",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400&h=300&fit=crop",
    productCount: 7,
  },
];

export const products: Product[] = [
  {
    id: "1",
    name: "هدفون بی‌سیم با قابلیت حذف نویز",
    price: 299.99,
    originalPrice: 349.99,
    description: "هدفون بی‌سیم با کیفیت بالا و قابلیت حذف نویز فعال، باتری ۳۰ ساعته و صدای کریستالی. مناسب برای علاقه‌مندان به موسیقی و حرفه‌ای‌ها.",
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
    tags: ["بی‌سیم", "حذف نویز", "ممتاز"],
  },
  {
    id: "2",
    name: "ساعت چرمی مینیمالیست",
    price: 189.00,
    description: "ساعت مینیمالیست زیبا با بند چرم اصل. موتور کوارتز ژاپنی دقت بالا را تضمین می‌کند.",
    category: "accessories",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop",
    inStock: true,
    stockCount: 45,
    rating: 4.6,
    reviewCount: 128,
    featured: true,
    tags: ["مینیمالیست", "چرم", "لوکس"],
  },
  {
    id: "3",
    name: "بلندگوی هوشمند خانگی",
    price: 129.99,
    originalPrice: 149.99,
    description: "بلندگوی هوشمند با کنترل صدا و کیفیت صدای عالی. خانه هوشمند خود را کنترل کنید، موسیقی پخش کنید و سوالات خود را بپرسید.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=600&h=600&fit=crop",
    inStock: true,
    stockCount: 67,
    rating: 4.5,
    reviewCount: 567,
    featured: true,
    tags: ["خانه هوشمند", "کنترل صدا", "بلندگو"],
  },
  {
    id: "4",
    name: "تی‌شرت پنبه ارگانیک",
    price: 45.00,
    description: "تی‌شرت پنبه ارگانیک با تولید پایدار. نرم، قابل تنفس و مناسب برای استفاده روزمره.",
    category: "clothing",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
    inStock: true,
    stockCount: 150,
    rating: 4.4,
    reviewCount: 89,
    tags: ["ارگانیک", "پایدار", "پنبه"],
  },
  {
    id: "5",
    name: "ست گلدان سرامیکی",
    price: 68.00,
    description: "ست ۳ عددی گلدان سرامیکی دست‌ساز در اندازه‌های مختلف. طراحی مدرن با سوراخ زهکشی و بشقابک.",
    category: "home-living",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&h=600&fit=crop",
    inStock: true,
    stockCount: 34,
    rating: 4.7,
    reviewCount: 156,
    featured: true,
    tags: ["سرامیک", "دست‌ساز", "گیاه"],
  },
  {
    id: "6",
    name: "کوله‌پشتی لپ‌تاپ",
    price: 89.00,
    originalPrice: 110.00,
    description: "کوله‌پشتی ضد آب با محفظه‌های بالشتک‌دار برای لپ‌تاپ ۱۵ اینچی. دارای جیب‌های متعدد و طراحی ارگونومیک.",
    category: "accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop",
    inStock: true,
    stockCount: 78,
    rating: 4.5,
    reviewCount: 234,
    tags: ["لپ‌تاپ", "ضد آب", "سفر"],
  },
  {
    id: "7",
    name: "شارژر بی‌سیم",
    price: 39.99,
    description: "شارژر بی‌سیم سریع سازگار با تمام دستگاه‌های Qi. طراحی شیک با نشانگر LED و سطح ضد لغزش.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e5?w=600&h=600&fit=crop",
    inStock: true,
    stockCount: 200,
    rating: 4.3,
    reviewCount: 445,
    tags: ["بی‌سیم", "شارژ", "سریع"],
  },
  {
    id: "8",
    name: "پتوی کتانی",
    price: 125.00,
    description: "پتوی لوکس ۱۰۰٪ کتانی. به طور طبیعی دما را تنظیم می‌کند و با هر بار شستشو نرم‌تر می‌شود.",
    category: "home-living",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop",
    inStock: true,
    stockCount: 28,
    rating: 4.9,
    reviewCount: 67,
    tags: ["کتان", "لوکس", "راحت"],
  },
  {
    id: "9",
    name: "ژاکت جین کلاسیک",
    price: 120.00,
    description: "ژاکت جین بی‌زمان با اندازه مدرن. از جین ممتاز ساخته شده که با گذشت زمان کاراکتر منحصربه‌فرد پیدا می‌کند.",
    category: "clothing",
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&h=600&fit=crop",
    inStock: true,
    stockCount: 42,
    rating: 4.6,
    reviewCount: 178,
    tags: ["جین", "کلاسیک", "ممتاز"],
  },
  {
    id: "10",
    name: "بلندگوی بلوتوث قابل حمل",
    price: 79.99,
    description: "بلندگوی بلوتوث فشرده و ضد آب با صدای ۳۶۰ درجه. باتری ۱۲ ساعته و میکروفون داخلی.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=600&fit=crop",
    inStock: true,
    stockCount: 95,
    rating: 4.4,
    reviewCount: 312,
    tags: ["بلوتوث", "قابل حمل", "ضد آب"],
  },
  {
    id: "11",
    name: "کیف پول چرمی",
    price: 75.00,
    description: "کیف پول چرم اصل دست‌ساز با فناوری مسدودکننده RFID. طراحی باریک با جای کارت فراوان.",
    category: "accessories",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=600&fit=crop",
    inStock: true,
    stockCount: 63,
    rating: 4.7,
    reviewCount: 201,
    tags: ["چرم", "RFID", "دست‌ساز"],
  },
  {
    id: "12",
    name: "ست شمع معطر",
    price: 48.00,
    description: "ست ۳ عددی شمع موم سویا با روغن‌های طبیعی. هر شمع بیش از ۴۵ ساعت می‌سوزد.",
    category: "home-living",
    image: "https://images.unsplash.com/photo-1602607753941-8e3ed14f57bf?w=600&h=600&fit=crop",
    inStock: false,
    stockCount: 0,
    rating: 4.8,
    reviewCount: 289,
    tags: ["موم سویا", "روغن طبیعی", "دست‌ساز"],
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
