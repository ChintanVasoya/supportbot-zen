
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Owner, Bloom Boutique",
      image: "https://i.pravatar.cc/150?img=1",
      quote:
        "SupportBot has completely transformed how we handle customer service. Our response time is down by 80%, and our customers love the instant support.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CEO, TechStart Inc.",
      image: "https://i.pravatar.cc/150?img=8",
      quote:
        "The AI is surprisingly good at understanding complex questions. It's like having a 24/7 support team at a fraction of the cost. Game changer for our startup.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director, GreenLife",
      image: "https://i.pravatar.cc/150?img=5",
      quote:
        "We integrated SupportBot with our WhatsApp and website, and it now handles 70% of inquiries without human intervention. Our team can finally focus on growth.",
      rating: 5,
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Founder, Wilson Consulting",
      image: "https://i.pravatar.cc/150?img=3",
      quote:
        "The analytics dashboard gives us incredible insights into customer needs. We've used this data to improve our products and messaging significantly.",
      rating: 4,
    },
    {
      id: 5,
      name: "Jessica Taylor",
      role: "E-commerce Manager, StyleHouse",
      image: "https://i.pravatar.cc/150?img=6",
      quote:
        "Our sales have increased by 30% since implementing SupportBot. It answers product questions instantly and helps customers complete their purchases.",
      rating: 5,
    },
    {
      id: 6,
      name: "Robert Kim",
      role: "Operations Lead, QuickServe",
      image: "https://i.pravatar.cc/150?img=4",
      quote:
        "The human handoff feature is seamless. The bot handles simple queries and passes complex ones to our team with full context. Brilliant design!",
      rating: 5,
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-yellow-400" : "text-foreground/20"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    ));
  };

  return (
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-16 reveal opacity-0">
          <h2 className="heading-lg mb-4">What Our Customers Say</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Thousands of businesses have transformed their customer support with SupportBot.
            Here's what they have to say.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="reveal opacity-0 bg-white rounded-2xl p-6 shadow-sm border border-border transition-all duration-300 hover:shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="flex">{renderStars(testimonial.rating)}</div>
              </div>
              
              <blockquote className="text-foreground/80 mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-foreground/70">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center reveal opacity-0">
          <div className="inline-block px-8 py-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl">
            <span className="block text-2xl font-semibold mb-2">
              Join 1,000+ satisfied customers
            </span>
            <a href="#" className="btn-primary inline-block">
              Start Your Free Trial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
