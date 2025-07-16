import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const handleContactWhatsApp = () => {
    window.open("https://wa.me/918332020488?text=Hello! I'm interested in your printing services.", "_blank");
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Professional
          <span className="block bg-gradient-accent bg-clip-text text-transparent">
            Printing Services
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
          High-quality business cards, flyers, posters, and custom prints. 
          Fast turnaround, competitive prices, exceptional quality.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="accent" 
            size="lg" 
            onClick={handleContactWhatsApp}
            className="text-lg px-8 py-6 animate-scale-in"
          >
            <MessageCircle className="mr-2" />
            Get Quote on WhatsApp
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary animate-scale-in"
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Products
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;