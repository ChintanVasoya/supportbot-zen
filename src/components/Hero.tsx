
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-background to-background -z-10"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full filter blur-3xl -z-10"></div>
      
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className={`${isVisible ? 'animate-fade-up' : 'opacity-0'} transition-all duration-1000`}>
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary font-medium text-sm">
              AI-Powered Customer Support
            </div>
            <h1 className="heading-xl mb-6">
              AI-Powered Chatbot to Automate Your Customer Support
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed max-w-xl">
              Save time, boost sales, and improve customer satisfaction with our 
              AI-driven chatbot for small businesses.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="#" className="btn-primary text-center">
                Get Started for Free
              </a>
              <a href="#demo" className="btn-secondary text-center flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                </svg>
                Watch Demo
              </a>
            </div>
            
            {/* Social Proof */}
            <div className="text-sm text-foreground/60">
              <p className="mb-2 font-medium">Trusted by 1,000+ businesses</p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center border border-white">
                      <span className="text-xs font-medium">C{i}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                  <span className="ml-1">4.9/5</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className={`${isVisible ? 'animate-fade-in delay-300' : 'opacity-0'} transition-all duration-1000`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent rounded-full filter blur-3xl -z-10"></div>
              
              {/* Main Illustration */}
              <div className="relative glass-card rounded-2xl overflow-hidden p-6">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">SupportBot</h3>
                      <div className="flex items-center text-xs text-foreground/60">
                        <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-1"></span>
                        Online
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex-shrink-0"></div>
                      <div className="bg-secondary rounded-xl rounded-tl-none p-3 text-sm max-w-[80%]">
                        Hello! How can I help you today?
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2 justify-end">
                      <div className="bg-primary/10 rounded-xl rounded-tr-none p-3 text-sm max-w-[80%]">
                        I need help with my recent order.
                      </div>
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex-shrink-0"></div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex-shrink-0"></div>
                      <div className="bg-secondary rounded-xl rounded-tl-none p-3 text-sm max-w-[80%]">
                        I'd be happy to help with your order! Could you provide your order number?
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-xs text-foreground/60 mt-1 ml-10">
                      <span className="animate-pulse-slow">Typing</span>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <input 
                      type="text" 
                      className="w-full p-3 pr-10 rounded-xl border border-border bg-background text-sm" 
                      placeholder="Type your message..."
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-primary">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-16 h-16 glass-card rounded-lg rotate-12 animate-float shadow-xl">
                <div className="flex items-center justify-center h-full text-primary">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                  </svg>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-16 h-16 glass-card rounded-lg -rotate-12 animate-float shadow-xl delay-500">
                <div className="flex items-center justify-center h-full text-accent">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
