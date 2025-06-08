import React, { useRef, useEffect } from "react";

export default function StandaloneScratch() {
  const width = 300;
  const height = 150;
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = "#FFF";
    ctx.font = "bold 24px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Scratch me", width / 2, height / 2 + 10);

    ctxRef.current = ctx;
  }, []);

  const getCoords = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    let x, y;
    if (e.touches && e.touches.length > 0) {
      x = e.touches[0].clientX - rect.left;
      y = e.touches[0].clientY - rect.top;
    } else {
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
    }
    return { x, y };
  };

  const scratch = (e) => {
    e.preventDefault();
    console.log("Scratch event fired");
    const ctx = ctxRef.current;
    if (!ctx) return;

    const { x, y } = getCoords(e);
    console.log("Scratch at:", x, y);

    ctx.save();
    ctx.globalCompositeOperation = "destination-out";

    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  };

  return (
    <div
      style={{
        margin: "50px auto",
        width,
        height,
        border: "3px solid yellow",
        touchAction: "none",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          borderRadius: "12px",
          cursor: "pointer",
          background: "red",
          width: "100%",
          height: "100%",
          display: "block",
        }}
        onMouseMove={scratch}
        onTouchMove={scratch}
        onMouseDown={() => console.log("mousedown")}
        onMouseUp={() => console.log("mouseup")}
      />
    </div>
  );
}
