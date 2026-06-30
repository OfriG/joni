export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/1.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Sun Rays */}
      <div className="absolute -top-20 -left-20 h-[600px] w-[600px] opacity-25">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 origin-left"
            style={{
              width: "300px",
              height: "2px",
              background:
                "linear-gradient(90deg, rgba(245,215,110,.5), transparent)",
              transform: `rotate(${i * 22.5}deg)`,
            }}
          />
        ))}
      </div>

      {/* Lighthouse Glow */}
      <div className="absolute right-[8%] bottom-[28%] hidden sm:block">
        <div className="absolute -top-8 left-1/2 h-16 w-16 -translate-x-1/2 rounded-full bg-[#f5d76e] opacity-40 blur-xl animate-pulse" />
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/20"
          style={{
            width: `${2 + (i % 3)}px`,
            height: `${2 + (i % 3)}px`,
            top: `${10 + ((i * 17) % 70)}%`,
            left: `${5 + ((i * 23) % 90)}%`,
            animation: `float ${4 + (i % 4)}s ease-in-out ${
              i * 0.3
            }s infinite`,
          }}
        />
      ))}
    </div>
  );
}