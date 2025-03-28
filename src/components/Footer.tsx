
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", url: "#features" },
        { name: "Pricing", url: "#pricing" },
        { name: "Demo", url: "#demo" },
        { name: "Integrations", url: "#" },
        { name: "API", url: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", url: "#" },
        { name: "Blog", url: "#" },
        { name: "Careers", url: "#" },
        { name: "Press", url: "#" },
        { name: "Partners", url: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", url: "#" },
        { name: "Guides", url: "#" },
        { name: "Help Center", url: "#" },
        { name: "Community", url: "#" },
        { name: "Webinars", url: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", url: "#" },
        { name: "Terms of Service", url: "#" },
        { name: "Cookie Policy", url: "#" },
        { name: "GDPR", url: "#" },
        { name: "Security", url: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-secondary/70 pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-sm">SB</span>
              </div>
              <span className="font-display font-bold text-xl">SupportBot</span>
            </a>
            <p className="text-foreground/70 mb-5 max-w-sm">
              AI-powered customer support for small businesses. Save time, 
              boost sales, and improve customer satisfaction.
            </p>
            
            <div className="flex space-x-4 mb-8">
              <a href="#" className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/70 hover:bg-primary/10 hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/70 hover:bg-primary/10 hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/70 hover:bg-primary/10 hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/70 hover:bg-primary/10 hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"></path>
                </svg>
              </a>
            </div>
            
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <h4 className="font-medium mb-2">Subscribe to our newsletter</h4>
              <p className="text-sm text-foreground/70 mb-3">
                Get the latest updates, articles, and resources.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 p-2 border border-border rounded-l-lg focus:outline-none focus:ring-1 focus:ring-primary/30"
                />
                <button
                  type="submit"
                  className="bg-primary text-white px-4 py-2 rounded-r-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          
          {footerLinks.map((column, i) => (
            <div key={i}>
              <h4 className="font-semibold mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href={link.url}
                      className="text-foreground/70 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-foreground/60 text-sm mb-4 md:mb-0">
              © {currentYear} SupportBot Inc. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-foreground/60">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
