import React from "react";

const blobs = [
  { top: "10%", left: "10%", size: "500px", color: "rgba(59,130,246,0.4)" },
  { top: "60%", left: "70%", size: "600px", color: "rgba(96,165,250,0.35)" },
  { top: "30%", left: "50%", size: "400px", color: "rgba(147,197,253,0.3)" },
];

const FullScreenBlobs: React.FC = () => {
  return (
    <div className="fixed inset-0 h-screen w-full overflow-hidden pointer-events-none z-20">
      {blobs.map((blob, i) => (
        <div
          key={i}
          className="absolute rounded-full blur-3xl animate-pulse"
          style={{
            top: blob.top,
            left: blob.left,
            width: blob.size,
            height: blob.size,
            background: `radial-gradient(circle at center, ${blob.color}, rgba(255,255,255,0) 90%)`,
          }}
        />
      ))}
    </div>
  );
};

export default FullScreenBlobs;
