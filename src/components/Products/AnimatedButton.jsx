import React, { useRef, useEffect } from "react";
import "../../assets/Style/Button.css";
import { Link } from "react-router-dom";

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

  const isExternal =
    link && (link.startsWith("http") || link.startsWith("https:"));

  return (
    <>
      {isExternal ? (
        <a
          ref={buttonRef}
          className="button_purchase"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {text}
        </a>
      ) : (
        <Link ref={buttonRef} className="button_purchase" to={link}>
          {text}
        </Link>
      )}
    </>
  );
};

export default AnimatedButton;
