import React from "react";
import "./Loading.css"; // Optional: If you prefer separate CSS for animations

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="relative w-20 h-20">
        {/* Outer gradient spinning ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400 via-purple-500 to-pink-500 animate-spin-slow"></div>
        
        {/* Inner background ring */}
        <div className="absolute inset-2 rounded-full bg-gray-900"></div>

        {/* Inner pulsing dot */}
        <div className="absolute inset-5 rounded-full bg-blue-400 shadow-lg animate-pulse"></div>
      </div>
    </div>
  );
};

export default Loading;

