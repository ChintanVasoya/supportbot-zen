
const Features = () => {
  const features = [
    {
      id: 1,
      title: "24/7 Customer Support Automation",
      description:
        "Our AI chatbot works around the clock, answering customer questions instantly, no matter the time of day.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
    },
    {
      id: 2,
      title: "Multi-Platform Integration",
      description:
        "Seamlessly connect with WhatsApp, Messenger, Telegram, and your website to provide support wherever your customers are.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
    },
    {
      id: 3,
      title: "Live Chat with Human Handoff",
      description:
        "For complex issues, the AI knows when to bring in human support, ensuring no customer query goes unanswered.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
        </svg>
      ),
    },
    {
      id: 4,
      title: "AI-Powered Lead Generation & CRM",
      description:
        "Automatically qualify leads, collect customer information, and sync with your CRM to boost sales efficiency.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
        </svg>
      ),
    },
    {
      id: 5,
      title: "Analytics Dashboard",
      description:
        "Gain insights into customer inquiries, response times, satisfaction ratings, and conversion metrics.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
        </svg>
      ),
    },
    {
      id: 6,
      title: "Custom Training & Learning",
      description:
        "The more your chatbot interacts with customers, the smarter it gets, providing increasingly personalized support.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-16 reveal opacity-0">
          <h2 className="heading-lg mb-4">Features & Benefits</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Everything you need to transform your customer support experience 
            and drive business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="reveal opacity-0 bg-white border border-border rounded-2xl p-6 transition-all duration-300 hover:shadow-md hover:border-primary/20"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Feature Highlight Banner */}
        <div className="mt-16 reveal opacity-0">
          <div className="bg-gradient-to-r from-primary/90 to-accent/90 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to 
                revolutionize your customer support?</h3>
                <p className="mb-6 text-white/90">
                  Join thousands of businesses that are saving time, reducing costs, 
                  and improving customer satisfaction with our AI chatbot.
                </p>
                <a href="#" className="inline-block px-6 py-3 bg-white text-primary font-medium rounded-full hover:bg-white/90 transition-colors">
                  Get Started Today
                </a>
              </div>
              <div className="flex justify-center md:justify-end">
                <div className="relative">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-white/20 rounded-full absolute top-0 right-0 animate-pulse-slow"></div>
                  <div className="w-40 h-40 md:w-56 md:h-56 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center relative z-10">
                    <div className="text-center">
                      <div className="font-display font-bold text-3xl md:text-5xl">97%</div>
                      <div className="text-sm md:text-base mt-1">Customer Satisfaction</div>
                    </div>
                  </div>
                  <div className="w-20 h-20 md:w-28 md:h-28 bg-white/20 rounded-full absolute bottom-0 left-0 animate-pulse-slow delay-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
