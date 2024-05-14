import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../../../fonts/fonts.css";

const randomNumberBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const Sparkle = styled(motion.svg)`
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translateX(-50%);
  opacity: 0;
`;

const StyledButton = styled.button`
  position: relative;
  border-radius: 0.5rem;
  border: none;
  padding: 0.375rem 0.2rem;
  font-size: 0.9375rem;
  // font-family: 'MADE Soulmaze Brush';
  text-transform: uppercase;
  color: ${(props) => props.color || "#161616"};
  cursor: pointer;
  width: ${(props) => props.width || 14}rem;
  height: 2.5rem;
  background-color: ${(props) => props.fondoColor || "#1DF4C8"};
  z-index: 2;

  &:hover {
    background-color: ${(props) => props.color || "#161616"};
    color: ${(props) => props.fondoColor || "#1DF4C8"};
    letter-spacing: 0.2rem;
  }
`;

function Button({
  width,
  color,
  fondoColor,
  to = "",
  children,
  handleClick = null,
}) {
  const navigate = useNavigate();
  const [showSparkles, setShowSparkles] = useState(false);

  const handleMouseEnter = () => {
    setShowSparkles(true);
  };

  const handleMouseLeave = () => {
    setShowSparkles(false);
  };

  const numberOfStars = 17;

  const handleOnClick = () => {
    if (to) {
      navigate(to);
    }
    if (handleClick) {
      handleClick();
    }
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <StyledButton
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        width={width}
        color={color}
        onClick={handleOnClick}
        fondoColor={fondoColor} // Pasar el color de fondo
      >
        <span style={{ fontFamily: "MADE Soulmaze" }} aria-hidden>
          {children}
        </span>
      </StyledButton>

      {showSparkles && (
        <div
          style={{
            position: "absolute",
            top: "-0%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
          }}
        >
          {Array.from({ length: numberOfStars }).map((_, index) => (
            <Sparkle
              className={`sparkle-${index}`}
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                x: randomNumberBetween(-50, 50),
                y: randomNumberBetween(-50, 50),
                scale: randomNumberBetween(1.5, 2.5),
                transition: { duration: 0.4 },
              }}
              exit={{ opacity: 0, scale: 0, transition: { duration: 0.1 } }}
              viewBox="0 0 122 117"
              width="4"
              height="4"
            >
              <motion.path
                className="fill-blue-600"
                d="M64.39,2,80.11,38.76,120,42.33a3.2,3.2,0,0,1,1.83,5.59h0L91.64,74.25l8.92,39a3.2,3.2,0,0,1-4.87,3.4L61.44,96.19,27.09,116.73a3.2,3.2,0,0,1-4.76-3.46h0l8.92-39L1.09,47.92A3.2,3.2,0,0,1,3,42.32l39.74-3.56L58.49,2a3.2,3.2,0,0,1,5.9,0Z"
                fill={`${fondoColor}`}
              />
            </Sparkle>
          ))}
        </div>
      )}
    </div>
  );
}

export default Button;
