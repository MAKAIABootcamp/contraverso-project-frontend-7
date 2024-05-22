import LoginForm from "../../components/Login/LoginForm";
// import { FaUserSecret } from "react-icons/fa";
import { CgUserlane } from "react-icons/cg";
import { useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import styled from "styled-components";

const COLORS_TOP = ["#1E0080", "#4900DA", "#5E3AFF", "#7A6AFF", "#9C90FF"];

const HeroSection = styled(motion.main)`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: ${({ bgColor }) => bgColor};
`;
const UserContainer = styled.header`
  position: absolute;
  top: 46%;
  left: 50%;
  transform: translate(-50%, -30%);
  background-color: #fff35f;
  border-top: 1rem solid #161616;
  border-bottom: 1rem solid #161616;
  border-radius: 0.625rem;
  padding: 2rem 0;
  height: auto;
  width: 65vh;
  box-shadow: 0rem 0.3125rem 0.625rem rgba(0, 0, 0, 0.1);
  @media (max-width: 512px) {
    top: 40%;
    width: 80vw;
  }
`;
const User = styled.div`
  text-align: center;
  div {
    margin-left: auto;
    margin-right: auto;
    height: auto;
    width: 30%;
    border-radius: 50%;
    background-color: #4900da;
    @media (max-width: 512px) {
      width: 42%;
    }
  }
`;
const ImgStyled = styled.img`
  z-index: 10;
  position: absolute;
  top: 13%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: auto;
  width: 40vh;
  @media (max-width: 512px) {
    width: 55vw;
  }
  @media (max-width: 350px) {
    top: 10%;
  }
`;

const Acceso = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [nextColorIndex, setNextColorIndex] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentColorIndex(nextColorIndex);
      setNextColorIndex((prevIndex) =>
        prevIndex === COLORS_TOP.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

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
      <ImgStyled src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336881/MONTAJE/INICIO/1-7-2_lbpqjx.png" alt="Logo Contraverso" />
      <UserContainer>
        <User>
          <div>
            <CgUserlane
              color="#ffff"
              style={{ fontSize: "11vh", margin: "18%", opacity: ".9" }}
            />
          </div>
        </User>
        <LoginForm />
      </UserContainer>
    </HeroSection>
  );
};

export default Acceso;
