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
        <div className="flex justify-between items-center">
          {/* ✅ Logo in top-left corner */}
          <div className="absolute top-4 left-6">
            <img
              src={logo}
              alt="Righttsign Tarot Logo"
              className="h-20 w-auto cursor-pointer"
              onClick={() => scrollToSection("home")} // optional scroll to top
            />
          </div>

          {/* ✅ Nav Links on Right */}
          <div className="flex justify-end items-center mt-6 gap-8 ml-auto">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contacts")}
              className="text-foreground hover:text-primary transition-colors font-medium"
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
