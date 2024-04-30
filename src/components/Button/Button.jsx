import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
  padding: 0.375rem 0.75rem;
  font-size: 1.2rem;
  font-family: "MADE Soulmaze";
  letter-spacing: 0.1rem;
  font-weight: bolder;
  text-transform: uppercase;
  color: #161616;
  cursor: pointer;
  width: ${(props) => props.width || 270}px;
  background-color: ${(props) => props.color || "#1DF4C8"};
  z-index: 2;

  &:hover {
    border: 0.12rem solid #1df4c8;
    background-color: #161616;
    color: #1df4c8;
  }
`;

function Button({ width, color, to, children }) {
  const [showSparkles, setShowSparkles] = useState(false);

  const handleMouseEnter = () => {
    setShowSparkles(true);
  };

  const handleMouseLeave = () => {
    setShowSparkles(false);
  };

  const numberOfStars = 16;

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <Link to={to}>
        <StyledButton
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          width={width}
          color={color}
        >
        <span aria-hidden>{children}</span>
        </StyledButton>
      </Link>
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
                fill={"#1DF4C8"}
              />
            </Sparkle>
          ))}
        </div>
      )}
    </div>
  );
}

export default Button;
