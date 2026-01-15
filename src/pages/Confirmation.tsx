import { Link } from "react-router-dom";
import { CheckCircle, Package, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const Confirmation = () => {
  const orderNumber = `ORD-${Date.now().toString(36).toUpperCase()}`;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 text-center max-w-lg">
        <CheckCircle className="h-20 w-20 mx-auto text-success mb-6" />
        <h1 className="font-serif text-3xl font-bold mb-4">Order Confirmed!</h1>
        <p className="text-muted-foreground mb-6">Thank you for your purchase. Your order has been received and is being processed.</p>
        <div className="bg-card rounded-lg border p-6 mb-8">
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-2"><Package className="h-5 w-5" /><span>Order Number</span></div>
          <p className="text-xl font-bold">{orderNumber}</p>
        </div>
        <p className="text-sm text-muted-foreground mb-8">A confirmation email has been sent to your email address with order details and tracking information.</p>
        <Link to="/products"><Button className="gap-2">Continue Shopping <ArrowRight className="h-4 w-4" /></Button></Link>
      </div>
    </Layout>
  );
};

export default Confirmation;
