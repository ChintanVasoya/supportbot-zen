
const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Train Your AI Chatbot",
      description:
        "Upload FAQs, add custom responses, and let the AI learn from your business data to provide accurate customer support.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
        </svg>
      ),
    },
    {
      id: 2,
      title: "Integrate with Your Platforms",
      description:
        "Seamlessly connect with your website, WhatsApp, Messenger, and Telegram to provide omnichannel customer support.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
    },
    {
      id: 3,
      title: "Automate & Monitor",
      description:
        "Let AI handle routine queries while you focus on your business. Monitor performance and step in when human assistance is needed.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-16 reveal opacity-0">
          <h2 className="heading-lg mb-4">How It Works</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Get up and running with our AI chatbot in three simple steps. 
            No technical expertise required.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="reveal opacity-0 glass-card rounded-2xl p-8 relative overflow-hidden group transition-all duration-300 hover:shadow-lg"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/5 rounded-full flex items-end justify-end pb-1 pr-1">
                <span className="text-primary/70 font-display font-bold text-xl">
                  {step.id}
                </span>
              </div>

              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {step.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-foreground/70">{step.description}</p>
              
              {/* Arrow connector for desktop */}
              {step.id !== 3 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-primary/30">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
