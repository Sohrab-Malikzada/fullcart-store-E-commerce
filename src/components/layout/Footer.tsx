import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-serif text-2xl font-bold text-foreground">لوکس</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              مجموعه‌های منتخب محصولات با کیفیت برای سبک زندگی مدرن.
              صنعت‌گری با کیفیت در کنار طراحی معاصر.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="فیسبوک"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="اینستاگرام"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="توییتر"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground font-sans">لینک‌های سریع</h3>
            <ul className="space-y-2">
              {[
                { label: "همه محصولات", href: "/products" },
                { label: "محصولات جدید", href: "/products" },
                { label: "پرفروش‌ترین‌ها", href: "/products" },
                { label: "حراج", href: "/products" },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground font-sans">خدمات مشتریان</h3>
            <ul className="space-y-2">
              {[
                { label: "تماس با ما", href: "#" },
                { label: "ارسال و بازگشت", href: "#" },
                { label: "سوالات متداول", href: "#" },
                { label: "راهنمای اندازه", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground font-sans">تماس با ما</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>خیابان مدیریت ۱۲۳، کابل، افغانستان</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+93 (0) 700-123-456</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>hello@luxestore.com</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} لوکس. تمام حقوق محفوظ است.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">حریم خصوصی</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">شرایط خدمات</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
