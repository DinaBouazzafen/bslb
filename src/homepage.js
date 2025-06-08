import React from "react";
import P5Sketch from "./p5Sketch";
import ScratchCardCanvas from "./ScratchCardComponent";


export default function BSLBHomepage() {
  return (
    <>
      {/* Fixed Hamburger Icon */}
      <img
        src="/hamburger.png"
        alt="Menu"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "auto",
          zIndex: 1001,
          cursor: "pointer",
          objectFit: "contain",
        }}
      />

      {/* Logo */}
      <img
        src="/logo.gif"
        alt="Logo"
        style={{
          position: "fixed",
          top: "20px",
          left: "20px",
          width: "200px",
          height: "auto",
          zIndex: 1002,
          pointerEvents: "auto",
        }}
      />

      {/* p5 background */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <P5Sketch />
      </div>

      {/* Scrollable content */}
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "313vh",
          overflowY: "scroll",
          margin: 0,
          padding: 0,
          zIndex: 10,
          background: "transparent",
          userSelect: "none",
          pointerEvents: "auto",
        }}
        onDragStart={(e) => e.preventDefault()}
      >
        <img
          src="/bslbdesign.png"
          alt="Full Page Scrollable"
          draggable={false}
          style={{ display: "block", width: "100%", height: "auto" }}
        />

        <img
          src="/torn.png"
          alt="Torn"
          style={{
            position: "absolute",
            top: "38.5%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 20,
            maxWidth: "120%",
            height: "auto",
            pointerEvents: "auto",
          }}
        />
      </div>

      {/* Put scratch canvas here so it's fully on top */}
      <ScratchCardCanvas
        top="170%"
        left="69%"
        width={720}
        height={280}
        rotate="10deg"
      />
    </>
  );
}




