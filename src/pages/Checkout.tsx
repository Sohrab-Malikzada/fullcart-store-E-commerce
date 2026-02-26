import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Layout from "@/components/layout/Layout";
import { useCart } from "@/context/CartContext";

const Checkout = () => {
  const navigate = useNavigate();
  const { items, getSubtotal, clearCart } = useCart();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({ name: "", email: "", address: "", city: "", zip: "" });

  const subtotal = getSubtotal();
  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "نام الزامی است";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "ایمیل معتبر الزامی است";
    if (!form.address.trim()) newErrors.address = "آدرس الزامی است";
    if (!form.city.trim()) newErrors.city = "شهر الزامی است";
    if (!form.zip.trim()) newErrors.zip = "کد پستی الزامی است";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      clearCart();
      navigate("/confirmation");
    }
  };

  if (items.length === 0) {
    navigate("/cart");
    return null;
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-serif text-3xl font-bold mb-8">تکمیل خرید</h1>
        <div className="grid lg:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-card rounded-lg border p-6 space-y-4">
              <h2 className="font-semibold text-lg">اطلاعات تماس</h2>
              <div><Label htmlFor="name">نام کامل</Label><Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />{errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}</div>
              <div><Label htmlFor="email">ایمیل</Label><Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />{errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}</div>
            </div>
            <div className="bg-card rounded-lg border p-6 space-y-4">
              <h2 className="font-semibold text-lg">آدرس ارسال</h2>
              <div><Label htmlFor="address">آدرس</Label><Input id="address" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />{errors.address && <p className="text-destructive text-sm mt-1">{errors.address}</p>}</div>
              <div className="grid grid-cols-2 gap-4">
                <div><Label htmlFor="city">شهر</Label><Input id="city" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />{errors.city && <p className="text-destructive text-sm mt-1">{errors.city}</p>}</div>
                <div><Label htmlFor="zip">کد پستی</Label><Input id="zip" value={form.zip} onChange={(e) => setForm({ ...form, zip: e.target.value })} />{errors.zip && <p className="text-destructive text-sm mt-1">{errors.zip}</p>}</div>
              </div>
            </div>
            <Button type="submit" size="lg" className="w-full">ثبت سفارش • ${total.toFixed(2)}</Button>
          </form>
          <div className="bg-card rounded-lg border p-6 h-fit">
            <h2 className="font-semibold text-lg mb-4">خلاصه سفارش</h2>
            {items.map((item) => (
              <div key={item.product.id} className="flex gap-3 py-3 border-b">
                <img src={item.product.image} alt={item.product.name} className="w-16 h-16 object-cover rounded" />
                <div className="flex-1"><p className="font-medium text-sm">{item.product.name}</p><p className="text-muted-foreground text-sm">تعداد: {item.quantity}</p></div>
                <span className="font-medium">${(item.product.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <Separator className="my-4" />
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span>جمع جزئی</span><span>${subtotal.toFixed(2)}</span></div>
              <div className="flex justify-between"><span>ارسال</span><span>{shipping === 0 ? "رایگان" : `$${shipping.toFixed(2)}`}</span></div>
              <div className="flex justify-between"><span>مالیات</span><span>${tax.toFixed(2)}</span></div>
            </div>
            <Separator className="my-4" />
            <div className="flex justify-between font-semibold text-lg"><span>مجموع</span><span>${total.toFixed(2)}</span></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
