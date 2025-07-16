import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const handleWhatsAppContact = () => {
    window.open("https://wa.me/1234567890?text=Hello! I'd like to learn more about your printing services.", "_blank");
  };

  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-4">PRINT-SHOP</h3>
            <p className="text-primary-foreground/80 mb-6 text-lg leading-relaxed">
              Your trusted partner for all printing needs. We deliver high-quality prints with fast turnaround times and competitive prices. From business cards to large format banners, we've got you covered.
            </p>
            <Button 
              variant="accent" 
              size="lg"
              onClick={handleWhatsAppContact}
              className="mb-4"
            >
              <MessageCircle className="mr-2" />
              Contact Us on WhatsApp
            </Button>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-accent" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-accent" />
                <span>info@printshop.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-accent mt-1" />
                <span>123 Print Street<br />Design City, DC 12345</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li className="hover:text-accent transition-colors cursor-pointer">Business Cards</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Flyers & Brochures</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Posters & Banners</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Custom Prints</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Design Services</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Rush Orders</li>
            </ul>
          </div>
        </div>
        
        {/* Social Media & Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-primary-foreground/60">
                © 2024 PRINT-SHOP. All rights reserved.
              </p>
              <p className="text-sm text-primary-foreground/60 mt-1">
                Quality printing, delivered with excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;