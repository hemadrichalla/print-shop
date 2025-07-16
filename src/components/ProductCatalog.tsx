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
      price: "$15.99",
      image: businessCardsImage,
      features: [
        "Premium cardstock (350gsm)",
        "Full color printing",
        "Matt or gloss finish",
        "Standard & custom sizes",
        "Fast 24-48h turnaround"
      ],
      whatsappMessage: "Hi! I'm interested in ordering business cards. Could you provide more details about pricing and customization options?"
    },
    {
      title: "Flyers & Brochures",
      description: "Eye-catching marketing materials to promote your business",
      price: "$25.99",
      image: flyersImage,
      features: [
        "A4, A5, A6 sizes available",
        "High-quality paper options",
        "Single or double-sided",
        "Custom design service",
        "Bulk discounts available"
      ],
      whatsappMessage: "Hello! I'd like to know more about your flyer printing services and design options. What packages do you offer?"
    },
    {
      title: "Posters & Banners",
      description: "Large format printing for maximum impact and visibility",
      price: "$45.99",
      image: postersImage,
      features: [
        "Multiple sizes up to A0",
        "Indoor & outdoor materials",
        "Weather-resistant options",
        "Easy hanging solutions",
        "Professional installation"
      ],
      whatsappMessage: "Hi there! I need information about poster and banner printing. What sizes and materials do you have available?"
    },
    {
      title: "Custom Prints",
      description: "Specialized printing solutions for unique requirements",
      price: "$19.99",
      image: customPrintsImage,
      features: [
        "Stickers & labels",
        "Canvas prints",
        "Photo printing",
        "Specialty materials",
        "Variable data printing"
      ],
      whatsappMessage: "Hello! I'm looking for custom printing solutions. Can we discuss my specific requirements and get a quote?"
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