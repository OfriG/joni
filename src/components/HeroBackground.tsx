export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Sky gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #f5d76e22 0%, #7b3fa044 25%, #2d1b69 55%, #0a1628 100%)",
        }}
      />

      {/* Sun rays */}
      <div className="absolute -top-20 -left-20 h-[600px] w-[600px] opacity-30">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 origin-left"
            style={{
              width: "300px",
              height: "2px",
              background: "linear-gradient(90deg, #f5d76e88, transparent)",
              transform: `rotate(${i * 22.5}deg)`,
            }}
          />
        ))}
      </div>

      {/* Mountains */}
      <svg
        className="absolute bottom-[30%] left-0 w-full opacity-60"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0,400 L0,280 Q200,180 400,250 Q600,120 800,220 Q1000,80 1200,200 Q1350,150 1440,240 L1440,400 Z"
          fill="#4a2d8a"
          opacity="0.7"
        />
        <path
          d="M0,400 L0,320 Q300,220 600,300 Q900,180 1200,280 Q1350,240 1440,300 L1440,400 Z"
          fill="#2d1b69"
          opacity="0.9"
        />
      </svg>

      {/* Lighthouse glow */}
      <div className="absolute right-[8%] bottom-[28%] hidden sm:block">
        <div className="animate-pulse-glow absolute -top-8 left-1/2 h-16 w-16 -translate-x-1/2 rounded-full bg-[#f5d76e] opacity-40 blur-xl" />
        <div className="relative">
          <div className="mx-auto h-20 w-8 rounded-t-full bg-gradient-to-b from-white to-[#e85d75]" />
          <div className="mx-auto h-3 w-10 rounded-sm bg-[#e85d75]" />
          <div className="mx-auto h-16 w-10 rounded-b-lg bg-gradient-to-b from-[#f0e6d3] to-[#c4a882]" />
        </div>
      </div>

      {/* Ocean waves */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="waveGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3b9fd9" />
            <stop offset="100%" stopColor="#1a5276" />
          </linearGradient>
        </defs>
        <path
          d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,200 L0,200 Z"
          fill="url(#waveGrad)"
          opacity="0.8"
        />
        <path
          d="M0,90 C240,50 480,110 720,80 C960,50 1200,110 1440,80 L1440,200 L0,200 Z"
          fill="#2e86ab"
          opacity="0.6"
        />
        <path
          d="M0,120 C240,140 480,100 720,130 C960,160 1200,100 1440,130 L1440,200 L0,200 Z"
          fill="#1a5276"
        />
      </svg>

      {/* Floating boat silhouette */}
      <div className="animate-float absolute bottom-[18%] left-[5%] hidden opacity-80 md:block lg:left-[12%]">
        <svg width="120" height="80" viewBox="0 0 120 80" aria-hidden>
          <path d="M10,50 Q60,30 110,50 L100,65 Q60,55 20,65 Z" fill="#e85d75" />
          <rect x="55" y="15" width="3" height="40" fill="#f0e6d3" />
          <path d="M58,15 L58,45 L95,35 L58,15" fill="#fff8f0" opacity="0.9" />
          <path d="M58,20 L58,50 L30,42 L58,20" fill="#fff8f0" opacity="0.7" />
        </svg>
      </div>

      {/* Ambient particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/20"
          style={{
            width: `${2 + (i % 3)}px`,
            height: `${2 + (i % 3)}px`,
            top: `${10 + ((i * 17) % 70)}%`,
            left: `${5 + ((i * 23) % 90)}%`,
            animation: `float ${4 + (i % 4)}s ease-in-out ${i * 0.3}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
