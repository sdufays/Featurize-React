// src/pages/LogoSection.js
"use client"; // If using client-side features like state or effects

import Image from "next/image";

const LogoSection = () => {
  return (
    <div className="flex justify-center mb-12">
      <div className="relative h-24 w-64">
        {/* Placeholder for Uber Logo */}
        <Image
          src="../images/Uber_logo_2018.png" // Replace with actual logo path
          alt="Uber Logo"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default LogoSection;
