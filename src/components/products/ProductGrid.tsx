import ProductCard from "./ProductCard";
import { Skeleton } from "@/components/ui/skeleton";
import type { Product } from "@/data/products";

interface ProductGridProps {
  products: Product[];
  isLoading?: boolean;
}

const ProductGridSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {Array.from({ length: 8 }).map((_, i) => (
      <div key={i} className="space-y-4">
        <Skeleton className="aspect-square w-full rounded-lg" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-6 w-1/3" />
      </div>
    ))}
  </div>
);

const ProductGrid = ({ products, isLoading }: ProductGridProps) => {
  if (isLoading) return <ProductGridSkeleton />;

  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-lg text-muted-foreground">محصولی یافت نشد. فیلترها یا جستجوی خود را تغییر دهید.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
