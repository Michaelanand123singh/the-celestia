import aboutPhoto from "@/assets/2.png";
import aboutBg from "@/assets/aboutbackground.png";
import bgforabout from "@/assets/bgab.png";
const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 relative overflow-visible"
      style={{
        backgroundColor: "#FFF4E1",
      }}
    >
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgforabout})`,
        }}
      ></div>

      {/* Beautiful Regular Curve - Left Side Only - Extends into ServicesSection */}
      <div 
        className="absolute pointer-events-none"
        style={{
          bottom: '-150px',
          left: '-10px',
          width: '35%',
          height: '600px',
          zIndex: 1,
        }}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 500 600"
          preserveAspectRatio="none"
        >
          {/* Beautiful regular elegant curve shape */}
          <path
            d="M0,250 
               C50,150 100,100 180,120 
               C260,140 320,200 350,280 
               C380,360 360,440 300,500 
               C240,560 160,580 80,590 
               C40,595 0,580 0,560 
               L0,500 
               L0,400 
               L0,300 
               L0,250 
               Z"
            fill="#B48B80"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Decorative Border - Right Bottom and Bottom */}
      <div 
        className="absolute pointer-events-none"
        style={{
          bottom: 0,
          right: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
        }}
      >
        {/* Bottom border line */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '4px',
            backgroundColor: '#B48B80',
          }}
        />
        {/* Right border line */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '4px',
            height: '750px',
            backgroundColor: '#B48B80',
          }}
        />
        {/* Right-bottom corner decorative curve */}
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          style={{ 
            position: 'absolute', 
            bottom: 0, 
            right: 0,
            transform: 'translate(0, 0)'
          }}
        >
          <path
            d="M80,80 L80,60 Q80,40 60,40 L40,40"
            fill="none"
            stroke="#B48B80"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Content Layer */}
      <div className="container mx-auto px-28 relative z-20">
        <div className="relative grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative flex justify-start">
            <img
              src={aboutPhoto}
              alt="The Soul Behind Righttsign Tarot"
              className="w-[420px] h-auto object-cover rounded-[40px] image-shimmer"
            />
          </div>

          {/* Right - Text Content */}
          <div className="relative flex flex-col justify-center md:-ml-32 z-10">
            {/* Headings */}
            <div className="absolute -top-16 md:-top-10">
              {/* h2 with Waterfall font */}
              <h2 className="font-serif text-[50px] font-700 md:text-[45px] text-[#3A1D0F] leading-tight drop-shadow-sm relative -left-14 md:-left-[210px] "
              >
                The Soul Behind Righttsign Tarot
              </h2>

              <h3
                className="text-3xl md:text-4xl font-extrabold text-[#A37F76] mt-2 relative -left-10 md:-left-16 text-shimmer-white font-waterfall"
                
              >
                Empowered Living
              </h3>
            </div>

            {/* Rest text */}
            <div className="font-arial  text-[#5C4330] leading-relaxed pt-24  text-[17px] relative -left-10 md:-left-16 text-justify">
              <p>
                With over 12 years of experience, I guide individuals toward
                holistic well-being through RighttsignTarot, blending ancient
                wisdom with modern insights to create a sacred space for
                transformation and self-discovery. My purpose is to help you
                awaken your inner light, embrace your true potential, and find
                balance with compassion and clarity.
              </p>

              <p>
                Beyond readings, my mission is to cultivate a community of
                conscious living—where peace, purpose, and spiritual harmony
                flourish, empowering each soul to heal, grow, and reconnect with
                their spiritual essence.
              </p>
<div className=" w-fit bg-[#a37f76ad] backdrop-blur-sm  rounded-lg border-shimmer bg-shimmer-white mt-4"> 
<span className=" font-waterfall text-[30px]  px-4 font-[800]  ">
              "In every Soul lies an Untamed Light, waiting to be Rediscovered and Amplified."
              </span>
             
              
</div>
<span
            className="flex items-center font-serif font-[800] pl-48 text-[16px]"
            
          >
              <span className="text-[20px]">—</span>
              <span className="">TheCelestiaStudio</span>
              </span>

             
            </div>
          </div>
        </div>
      </div>

      {/* Golden Particles */}
      <div className="golden-particle golden-particle-medium" style={{ top: "10%", right: "8%", animationDelay: "0s" }}></div>
      <div className="golden-particle golden-particle-small golden-particle-float" style={{ top: "30%", left: "3%", animationDelay: "1.5s" }}></div>
      <div className="golden-particle golden-particle-small golden-particle-drift" style={{ bottom: "15%", right: "12%", animationDelay: "2s" }}></div>
      <div className="golden-particle golden-particle-small" style={{ top: "40%", left: "8%", animationDelay: "0.8s" }}></div>
      <div className="golden-particle golden-particle-medium" style={{ bottom: "25%", left: "5%", animationDelay: "1.2s" }}></div>
      
      {/* Keep one star for variety */}
      <div className="golden-star golden-star-large" style={{ top: "60%", left: "2%", animationDelay: "0.5s" }}>
        <svg viewBox="0 0 24 24">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      </div>
    </section>
  );
};

export default AboutSection;
