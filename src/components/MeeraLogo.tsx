import React from 'react';

interface MeeraLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  showGlow?: boolean;
}

export const MeeraLogo: React.FC<MeeraLogoProps> = ({
  className = '',
  size = 'md',
  showGlow = true
}) => {
  const sizeMap = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-14 h-14',
    xl: 'w-24 h-24',
    hero: 'w-32 h-32 sm:w-44 sm:h-44'
  };

  const selectedSize = sizeMap[size] || sizeMap.md;

  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
      {/* Ambient background neon glow matching the magenta/cyan gradient */}
      {showGlow && (
        <div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-600/30 via-purple-600/20 to-cyan-500/35 blur-xl -z-10 animate-pulse-subtle pointer-events-none"
          style={{ transform: 'scale(1.25)' }}
        />
      )}

      {/* Official MEERA Glass Infinity M Vector Logo */}
      <svg
        viewBox="0 0 500 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${selectedSize} overflow-visible drop-shadow-[0_8px_20px_rgba(6,182,212,0.25)] transition-transform duration-300 hover:scale-105`}
      >
        <defs>
          <linearGradient id="logoMLeftGrad" x1="120" y1="320" x2="250" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4C1D95" />
            <stop offset="35%" stopColor="#7C3AED" />
            <stop offset="70%" stopColor="#C026D3" />
            <stop offset="100%" stopColor="#E879F9" />
          </linearGradient>

          <linearGradient id="logoMRightGrad" x1="250" y1="80" x2="380" y2="320" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#E879F9" />
            <stop offset="30%" stopColor="#38BDF8" />
            <stop offset="65%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#0891B2" />
          </linearGradient>

          <linearGradient id="logoGlassRim" x1="120" y1="80" x2="380" y2="320" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="25%" stopColor="#F472B6" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="75%" stopColor="#38BDF8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.9" />
          </linearGradient>

          <linearGradient id="logoInfGrad" x1="110" y1="205" x2="390" y2="205" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#6D28D9" stopOpacity="0.95" />
            <stop offset="25%" stopColor="#C026D3" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#F472B6" stopOpacity="0.9" />
            <stop offset="75%" stopColor="#22D3EE" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#0284C7" stopOpacity="0.95" />
          </linearGradient>

          <linearGradient id="logoInfHighlight" x1="100" y1="170" x2="400" y2="170" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="30%" stopColor="#FDF4FF" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#E0F2FE" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.8" />
          </linearGradient>

          <filter id="logoShadow" x="-15%" y="-15%" width="130%" height="130%">
            <feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="#000000" floodOpacity="0.45" />
          </filter>
        </defs>

        {/* ================= BASE 3D GLASS "M" ================= */}
        <g filter="url(#logoShadow)">
          {/* Base M Body */}
          <path
            d="M136 92 C136 84 142 78 150 78 L170 78 C176 78 182 81 186 86 L250 165 L314 86 C318 81 324 78 330 78 L350 78 C358 78 364 84 364 92 L364 308 C364 316 358 322 350 322 L326 322 C318 322 312 316 312 308 L312 166 L262 228 C256 235 244 235 238 228 L188 166 L188 308 C188 316 182 322 174 322 L150 322 C142 322 136 316 136 308 Z"
            fill="url(#logoMLeftGrad)"
            stroke="url(#logoGlassRim)"
            strokeWidth="5"
            strokeLinejoin="round"
          />

          {/* Right Pillar Blend */}
          <path
            d="M250 165 L314 86 C318 81 324 78 330 78 L350 78 C358 78 364 84 364 92 L364 308 C364 316 358 322 350 322 L326 322 C318 322 312 316 312 308 L312 166 L262 228 C259 231 254 233 250 233 Z"
            fill="url(#logoMRightGrad)"
            fillOpacity="0.9"
          />

          {/* Inner Light Bevel Tracks */}
          <path
            d="M144 95 L144 305"
            stroke="#FFFFFF"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeOpacity="0.55"
          />
          <path
            d="M356 95 L356 305"
            stroke="#E0F2FE"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeOpacity="0.65"
          />
          <path
            d="M176 96 L244 180"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeOpacity="0.6"
          />
          <path
            d="M324 96 L256 180"
            stroke="#A5F3FC"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeOpacity="0.7"
          />
        </g>

        {/* ================= INTERTWINED INFINITY TUBE ================= */}
        <g filter="url(#logoShadow)">
          {/* Main Infinity Tube */}
          <path
            d="M 250,205 
               C 285,155 375,145 375,205 
               C 375,265 285,255 250,205 
               C 215,155 125,145 125,205 
               C 125,265 215,255 250,205 Z"
            fill="none"
            stroke="url(#logoInfGrad)"
            strokeWidth="44"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Refractive Inner Core */}
          <path
            d="M 250,205 
               C 285,155 375,145 375,205 
               C 375,265 285,255 250,205 
               C 215,155 125,145 125,205 
               C 125,265 215,255 250,205 Z"
            fill="none"
            stroke="url(#logoGlassRim)"
            strokeWidth="38"
            strokeOpacity="0.32"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Center Hole Depth */}
          <path
            d="M 250,205 
               C 285,155 375,145 375,205 
               C 375,265 285,255 250,205 
               C 215,155 125,145 125,205 
               C 125,265 215,255 250,205 Z"
            fill="none"
            stroke="#080B10"
            strokeWidth="12"
            strokeOpacity="0.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Upper Glass Specular Highlights */}
          <path
            d="M 248,198 C 280,150 365,142 365,198 M 248,212 C 216,260 135,268 135,212"
            fill="none"
            stroke="url(#logoInfHighlight)"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeOpacity="0.9"
          />

          <path
            d="M 252,212 C 284,260 365,268 365,212 M 252,198 C 220,150 135,142 135,198"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="3"
            strokeLinecap="round"
            strokeOpacity="0.65"
          />

          {/* Sparkle Glint at Infinity Crossover */}
          <ellipse cx="250" cy="205" rx="7" ry="7" fill="#FFFFFF" fillOpacity="0.9" />
          <circle cx="250" cy="205" r="3.5" fill="#67E8F9" />

          {/* Left loop highlight point */}
          <ellipse cx="155" cy="180" rx="14" ry="5" transform="rotate(-30 155 180)" fill="#FFFFFF" fillOpacity="0.6" />
          {/* Right loop highlight point */}
          <ellipse cx="345" cy="180" rx="14" ry="5" transform="rotate(30 345 180)" fill="#FFFFFF" fillOpacity="0.7" />
        </g>
      </svg>
    </div>
  );
};
