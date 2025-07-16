import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Star } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  features: string[];
  whatsappMessage: string;
}

const ProductCard = ({ title, description, price, image, features, whatsappMessage }: ProductCardProps) => {
  const handleOrderNow = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/918332020488?text=${encodedMessage}`, "_blank");
  };

  return (
    <Card className="h-full transition-all duration-300 hover:shadow-hover hover:scale-105 animate-slide-up">
      <div className="aspect-video overflow-hidden rounded-t-lg">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold text-primary">{title}</CardTitle>
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <ul className="space-y-2 mb-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-accent rounded-full mr-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        
        <div className="text-3xl font-bold text-primary">
          {price}
          <span className="text-sm text-muted-foreground font-normal ml-1">starting from</span>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button 
          variant="whatsapp" 
          className="w-full text-lg py-6"
          onClick={handleOrderNow}
        >
          <MessageCircle className="mr-2" />
          Order Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;