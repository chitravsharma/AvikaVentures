import React from 'react';

const Logo = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="logoGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#2563eb" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
    </defs>
    <rect width="64" height="64" rx="16" fill="url(#logoGrad)" />
    {/* Code brackets < /> */}
    <path d="M24 22L14 32L24 42" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M40 22L50 32L40 42" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="35" y1="18" x2="29" y2="46" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
  </svg>
);

export default Logo;
