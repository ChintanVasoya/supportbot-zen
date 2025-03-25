
import { useState } from "react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const plans = [
    {
      name: "Free",
      description: "Perfect for trying out our chatbot",
      price: {
        monthly: 0,
        annually: 0,
      },
      features: [
        "Website chatbot integration",
        "100 messages/month",
        "Basic AI training",
        "Email support",
        "1 team member",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      description: "For small businesses ready to grow",
      price: {
        monthly: 19,
        annually: 15,
      },
      features: [
        "Unlimited messages",
        "WhatsApp/Messenger integration",
        "Advanced AI training",
        "Analytics dashboard",
        "Human handoff capability",
        "Priority support",
        "5 team members",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For larger businesses with custom needs",
      price: {
        monthly: null,
        annually: null,
      },
      features: [
        "All Pro features",
        "Custom AI model training",
        "API access for custom integrations",
        "Dedicated account manager",
        "99.9% uptime SLA",
        "Enterprise-grade security",
        "Unlimited team members",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-16 reveal opacity-0">
          <h2 className="heading-lg mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Choose the plan that's right for your business. All plans include a 14-day free trial.
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 inline-flex items-center bg-secondary/80 p-1 rounded-full">
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                isAnnual
                  ? "bg-white text-foreground shadow-sm"
                  : "text-foreground/70 hover:text-foreground"
              }`}
              onClick={() => setIsAnnual(true)}
            >
              Annual (20% off)
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                !isAnnual
                  ? "bg-white text-foreground shadow-sm"
                  : "text-foreground/70 hover:text-foreground"
              }`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`reveal opacity-0 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? "border-2 border-primary/50 relative shadow-lg"
                  : "border border-border bg-white"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-semibold py-1 px-4 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-foreground/70 text-sm mb-5">
                  {plan.description}
                </p>
                <div className="mb-5">
                  {plan.price.monthly === null ? (
                    <div className="text-3xl font-display font-bold">Custom</div>
                  ) : (
                    <>
                      <div className="flex items-center justify-center">
                        <span className="text-3xl font-display font-bold">
                          ${isAnnual ? plan.price.annually : plan.price.monthly}
                        </span>
                        <span className="text-foreground/60 ml-1">/mo</span>
                      </div>
                      {isAnnual && plan.price.annually > 0 && (
                        <div className="text-xs text-foreground/60 mt-1">
                          Billed annually (${plan.price.annually * 12}/year)
                        </div>
                      )}
                    </>
                  )}
                </div>
                <button
                  className={`w-full py-3 px-6 rounded-xl font-medium transition-all ${
                    plan.popular
                      ? "bg-primary text-white hover:bg-primary/90"
                      : "bg-secondary hover:bg-secondary/80 text-foreground"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>

              <div className="space-y-3 mt-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <svg
                      className={`w-5 h-5 flex-shrink-0 ${
                        plan.popular ? "text-primary" : "text-foreground/70"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-foreground/80 text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center reveal opacity-0">
          <p className="text-foreground/70 mb-4">
            Need a custom solution for your business?
          </p>
          <a href="#" className="text-primary hover:text-primary/80 font-medium underline underline-offset-4">
            Contact our sales team
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
