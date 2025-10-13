import React, { useRef, useEffect } from "react";
import "./Button.css";

const AnimatedButton = ({ text, link }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const speed = 1.4;
    let position = 0;
    let animationFrameId;

    const animateBackgroundPosition = () => {
      position = (position + speed) % 200;
      button.style.setProperty("--bg-position", `${position}%`);
      animationFrameId = requestAnimationFrame(animateBackgroundPosition);
    };

    animateBackgroundPosition();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <a
      ref={buttonRef}
      className="button_purchase"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
};

export default AnimatedButton;
