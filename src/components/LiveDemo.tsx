
import ChatDemo from "./ChatDemo";

const LiveDemo = () => {
  return (
    <section id="demo" className="py-20 md:py-28 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container">
        <div className="text-center mb-16 reveal opacity-0">
          <h2 className="heading-lg mb-4">Try It Yourself</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Experience our AI chatbot in action. Ask questions about features, pricing, 
            or how it works.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal opacity-0">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 md:p-8 rounded-2xl border border-primary/10">
              <h3 className="heading-md mb-6">See SupportBot in Action</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">24/7 Availability</h4>
                    <p className="text-foreground/70">
                      Our chatbot never sleeps, ensuring your customers get instant responses at any time.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Intelligent Responses</h4>
                    <p className="text-foreground/70">
                      Powered by advanced AI to understand context and provide accurate, helpful answers.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Human Handoff</h4>
                    <p className="text-foreground/70">
                      When needed, the bot seamlessly transfers complex conversations to your support team.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <a href="#" className="btn-primary w-full text-center">
                  Get Your Own Bot
                </a>
              </div>
            </div>
          </div>
          
          <div className="reveal opacity-0">
            <ChatDemo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;
