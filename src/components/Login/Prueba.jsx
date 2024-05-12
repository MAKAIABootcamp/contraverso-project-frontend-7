import { useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import styled from "styled-components";

const COLORS_TOP = ["#7243E6", "#4900DA", "#5C26E0"
];


const HeroSection = styled(motion.section)`
  height: 80vh;
  background-color: ${({ bgColor }) => bgColor};
`;

const Prueba = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [nextColorIndex, setNextColorIndex] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentColorIndex(nextColorIndex);
      setNextColorIndex(prevIndex => prevIndex === COLORS_TOP.length - 1 ? 0 : prevIndex + 1);

    }, 5000);

    return () => clearInterval(intervalId);
  }, [nextColorIndex]);

  const backgroundColor = COLORS_TOP[currentColorIndex];
  const nextBackgroundColor = COLORS_TOP[nextColorIndex];

  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      backgroundColor: nextBackgroundColor,
      transition: { duration: 1, ease: "easeInOut" },
    });
  }, [nextBackgroundColor, controls]);

  return (
    <HeroSection
      bgColor={backgroundColor}
      initial={{ backgroundColor }}
      animate={controls}
    >
    </HeroSection>
  );
};

export default Prueba;
