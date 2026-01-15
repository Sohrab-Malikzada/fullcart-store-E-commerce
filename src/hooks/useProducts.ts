import { useQuery } from "@tanstack/react-query";
import {
  products,
  categories,
  getProductById,
  getProductsByCategory,
  getFeaturedProducts,
  searchProducts,
  type Product,
  type Category,
} from "@/data/products";

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const useProducts = (categoryFilter?: string, searchQuery?: string) => {
  return useQuery({
    queryKey: ["products", categoryFilter, searchQuery],
    queryFn: async (): Promise<Product[]> => {
      await delay(300); // Simulate network delay
      
      let result = [...products];
      
      if (categoryFilter && categoryFilter !== "all") {
        result = getProductsByCategory(categoryFilter);
      }
      
      if (searchQuery) {
        result = searchProducts(searchQuery);
        if (categoryFilter && categoryFilter !== "all") {
          result = result.filter((p) => p.category === categoryFilter);
        }
      }
      
      return result;
    },
  });
};

export const useProduct = (id: string) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: async (): Promise<Product | undefined> => {
      await delay(200);
      return getProductById(id);
    },
    enabled: !!id,
  });
};

export const useFeaturedProducts = () => {
  return useQuery({
    queryKey: ["featuredProducts"],
    queryFn: async (): Promise<Product[]> => {
      await delay(300);
      return getFeaturedProducts();
    },
  });
};

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async (): Promise<Category[]> => {
      await delay(200);
      return categories;
    },
  });
};
