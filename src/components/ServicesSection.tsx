import { ChevronRight } from "lucide-react";
import servicesPhoto1 from "@/assets/img4.jpg"; // bottom image (base)
import servicesPhoto2 from "@/assets/img5.jpg"; // top image (overlap)

const services = [
  "Tarot Guidance",
  "Numerology",
  "Sound Healing",
  "Reiki & Multi Modality Healing",
  "Intuitive Coaching",
  "Crystal Treasure",
];

const ServicesSection = () => {
  return (
    <section id='projects' className="relative bg-[#FAEEDC] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-10 items-start relative">
        {/* LEFT SIDE (text) */}
        <div className="pt-4 relative z-20">
          {/* Only h2 and p shifted to right */}
          <div className="md:translate-x-10 lg:translate-x-20">
            <h2 className="font-waterfall text-[44px] md:text-[52px] text-[#5E4B43] mb-3 leading-snug">
              Find Clarity in Every Area of Your Life
            </h2>

            <p className="text-[#8C6F5A] text-[15px] leading-relaxed max-w-[950px] mb-10 font-jeju">
              Step into the wisdom of Tarot and discover the guidance your
              higher self has been trying to share with you. Each reading offers
              clarity healing, and direction to help you move forward with
              confidence and peace.
            </p>
          </div>

          {/* Services list — stays in original position */}
          <div className="space-y-3 mt-6 ml-20 max-w-[460px]">
            {services.map((service, i) => (
              <div
                key={i}
                className="flex items-center justify-between border-b border-[#5E4B43] pb-2 group cursor-pointer"
              >
                <span className="font-jeju text-[18px] text-[#2E2E2E] group-hover:text-[#8C6F5A] transition-colors">
                  {service}
                </span>
                <ChevronRight className="text-[#2E2E2E] group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE (images) */}
        <div className="relative w-full flex justify-end items-start">
          {/* Bottom image (base) */}
          <img
            src={servicesPhoto1}
            alt="Meditation and sound bowls"
            className="w-[340px] h-[420px] object-cover rounded-lg shadow-md md:mr-60 relative z-10 md:mt-[160px]"
          />

          {/* Top image (overlapping) */}
          <img
            src={servicesPhoto2}
            alt="Sound healing practice"
            className="w-[340px] h-[420px] object-cover rounded-lg shadow-md absolute md:-top-12 md:right-0 z-20"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
