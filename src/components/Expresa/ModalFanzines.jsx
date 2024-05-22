import React from "react";
import PropTypes from "prop-types";
import "../../../fonts/fonts.css";
import styled from "styled-components";

const StyledModal = styled.div`
  background-color: #6027ce82;
  opacity: 1;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  .modal {
    background-color: #000000;
    width: 90%;
    max-width: 700px;
    margin: auto;
    padding: 1rem 0 1rem;
        border-radius: 3%;
  }

  .modal-content {
    background-color: #1df4c8;
    margin: auto;
    max-height: 80vh;
    overflow-y: auto;
  }

  .title {
    color: #4900da;
    font-family: "MADE Soulmaze Brush";
    font-size: 7.5vw;
    text-align: center;
    padding-top: 2rem;
  }

  .subtitle {
    text-align: center;
    font-family: "MADE Soulmaze";
    font-size: 3vw;
    font-weight: bold;
  }

  .container-flex {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  .boton {
    display: flex;
    justify-content: center;
    gap: 5vw;
    padding-bottom: 2rem;
  }

  .boton-cargar, .boton-cancelar {
    width: 80%;
    max-width: 13rem;
    height: 3rem;
    font-size: 1.12em;
    border-radius: 1rem;
    font-family: "MADE Soulmaze";
    cursor: pointer;
    text-align: center;
  }

  .boton-cargar {
    background-color: #DD77CC;
    color: white;
    border: none;
  }

  .boton-cancelar {
    background-color: #FFF35F;
    border: none;
  }

  @media (min-width: 768px) {
    .modal {
      width: 70%;
    }
    .title {
      font-size: 4vw;
    }
    .subtitle {
      font-size: 2vw;
    }
    .boton-cargar, .boton-cancelar {
      width: 40%;
    }
  }
 
  
  .container {
    gap: 0.5rem;
    display: grid;
    justify-content: space-around;
    margin-right: 2rem;
    padding: 6%;
    position: relative;
  }

  .container-title {
    font-family: "Founders Grotesk";
    color: #514d5b;
    text-align: justify;
    font-size: 1.5rem;
  }

  .container-text {
    border-radius: 1rem;
    font-size: 1rem;
    width: 100%;
    border: none;
    height: 140%;
  }

  .image-link {
    width: 18%;
  }

  @media (max-width: 768px) {
    .boton-añadir {
      width: 7rem;
      font-size: 0.8em;
    }
    .container-title {
      font-size: 1.5rem;
    }
  }
`;


const Modal = ({ isOpen, title, subtitle, children, onClose, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <StyledModal>
      <div className="modal">
        <div className="modal-content">
          <h1 className="title">{title}</h1>
          <h2 className="subtitle">{subtitle}</h2>
          <div className="container-flex">{children}</div>
          <div className="boton">
            <button className="boton-cargar" onClick={onSubmit}>
              CARGAR FANZINES
            </button>
            <button className="boton-cancelar" onClick={onClose}>
              CANCELAR
            </button>
          </div>
        </div>
      </div>
    </StyledModal>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Modal;
