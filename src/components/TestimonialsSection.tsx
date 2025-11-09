import testimonialPhoto from "@/assets/testimonial-photo.jpg";

const TestimonialsSection = () => {
  return (
    <section className="relative bg-[#f3ede7] py-24 overflow-hidden flex justify-center items-center">
      {/* ===== Background soft layer ===== */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="absolute w-[80%] md:w-[70%] h-[65%] bg-[#f8f4f2] rounded-md translate-x-[40px] translate-y-[30px] shadow-md"></div>
      </div>

      {/* ===== Foreground Card ===== */}
      <div className="relative z-10 bg-[#fcf9f7] shadow-xl rounded-md w-[85%] md:w-[70%] flex flex-col md:flex-row items-center md:items-center p-6 md:p-10">
        
        {/* === Left Image (Oval Capsule Shape) === */}
        <div className="relative md:-ml-44 -mt-10 md:mt-0">
          <div className="w-[200px] h-[300px] md:w-[260px] md:h-[380px] rounded-[140px] overflow-hidden shadow-xl bg-white">
            <img
              src={testimonialPhoto}
              alt="Happy Client"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* === Right Text Content === */}
        <div className="md:ml-10 mt-6 md:mt-0 text-center md:text-left max-w-[600px]">
          <h2 className="text-[1.8rem] md:text-[2rem] font-serif text-[#1a1a1a] mb-4">
            HAPPY CLIENTS
          </h2>

          <h3 className="text-[1.1rem] md:text-[1.25rem] font-semibold text-[#222] mb-3">
            A Complete Soul Reset
          </h3>

          <p className="text-[#444] leading-relaxed text-[0.95rem] italic mb-4">
            “I came in feeling completely overwhelmed and burnt out. The experience was incredible—the beautiful
            vibrations just washed over me. I truly believe her sound healing was like hitting a giant reset button!”
          </p>

          {/* === Star rating === */}
          <div className="flex justify-center md:justify-start text-[#f6c744] text-[1.1rem] mb-2">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
          </div>

          <div>
            <p className="font-semibold text-[#222] text-[0.95rem]">Aarushi Verma</p>
            <p className="text-sm text-[#777]">Fitness Enthusiast & Yoga Coach</p>
          </div>
        </div>
      </div>

      {/* ===== Decorative Feathers ===== */}
      <div className="absolute top-[8%] left-[60%] opacity-20 rotate-[10deg]">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Feather_icon.svg"
          alt=""
          className="w-16 h-16"
        />
      </div>

      <div className="absolute bottom-[12%] right-[45%] opacity-15 rotate-[-15deg]">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Feather_icon.svg"
          alt=""
          className="w-20 h-20"
        />
      </div>
    </section>
  );
};

export default TestimonialsSection;
