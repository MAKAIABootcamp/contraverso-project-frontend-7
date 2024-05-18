import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { actionLogout } from "../../app/features/userAuth/userAuthActions";

const SyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  .containerModal {
    width: 90%;
    max-width: 31.25rem;
    background-color: #161616;
    position: relative;
    border-radius: 6px;
    border-color: transparent;
    outline: none;
    height: auto;
    overflow: auto;
    display: flex;

    .buttonClose {
      font-family: Roboto;
      font-weight: 500;
      position: absolute;
      top: 13px;
      right: 13px;
      width: 25px;
      height: 25px;
      border-radius: 50px;
      border: none;
      color: #161616; /* neutral-600 */
      background: #fff35f;
      cursor: pointer;
    }

    .contenidoModal {
      display: flex;

      .buttonLogout {
        display: flex;
        background-color: transparent;
        padding: 1rem;
        color: #ffffff;
        font-family: "Filson Pro Book";
        font-size: 12px;
        border: 1px solid white;
        border-radius: 20px;
        margin-top: 5%;
        width: 10vw;
        justify-content: center;
      }
      .buttonLogout:hover {
        background-color: #1df4c8;
        color: #161616;
        border: none;
        cursor: pointer;
      }
    }
  }
`;

export const Modal = ({ onClose }) => {
    const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(store => store.userAuth);

  const handleLogout = () => {
    dispatch(actionLogout());
  };

  return (
    <SyledModal>
        <div className="containerModal">
            <button className='buttonClose' onClick={onClose}>X</button>  
            <div className="contenidoModal">
                <h1>Contenido</h1>
                {isAuthenticated && <button onClick={handleLogout} className='buttonLogout'>Cerrar sesión</button>}
            </div>   
        </div>
    </SyledModal>
  )
}

