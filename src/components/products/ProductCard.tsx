import { Link } from "react-router-dom";
import { ShoppingBag, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const categoryNames: Record<string, string> = {
  electronics: "الکترونیک",
  clothing: "پوشاک",
  "home-living": "خانه و زندگی",
  accessories: "لوازم جانبی",
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem, isInCart } = useCart();
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercent = hasDiscount
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)
    : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (product.inStock) {
      addItem(product);
    }
  };

  return (
    <Card className="group overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300">
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-square overflow-hidden bg-secondary">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            {hasDiscount && (
              <Badge variant="destructive" className="font-medium">
                -{discountPercent}%
              </Badge>
            )}
            {!product.inStock && (
              <Badge variant="secondary" className="bg-foreground/80 text-background">
                ناموجود
              </Badge>
            )}
          </div>

          <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              size="icon"
              variant="secondary"
              className="h-9 w-9 rounded-full shadow-md"
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
            >
              <Heart className="h-4 w-4" />
            </Button>
          </div>

          <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <Button
              className="w-full gap-2 shadow-lg"
              disabled={!product.inStock || isInCart(product.id)}
              onClick={handleAddToCart}
            >
              <ShoppingBag className="h-4 w-4" />
              {isInCart(product.id) ? "در سبد خرید" : "افزودن به سبد"}
            </Button>
          </div>
        </div>

        <CardContent className="p-4">
          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
            {categoryNames[product.category] || product.category}
          </p>
          <h3 className="font-medium text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors font-sans">
            {product.name}
          </h3>
          <div className="flex items-center gap-1 mb-2">
            <Star className="h-3.5 w-3.5 fill-primary text-primary" />
            <span className="text-sm font-medium">{product.rating}</span>
            <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-foreground">${product.price.toFixed(2)}</span>
            {hasDiscount && (
              <span className="text-sm text-muted-foreground line-through">${product.originalPrice!.toFixed(2)}</span>
            )}
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default ProductCard;
