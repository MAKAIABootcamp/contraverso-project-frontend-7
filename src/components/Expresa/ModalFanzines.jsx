import React from "react";
import PropTypes from "prop-types";
import "../../../fonts/fonts.css";
import styled from "styled-components";

const StyledModal = styled.div`
  background-color: #4900da;
  width: 50%;
  height: 50%;
  position: absolute;
  z-index: 10;
  margin-top: 2rem;
  margin-left: 25%;

  .modal {
    background-color: #000000;
    max-width: 68%;
    margin: auto;
    margin-top: 4rem;
    padding: 2rem 0 2rem 0;
    border-radius: 3%;
  }

  .modal-content {
    background-color: #fff35f;
    margin: auto;
    height: 21rem;
  }

  .title {
    color: #4900da;
    font-family: "MADE Soulmaze Brush";
    font-size: -webkit-xxx-large;
    text-align: center;
  }
  .subtitle {
    text-align: center;
    font-family: "MADE Soulmaze";
    font-size: larger;
    font-weight: bold;
  }
  .container-flex {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-evenly;
  }
  .boton {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
  .boton-cargar {
    background-color: #4100d0;
    color: white;
    border: none;
    height: 2rem;
    width: 9rem;
    font-size: 80%;
    border-radius: 1rem;
    font-family: "MADE Soulmaze";
  }
  .boton-cancelar {
    background-color: #1df4c8;
    color: white;
    border: none;
    height: 2rem;
    width: 9rem;
    font-size: 100%;
    border-radius: 1rem;
    font-family: "MADE Soulmaze";
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
