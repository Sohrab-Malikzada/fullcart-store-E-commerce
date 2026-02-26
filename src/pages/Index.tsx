import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import ProductGrid from "@/components/products/ProductGrid";
import { useFeaturedProducts, useCategories } from "@/hooks/useProducts";

const Index = () => {
  const { data: featuredProducts, isLoading: productsLoading } = useFeaturedProducts();
  const { data: categories } = useCategories();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-background to-secondary/50 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              انتخاب شده برای سبک زندگی <span className="text-primary">مدرن</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              مجموعه منتخب ما از محصولات با کیفیت را کشف کنید. از ضروریات بی‌زمان تا طراحی‌های معاصر.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products">
                <Button size="lg" className="gap-2">
                  مشاهده مجموعه <ArrowLeft className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/products?category=accessories">
                <Button size="lg" variant="outline">محصولات جدید</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-10">خرید بر اساس دسته‌بندی</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories?.map((category) => (
              <Link key={category.id} to={`/products?category=${category.slug}`} className="group relative aspect-[4/3] overflow-hidden rounded-lg">
                <img src={category.image} alt={category.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                <div className="absolute bottom-4 right-4">
                  <h3 className="text-background font-semibold text-lg font-sans">{category.name}</h3>
                  <p className="text-background/80 text-sm">{category.productCount} محصول</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="font-serif text-3xl font-bold">محصولات ویژه</h2>
            <Link to="/products">
              <Button variant="ghost" className="gap-2">مشاهده همه <ArrowLeft className="h-4 w-4" /></Button>
            </Link>
          </div>
          <ProductGrid products={featuredProducts || []} isLoading={productsLoading} />
        </div>
      </section>
    </Layout>
  );
};

export default Index;
