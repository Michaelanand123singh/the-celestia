import aboutPhoto from "@/assets/2.png";
import aboutBg from "@/assets/aboutbackground.png";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 relative overflow-hidden"
      style={{
        backgroundColor: "#FFF4E1",
      }}
    >
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${aboutBg})`,
        }}
      ></div>

      {/* Content Layer */}
      <div className="container mx-auto px-28 relative z-20">
        <div className="relative grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative flex justify-start">
            <img
              src={aboutPhoto}
              alt="The Soul Behind Righttsign Tarot"
              className="w-[420px] h-auto object-cover rounded-[40px]"
            />
          </div>

          {/* Right - Text Content */}
          <div className="relative flex flex-col justify-center md:-ml-32 z-10">
            {/* Headings */}
            <div className="absolute -top-16 md:-top-20">
              {/* h2 with Waterfall font */}
              <h2 className="waterfall-regular text-7xl font-700 md:text-6xl text-[#3A1D0F] leading-tight drop-shadow-sm relative -left-16 md:-left-[250px]"
               style={{
                  WebkitTextStroke: "1px black", // black outline
                }}>
                The Soul Behind Righttsign Tarot
              </h2>

              <h3
                className="text-lg md:text-xl font-extrabold text-[#A37F76] mt-2 relative -left-10 md:-left-16"
                style={{
                  WebkitTextStroke: "1px #A37F76", // black outline
                }}
              >
                Empowered Living
              </h3>
            </div>

            {/* Rest text */}
            <div className="jeju space-y-4 text-[#5C4330] leading-relaxed mt-20 font-serif text-[17px] relative -left-10 md:-left-16">
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

              <p className=" ml-12 waterfall-regular text-3xl w-fit bg-[#C7AF9E] pt-4">
                “In every soul lies an untamed light, waiting to be rediscovered
                and amplified."
              </p>
              <p className="pl-48">--Righttsign Tarot</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
