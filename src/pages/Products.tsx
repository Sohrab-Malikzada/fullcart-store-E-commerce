import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ProductGrid from "@/components/products/ProductGrid";
import ProductFilters from "@/components/products/ProductFilters";
import { useProducts } from "@/hooks/useProducts";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const initialSearch = searchParams.get("search") || "";

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [categoryFilter, setCategoryFilter] = useState(initialCategory);
  const [sortBy, setSortBy] = useState("featured");

  const { data: products, isLoading } = useProducts(categoryFilter, searchQuery);

  const sortedProducts = useMemo(() => {
    if (!products) return [];
    const sorted = [...products];
    switch (sortBy) {
      case "price-low": return sorted.sort((a, b) => a.price - b.price);
      case "price-high": return sorted.sort((a, b) => b.price - a.price);
      case "rating": return sorted.sort((a, b) => b.rating - a.rating);
      default: return sorted;
    }
  }, [products, sortBy]);

  const handleCategoryChange = (value: string) => {
    setCategoryFilter(value);
    if (value === "all") searchParams.delete("category");
    else searchParams.set("category", value);
    setSearchParams(searchParams);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-serif text-3xl font-bold mb-8">همه محصولات</h1>
        <ProductFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          categoryFilter={categoryFilter}
          onCategoryChange={handleCategoryChange}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />
        <div className="mt-8">
          <ProductGrid products={sortedProducts} isLoading={isLoading} />
        </div>
      </div>
    </Layout>
  );
};

export default Products;
