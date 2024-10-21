import React from "react";

const Loader = () => {
  return (
    <svg viewBox="25 25 50 50">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#E9B43F", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#C79017", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      <circle r="20" cy="50" cx="50"></circle>
    </svg>
  );
};

export default Loader;
