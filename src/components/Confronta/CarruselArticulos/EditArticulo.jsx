import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionEditArti } from "../../../app/articulos/articulosActions";
import styled from "styled-components";
import Swal from "sweetalert2";

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
  z-index: 10000;

  .containerModal {
    width: 90%;
    max-width: 35.25rem;
    background-color: #161616;
    position: relative;
    border-radius: 6px;
    border-color: transparent;
    outline: none;
    height: auto;
    overflow: auto;
    display: flex;
    justify-content: center;
    align-items: center;

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
      background-color: #1df4c8;
      width: 100%;
      height: 80%;
      margin-top: 20px;
      margin-bottom: 20px;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h1 {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #4900da;
        font-family: "MADE Soulmaze Brush";
        font-size: 4.5vw;
        margin-top: 10px;
      }
      p {
        text-align: center;
        font-family: "MADE Soulmaze";
        font-size: 1.5vw;
        font-weight: bold;
        color: #161616;
      }

      form {
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 100%;

        .containInfo {
          display: flex;
          margin: 30px;

          .info {
            display: flex;
            flex-direction: column;

            label {
              font-family: "Founders Grotesk";
              color: #514d5b;
              text-align: justify;
              font-weight: bold;
            }

            .infoImg {
              font-family: "Filson Pro Book";
              border-radius: 1rem;
              font-size: 90%;
              width: 80%;
              margin-bottom: 20px;
              border: none;
              outline: none;
              padding: 5px;
            }

            .selecImg {
              border: none;
              font-family: "Filson Pro Book";
              position: relative;
              display: inline-block;
              height: 20vh;
            }
            .selecImg::before {
              background-color: #d977c8;
              color: white;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 1rem;
              content: "Seleccionar"; /* testo por defecto */
              position: absolute;
              padding: 6px;
              width: 84%;
            }

            .selecImg input[type="file"] {
              opacity: 0;
              width: 200px;
              height: 332px;
              display: inline-block;
            }

            #src-selecImg1::before {
              content: "Seleccionar Archivo 1";
            }

            #src-selecImg2::before {
              content: "Seleccionar Archivo 2";
            }
          }
        }

        span {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 20px;

          button {
            display: flex;
            background-color: #fff35f;
            padding: 1rem;
            color: #ffffff;
            border: none;
            border-radius: 1.25rem;
            color: #161616;
            font-family: "MADE Soulmaze";
            font-size: 0.75rem;
          }
        }
      }
    }
  }
`;

export const EditArticulo = ({ onClose, initialData }) => {
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState(initialData?.file || null);
  const [title, setTitle] = useState(initialData?.title || "");
  const [description, setDescription] = useState(
    initialData?.description || ""
  );
  const [url, setUrl] = useState(initialData?.url || "");

  const articuloForEdit = useSelector(
    (state) => state.articulos.articuloForEdit
  );

  useEffect(() => {
    if (articuloForEdit) {
      setSelectedFile(articuloForEdit.file || null);
      setTitle(articuloForEdit.title || "");
      setDescription(articuloForEdit.description || "");
    }
  }, [articuloForEdit]);

  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    updateImagePreview(event.target.files[0]);
  };

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const onDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const onUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();
    if (initialData) {
      try {
        const editData = {};
        if (selectedFile) editData.file = selectedFile;
        if (title) editData.title = title;
        if (description) editData.description = description;
        if (url) editData.url = url;
        dispatch(actionEditArti(initialData.id, { ...editData }));
        setSelectedFile(null);
        setTitle("");
        setDescription("");
        setUrl("");
        document.getElementById("preview").src = "";
        onClose();
        Swal.fire({
          icon: "success",
          title: "¡Imagen editada correctamente!",
          showConfirmButton: false,
          timer: 2500,
        }).finally(() => {
          location.reload();
        });
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error("initialData is null or not properly initialized.");
    }
  };

  const updateImagePreview = (file) => {
    if (file) {
      document.getElementById("preview").src = URL.createObjectURL(file);
    } else {
      document.getElementById("preview").src = "";
    }
  };

  return (
    <SyledModal>
      <div className="containerModal">
        <button className="buttonClose" onClick={onClose}>
          X
        </button>
        <div className="contenidoModal">
          <h1> EDITAR ARTICULO</h1>
          <p>¡LISTA PARA ACTUALIZAR!</p>
          <form onSubmit={onFormSubmit}>
            <div className="containInfo">
              <div className="info">
                <label htmlFor="title">Título:</label>
                <input
                className="infoImg"
                  type="text"
                  id="title"
                  value={title}
                  onChange={onTitleChange}
                  required
                />
                <label htmlFor="description"> Descripción:</label>
                <input
                className="infoImg"
                  type="text"
                  id="description"
                  value={description}
                  onChange={onDescriptionChange}
                  required
                />
                <label htmlFor="url">Url:</label>
                <input
                className="infoImg"
                  type="text"
                  id="url"
                  value={url}
                  onChange={onUrlChange}
                  required
                />
                <label htmlFor="file">Seleccionar imagen:</label>
                <input type="file" id="file" onChange={onFileChange} />
              </div>
              <div className="imagePrev">
                <img
                  id="preview"
                  style={{ width: "200px", height: "auto" }}
                />
              </div>
            </div>
            <span>
              <button type="submit">ACTUALIZAR</button>
            </span>
          </form>
        </div>
      </div>
    </SyledModal>
  );
};
