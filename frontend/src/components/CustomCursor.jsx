// client/src/components/CustomCursor.jsx
import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const checkHover = (e) => {
      if (e.target.closest(".cursor-parlour")) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", checkHover);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", checkHover);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: pos.y - 20,
        left: pos.x - 20,
        width: 40,
        height: 40,
        zIndex: 9999,
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "20px",
        transition: "all 0.1s ease",
        mixBlendMode: "difference",
        color: "white",
      }}
    >
      {hovering ? "✂️" : (
        <div
          style={{
            width: 20,
            height: 20,
            borderRadius: "50%",
            backgroundColor: "rgba(79, 70, 229, 0.6)", // Tailwind indigo-600
          }}
        />
      )}
    </div>
  );
}
