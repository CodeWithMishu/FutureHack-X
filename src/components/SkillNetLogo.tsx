import React from "react";
import Image from "next/image";

const SkillNetLogo = ({
  className = "",
  height = 150, // Increased default size
}: {
  className?: string;
  width?: number;
  height?: number;
}) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      {/* SkillNet PNG Logo - Properly Sized to Content */}
      <div
        className="relative px-2 py-1 rounded-lg" // Reduced padding, especially vertical
        style={{ width: height * 0.91, height: height * 0.28,marginTop:15 }} // Better aspect ratio for logo content
      >
        <Image
          src="/skill-net-logo.png"
          alt="SkillNet Logo"
          width={height * 0.89}
          height={height * 0.2}
          className="drop-shadow-2xl object-contain" // Enhanced shadow
          priority
        />
      </div>
    </div>
  );
};

export default SkillNetLogo;
