
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "How does the AI chatbot work?",
      answer:
        "Our AI chatbot uses natural language processing to understand customer inquiries and provide relevant responses. It learns from your FAQ documents, knowledge base, and past conversations to continuously improve its accuracy. When it encounters a question it can't answer, it smoothly transitions to a human agent.",
    },
    {
      question: "Is it difficult to set up SupportBot on my website?",
      answer:
        "Not at all! Setting up SupportBot takes just minutes. Simply add our snippet of code to your website, or use our WordPress plugin. Our setup wizard will guide you through the process of customizing the bot's appearance and training it with your specific information.",
    },
    {
      question: "Can I integrate with platforms like WhatsApp and Facebook Messenger?",
      answer:
        "Yes! SupportBot offers seamless integration with WhatsApp, Facebook Messenger, Telegram, and other popular messaging platforms. This allows you to provide consistent support across all channels where your customers might reach out.",
    },
    {
      question: "How much time and money can SupportBot save my business?",
      answer:
        "On average, our customers report saving 30+ hours per week and reducing support costs by up to 60%. The bot handles routine inquiries automatically, allowing your team to focus on high-value tasks and complex customer issues that truly require human attention.",
    },
    {
      question: "What happens if the chatbot can't answer a question?",
      answer:
        "When the AI encounters a question it can't answer with high confidence, it automatically initiates a handoff to your human support team. The transition is seamless for customers, and your team receives the full conversation history to provide context.",
    },
    {
      question: "Do I need technical knowledge to train the chatbot?",
      answer:
        "No technical expertise is required. Our user-friendly interface allows you to upload documents, add FAQs, and review the bot's responses. The AI continuously learns from interactions, but you can always customize responses or add new information easily through our dashboard.",
    },
    {
      question: "Is my customer data secure with SupportBot?",
      answer:
        "Absolutely. We take data security very seriously. All conversations are encrypted, and we comply with GDPR, CCPA, and other privacy regulations. You remain the owner of your data, and we never use it to train models for other customers without explicit permission.",
    },
    {
      question: "What's included in the free plan?",
      answer:
        "Our free plan includes website chatbot integration with up to 100 messages per month, basic AI training capabilities, and email support. It's perfect for small businesses just getting started with AI customer support or those who want to try before upgrading.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-16 reveal opacity-0">
          <h2 className="heading-lg mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Got questions? We've got answers. If you don't see what you're looking for,
            reach out to our team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4 reveal opacity-0">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-border rounded-xl overflow-hidden bg-white"
              >
                <button
                  className="flex justify-between items-center w-full p-5 text-left font-medium"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-foreground/70 transition-transform ${
                      openIndex === index ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index ? "max-h-96 pb-5" : "max-h-0"
                  }`}
                >
                  <div className="px-5 text-foreground/70">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center reveal opacity-0">
            <p className="mb-4 text-foreground/70">
              Still have questions? We're here to help.
            </p>
            <a
              href="#"
              className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1"
            >
              <span>Contact our support team</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
