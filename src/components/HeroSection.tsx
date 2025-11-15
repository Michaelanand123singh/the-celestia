import heroPortrait from "@/assets/hero-portrait.png";
import herobg from "@/assets/image 3.png";
import bglotus from "@/assets/bglotus.png";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20"
      style={{ backgroundColor: "#FFF4E1" }}
      id="home"
    >
      {/* BG IMAGE LAYER */}
      {/* <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bglotus})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div> */}

      {/* LEFT CONTENT */}
      <div className="container mx-auto px-6 grid md:grid-cols-2 items-center relative z-30 ">
        <div className="space-y-3 md:pl-10 lg:pl-6 font-semibold">
          <h1
            className="text-[46px] sm:text-[52px] md:text-[60px] lg:text-[70px] font-serif font-bold leading-none text-shimmer-white"
            style={{
              lineHeight: "1.1",
              letterSpacing: "-0.5px",
              whiteSpace: "nowrap",
            }}
          >
            Meet Sunita Ramrakhiyani
          </h1>

          <p
            className="text-[50px]  md:text-[52px] flex items-center gap-3 glow-shimmer font-waterfall "
            style={{ color: "#7A5D4C" }}
          >
            <span className="text-[28px]">—</span>
            <span className="font-medium">The Light Behind Righttsign Tarot</span>
          </p>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div
        className="absolute bottom-[-150px] flex items-end z-20"
        style={{
          right: 132, // keep image contained inside viewport
        }}
      >
        <img
          src={heroPortrait}
          alt="Sunita Ramrakhiyani - Righttsign Tarot"
          className="max-h-[140vh] object-contain"
          style={{
            transform: "translateX(10%)", // moves image slightly outside section visually
          }}
        />
      </div>

      {/* Golden Particles */}
      <div className="golden-particle golden-particle-small golden-particle-float" style={{ top: "15%", left: "10%", animationDelay: "0s" }}></div>
      <div className="golden-particle golden-particle-medium" style={{ top: "25%", right: "15%", animationDelay: "1s" }}></div>
      <div className="golden-particle golden-particle-small golden-particle-drift" style={{ bottom: "20%", left: "5%", animationDelay: "2s" }}></div>
      <div className="golden-particle golden-particle-small" style={{ top: "50%", right: "8%", animationDelay: "1.5s" }}></div>
      <div className="golden-particle golden-particle-small golden-particle-float" style={{ top: "30%", left: "20%", animationDelay: "3s" }}></div>
      <div className="golden-particle golden-particle-medium" style={{ bottom: "30%", right: "25%", animationDelay: "2.5s" }}></div>
      
      {/* Keep one star for variety */}
      <div className="golden-star golden-star-medium golden-star-float" style={{ top: "60%", right: "12%" }}>
        <svg viewBox="0 0 24 24">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
