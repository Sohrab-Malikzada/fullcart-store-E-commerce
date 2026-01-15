import { useParams, Link } from "react-router-dom";
import { ShoppingBag, Heart, Star, Truck, Shield, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Layout from "@/components/layout/Layout";
import { useProduct } from "@/hooks/useProducts";
import { useCart } from "@/context/CartContext";
import { Skeleton } from "@/components/ui/skeleton";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product, isLoading } = useProduct(id || "");
  const { addItem, isInCart } = useCart();

  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Skeleton className="aspect-square rounded-lg" />
            <div className="space-y-4"><Skeleton className="h-8 w-3/4" /><Skeleton className="h-6 w-1/4" /><Skeleton className="h-24 w-full" /></div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!product) {
    return <Layout><div className="container mx-auto px-4 py-16 text-center"><h1 className="text-2xl font-bold">Product not found</h1><Link to="/products"><Button className="mt-4">Back to Shop</Button></Link></div></Layout>;
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="aspect-square rounded-lg overflow-hidden bg-secondary">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">{product.category.replace("-", " ")}</p>
            <h1 className="font-serif text-3xl font-bold mb-4">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <Star className="h-5 w-5 fill-primary text-primary" />
              <span className="font-medium">{product.rating}</span>
              <span className="text-muted-foreground">({product.reviewCount} reviews)</span>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
              {product.originalPrice && <span className="text-xl text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>}
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>
            <div className="mb-6">
              {product.inStock ? <Badge variant="secondary" className="bg-success/10 text-success">In Stock ({product.stockCount})</Badge> : <Badge variant="destructive">Out of Stock</Badge>}
            </div>
            <div className="flex gap-4 mb-8">
              <Button size="lg" className="flex-1 gap-2" disabled={!product.inStock || isInCart(product.id)} onClick={() => addItem(product)}>
                <ShoppingBag className="h-5 w-5" />{isInCart(product.id) ? "In Cart" : "Add to Cart"}
              </Button>
              <Button size="lg" variant="outline"><Heart className="h-5 w-5" /></Button>
            </div>
            <Separator className="my-6" />
            <div className="grid grid-cols-3 gap-4 text-center text-sm">
              <div className="flex flex-col items-center gap-2"><Truck className="h-5 w-5 text-muted-foreground" /><span>Free Shipping</span></div>
              <div className="flex flex-col items-center gap-2"><Shield className="h-5 w-5 text-muted-foreground" /><span>2 Year Warranty</span></div>
              <div className="flex flex-col items-center gap-2"><RotateCcw className="h-5 w-5 text-muted-foreground" /><span>30 Day Returns</span></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
