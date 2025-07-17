import ProductCard from "./ProductCard";
import businessCardsImage from "@/assets/business-cards.jpg";
import flyersImage from "@/assets/flyers.jpg";
import postersImage from "@/assets/posters.jpg";
import customPrintsImage from "@/assets/custom-prints.jpg";

const ProductCatalog = () => {
  const products = [
    {
      title: "Business Cards",
      description: "Premium quality business cards that make a lasting impression",
      price: "₹500",
      image: businessCardsImage,
      features: [
        "Premium cardstock (350gsm)",
        "Full color printing",
        "Matt or gloss finish",
        "Standard & custom sizes",
        "Free shipping"
      ],
      whatsappMessage: "Hi! I'm interested in ordering business cards. Could you provide more details about pricing and customization options?"
    },
    {
      title: "Customised Book Labels",
      description: "Customised book labels for your kids",
      price: "₹150",
      image: flyersImage,
      features: [
        "Personalized designs",
        "Durable waterproof material",
        "Multiple size options",
        "Kid-friendly themes",
        "Free shipping"
      ],
      whatsappMessage: "Hi! I'm interested in customised book labels for my kids. Could you provide more details about designs and customization options?"
    },
    {
      title: "Cup Printing Service",
      description: "Custom printed mugs and cups for personal or business use",
      price: "₹350",
      image: postersImage,
      features: [
        "Ceramic and plastic options",
        "Full color printing",
        "Custom designs & logos",
        "Dishwasher safe options",
        "Free shipping"
      ],
      whatsappMessage: "Hello! I'd like to know more about your cup printing services. What types of cups and designs do you offer?"
    },
    {
      title: "12 Portrait Photos",
      description: "High-quality portrait photo printing service",
      price: "₹150",
      image: customPrintsImage,
      features: [
        "Professional photo quality",
        "Multiple size options",
        "Matte or glossy finish",
        "Color correction included",
        "Free shipping"
      ],
      whatsappMessage: "Hi! I need 12 portrait photos printed. Can you help me with sizes and finish options?"
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive range of professional printing services. 
            Each product is crafted with attention to detail and delivered with excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              price={product.price}
              image={product.image}
              features={product.features}
              whatsappMessage={product.whatsappMessage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;