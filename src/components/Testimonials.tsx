import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      business: "Johnson & Co Marketing",
      rating: 5,
      text: "PRINT-SHOP delivered exceptional quality business cards for our company. The attention to detail and fast turnaround time exceeded our expectations!",
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      business: "TechStart Solutions",
      rating: 5,
      text: "Outstanding service! Their poster printing quality is top-notch, and the WhatsApp ordering process made everything so convenient.",
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      business: "Creative Design Studio",
      rating: 5,
      text: "We've been using PRINT-SHOP for all our client materials. Professional quality, competitive prices, and excellent customer service every time.",
      avatar: "ER"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. See what our satisfied customers have to say about our printing services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full transition-all duration-300 hover:shadow-hover animate-slide-up">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-accent mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <p className="text-foreground mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;