import { Instagram, Linkedin, Mail } from "lucide-react";
import tarotCards from "@/assets/tarot-cards.jpg";
import bg3 from "@/assets/bg3.png";
import vectorImage from "@/assets/Vector.png";
const ContactSection = () => {
  return (
    <section 
      id="contacts" 
      className="py-12 sm:py-16 md:py-20 relative overflow-hidden min-h-auto md:min-h-screen flex items-center"
      style={{ backgroundColor: "#FFF4E1" }}
    >
      {/* Vector Background Image */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url(${vectorImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 1,
        }}
      ></div>

      {/* <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg3})`,
        }}
      ></div> */}

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left - Contact Info */}
          <div className="space-y-8 sm:space-y-10 md:space-y-12 order-2 md:order-1">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-script text-foreground text-shimmer text-center md:text-left">
                Connect With Me
              </h2>
              
              <div className="space-y-2 sm:space-y-3 text-center md:text-left">
                <h3 className="text-xl sm:text-2xl font-serif text-foreground glow-shimmer">
                  Sunita Ramrakhiyani
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground italic glow-shimmer hover-shimmer relative overflow-hidden cursor-pointer transition-all duration-300 hover:text-[#FFD700]">
                  The Light Behind Righttsign Tarot
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-6">
                <a 
                  href="tel:+919016675446"
                  className="block text-lg sm:text-xl font-medium text-foreground hover:text-[#FFD700] transition-colors hover-shimmer glow-shimmer relative overflow-hidden cursor-pointer text-center md:text-left"
                >
                  +91 9016675446
                </a>
                
                <a 
                  href="https://instagram.com/RighttsignTarot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-lg sm:text-xl font-medium text-foreground hover:text-[#FFD700] transition-colors hover-shimmer glow-shimmer relative overflow-hidden cursor-pointer text-center md:text-left"
                >
                  @RighttsignTarot
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 sm:gap-6 pt-4 sm:pt-6 justify-center md:justify-start">
              <a 
                href="https://instagram.com/RighttsignTarot"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-foreground/10 hover:bg-primary/30 flex items-center justify-center transition-colors hover-shimmer glow-shimmer relative overflow-hidden"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-foreground relative z-10" />
              </a>
              <a 
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-foreground/10 hover:bg-primary/30 flex items-center justify-center transition-colors hover-shimmer glow-shimmer relative overflow-hidden"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-foreground relative z-10" />
              </a>
              <a 
                href="mailto:contact@righttsigntarot.com"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-foreground/10 hover:bg-primary/30 flex items-center justify-center transition-colors hover-shimmer glow-shimmer relative overflow-hidden"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-foreground relative z-10" />
              </a>
            </div>

            <p className="text-xs sm:text-sm pt-6 sm:pt-8 font-bold text-center md:text-left" style={{ color: "#FFF4E1" }}>
              Righttsign © 2025 - 2026
            </p>
          </div>

          {/* Right - Tarot Cards Image */}
          <div className="relative flex justify-center md:justify-end order-1 md:order-2">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden w-full max-w-full sm:max-w-md shadow-2xl golden-border-solid p-2">
              <img 
                src={tarotCards}
                alt="Tarot Cards and Oracle Deck"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-2xl sm:rounded-3xl"
              />
            </div>

            {/* Decorative bird element */}
            <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 opacity-20 hidden md:block">
              <svg width="80" height="80" className="sm:w-[120px] sm:h-[120px]" viewBox="0 0 120 120" fill="none">
                <path d="M60 20 L70 45 L95 50 L77.5 67.5 L82 92 L60 80 L38 92 L42.5 67.5 L25 50 L50 45 Z" fill="currentColor" className="text-warm-cream"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative leaves */}
      <div className="absolute bottom-0 right-0 opacity-10">
        <svg width="200" height="150" viewBox="0 0 200 150" fill="none">
          <path d="M100 10C100 10 120 30 130 60C140 90 130 120 130 120C130 120 110 100 100 70C90 40 100 10 100 10Z" fill="currentColor" className="text-mauve"/>
          <path d="M150 30C150 30 165 45 170 70C175 95 168 115 168 115C168 115 153 100 148 75C143 50 150 30 150 30Z" fill="currentColor" className="text-primary"/>
        </svg>
      </div>

      {/* Golden Particles */}
      <div className="golden-particle golden-particle-large" style={{ top: "15%", left: "5%", animationDelay: "0s" }}></div>
      <div className="golden-particle golden-particle-medium golden-particle-float" style={{ top: "30%", right: "8%", animationDelay: "2s" }}></div>
      <div className="golden-particle golden-particle-small golden-particle-drift" style={{ bottom: "25%", left: "10%", animationDelay: "1.5s" }}></div>
      <div className="golden-particle golden-particle-medium" style={{ top: "50%", right: "12%", animationDelay: "0.6s" }}></div>
      <div className="golden-particle golden-particle-small" style={{ bottom: "15%", right: "5%", animationDelay: "1.8s" }}></div>
      <div className="golden-particle golden-particle-small" style={{ top: "40%", left: "8%", animationDelay: "1s" }}></div>
      <div className="golden-particle golden-particle-small" style={{ bottom: "35%", right: "20%", animationDelay: "2.5s" }}></div>
    </section>
  );
};

export default ContactSection;
