import marqueeImg from "@/assets/S EXPLORE OUR EVENTS & HIGHLIGHT.png";
import soundBowl from "@/assets/image6.png";

const EventsSection = () => {
  return (
    <section className="bg-[#b48b80] pt-28 pb-10 px-6 md:px-20 overflow-hidden relative">
      {/* ===== Image-based Marquee (Top Corner) ===== */}
      <div className="absolute top-[20px] left-0 w-full overflow-hidden z-30">
        <div className="relative whitespace-nowrap">
          <div className="inline-flex mt-3 will-change-transform animate-marquee">
            {/* Duplicate image for infinite scroll */}
            <img
              src={marqueeImg}
              alt="Explore Our Events & Highlight"
              className="h-[70px] md:h-[70px] object-contain mx-6"
            />
            <img
              src={marqueeImg}
              alt="Explore Our Events & Highlight"
              className="h-[70px] md:h-[70px] object-contain mx-6"
            />
            <img
              src={marqueeImg}
              alt="Explore Our Events & Highlight"
              className="h-[70px] md:h-[70px] object-contain mx-6"
            />
            <img
              src={marqueeImg}
              alt="Explore Our Events & Highlight"
              className="h-[70px] md:h-[70px] object-contain mx-6"
            />
          </div>
        </div>
      </div>

      {/* ===== Main Event Section ===== */}
      <div className="grid grid-cols-1 md:grid-cols-[400px_1fr] gap-10 items-start mt-10 md:mt-20 relative z-10">
        {/* Event Image */}
        <div className="relative w-full -mt-16 md:-mt-28 z-0">
          <img
            src={soundBowl}
            alt="Sound Bowl Event"
            className="w-[400px] h-[400px] md:w-[450px] md:h-[450px] object-cover mx-auto md:mx-0 rounded-xl shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="text-white mt-5 md:mt-10">
          <h3 className="font-waterfall text-[3.5rem] md:text-[2rem] font-[700] italic mb-3 font-[cursive]">
            Hostel Kute’s First-Ever Aqua Sound Healing Event in Gandhinagar
          </h3>
          <p className="text-[0.95rem] leading-relaxed max-w-[520px]">
            Dive into a world of profound healing and memorable experience. This is where you can explore the unique
            gathering we host, designed to bring inner peace and connection right to your community.
          </p>
        </div>
      </div>

      {/* ===== Inline CSS for Marquee Animation ===== */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-70%); }
        }

        .animate-marquee {
          display: inline-flex;
          animation: marquee 20s linear infinite;
          align-items: center;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default EventsSection;
