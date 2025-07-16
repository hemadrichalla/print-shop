import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-card">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-primary">PRINT-SHOP</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground hover:text-accent transition-colors">Home</a>
          <a href="#products" className="text-foreground hover:text-accent transition-colors">Products</a>
          <a href="#testimonials" className="text-foreground hover:text-accent transition-colors">Reviews</a>
          <a href="#contact" className="text-foreground hover:text-accent transition-colors">Contact</a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu />
          </Button>
          <Button variant="outline" size="icon">
            <ShoppingCart />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;