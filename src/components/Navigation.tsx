import React from "react";
import logo from "../assets/logo.png"; // adjust path if needed

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center text-[#58413c] font-semibold text-2xl font-serif ">
          {/* ✅ Logo in top-left corner */}
          {/* <div className="absolute top-4 left-6">
            <img
              src={logo}
              alt="Righttsign Tarot Logo"
              className="h-20 w-auto cursor-pointer"
              onClick={() => scrollToSection("home")} // optional scroll to top
            />
          </div> */}

          {/* ✅ Nav Links on Right */}
          
            <div className="container flex justify-around  items-center mt-6  ml-auto glow-shimmer">
            <button
              onClick={() => scrollToSection("about")}
              className="glow-shimmer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="glow-shimmer"
            >
              Services
            </button>
            </div>
           <div className="container flex justify-around items-center mt-6  ml-auto glow-shimmer">
            <button
              onClick={() => scrollToSection("events")}
              className="glow-shimmer"
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection("contacts")}
              className="glow-shimmer"
            >
              Contacts
            </button>
           </div>
          </div>
        </div>
    
    </nav>
  );
};

export default Navigation;