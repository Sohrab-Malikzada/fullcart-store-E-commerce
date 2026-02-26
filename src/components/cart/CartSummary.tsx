import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/CartContext";

const CartSummary = () => {
  const { items, getSubtotal } = useCart();
  const subtotal = getSubtotal();
  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-card rounded-lg border p-6 sticky top-24">
      <h2 className="font-serif text-xl font-semibold mb-4">خلاصه سفارش</h2>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">
            جمع جزئی ({items.length} {items.length === 1 ? "محصول" : "محصول"})
          </span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">ارسال</span>
          <span className="font-medium">
            {shipping === 0 ? <span className="text-success">رایگان</span> : `$${shipping.toFixed(2)}`}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">مالیات تخمینی</span>
          <span className="font-medium">${tax.toFixed(2)}</span>
        </div>
        {subtotal < 100 && (
          <p className="text-xs text-muted-foreground bg-secondary/50 p-2 rounded">
            ${(100 - subtotal).toFixed(2)} دیگر اضافه کنید تا ارسال رایگان شود!
          </p>
        )}
      </div>

      <Separator className="my-4" />

      <div className="flex justify-between text-lg font-semibold mb-6">
        <span>مجموع</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <Link to="/checkout" className="block">
        <Button className="w-full gap-2" size="lg" disabled={items.length === 0}>
          ادامه به تکمیل خرید
          <ArrowLeft className="h-4 w-4" />
        </Button>
      </Link>

      <p className="text-xs text-center text-muted-foreground mt-4">
        پرداخت امن با رمزنگاری پیشرفته
      </p>
    </div>
  );
};

export default CartSummary;
