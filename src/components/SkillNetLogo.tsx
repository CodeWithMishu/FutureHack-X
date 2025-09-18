import React from "react";

const SkillNetLogo = ({
  className = "",
  width = 300,
  height = 80,
}: {
  className?: string;
  width?: number;
  height?: number;
}) => {
  return (
    <div className={`flex items-center justify-center space-x-6 ${className}`}>
      {/* Logo Shapes - More Visible */}
      <div
        className="relative flex items-center space-x-2"
        style={{ width: width * 0.4, height: height }}
      >
        {/* Main Check/Tick Shape */}
        <div className="relative">
          <svg
            width={width * 0.12}
            height={height * 0.8}
            viewBox="0 0 80 60"
            fill="none"
            className="drop-shadow-lg"
          >
            <circle
              cx="20"
              cy="20"
              r="18"
              fill="#FF6B35"
              stroke="#FF8A65"
              strokeWidth="2"
            />
            <path d="M25 8 Q45 0 70 20 Q45 40 25 32 Z" fill="#FF6B35" />
            <path
              d="M25 8 Q45 0 70 20 Q45 40 25 32 Z"
              stroke="#FF8A65"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        </div>

        {/* Small Square Accent */}
        <div className="relative">
          <div
            className="bg-[#FF6B35] border-2 border-[#FF8A65] shadow-lg"
            style={{
              width: width * 0.04,
              height: width * 0.04,
            }}
          />
        </div>

        {/* Curved Element */}
        <div className="relative">
          <svg
            width={width * 0.15}
            height={height * 0.6}
            viewBox="0 0 100 40"
            fill="none"
            className="drop-shadow-lg"
          >
            <path
              d="M10 8 Q50 -8 90 15 Q50 38 10 22 Z"
              fill="#FF6B35"
              stroke="#FF8A65"
              strokeWidth="1"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SkillNetLogo;
