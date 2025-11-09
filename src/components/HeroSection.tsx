import heroPortrait from "@/assets/hero-portrait.png";
import herobg from "@/assets/image 3.png";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20"
      style={{ backgroundColor: "#FFF4E1" }}
      id="home"
    >
      {/* BG IMAGE LAYER */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${herobg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>

      {/* LEFT CONTENT */}
      <div className="container mx-auto px-6 grid md:grid-cols-2 items-center relative z-30">
        <div className="space-y-3 md:pl-10 lg:pl-6">
          <h1
            className="text-[46px] sm:text-[52px] md:text-[60px] lg:text-[70px] font-serif font-bold leading-none"
            style={{
              lineHeight: "1.1",
              letterSpacing: "-0.5px",
              whiteSpace: "nowrap",
              color: "#5B4033",
            }}
          >
            Meet Sunita Ramrakhiyani
          </h1>

          <p
            className="text-[20px] pt-12 md:text-[22px] flex items-center gap-3"
            style={{ color: "#7A5D4C" }}
          >
            <span className="text-[28px]">—</span>
            <span className="font-medium">Righttsign Tarot</span>
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
    </section>
  );
};

export default HeroSection;
