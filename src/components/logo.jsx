// Logo.jsx
import React from "react";

const Logo = () => {
  return (
    <div className="text-center font-sans flex">
      <div className="relative inline-block mb-2.5">
        <div className="text-[45px] animate-bounce">📰</div>
        <div className="absolute -bottom-1.5 -right-3.5 text-xl bg-white rounded-full p-0.5 animate-spin">
          🌍
        </div>
      </div>
      <div className="text-4xl ml-5 font-extrabold tracking-tight">
        <span className="bg-linear-to-r from-blue-900 to-blue-500 bg-clip-text text-transparent">
          NEWS
        </span>
        <span className="bg-linear-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
          PEDIA
        </span>
        <div className="text-sm text-gray-500 tracking-wide">
          Knowledge in every headline
        </div>
      </div>
    </div>
  );
};

export default Logo;
