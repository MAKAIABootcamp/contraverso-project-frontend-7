import styled from "styled-components";

const StyledImagenes = styled.div `
    background-image: url("https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336875/MONTAJE/EXPRESA/18_txk2kg.png");
    height: 30rem;
    `
const StyledBackground = styled.img `
    
`

const StyledTextoImg = styled.img`
    width: 25rem;
    position: absolute;
    margin-top: 0;
    margin-left: -36rem;
`

const StyledImgCat = styled.img`
    width: 17rem;
    position: absolute;
    margin-top: 8rem;
    margin-left: 49rem;
`

const ImagenesExpresa = () => {
    return (
        <StyledImagenes>
        <StyledBackground src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336877/MONTAJE/EXPRESA/4-4_SUBR_nnp6gv.png" alt="Backgroun de la imagen"></StyledBackground>
<StyledTextoImg src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336880/MONTAJE/EXPRESA/4-imagenes_v7jgsf.png" alt="Imagen texto"></StyledTextoImg>
            <StyledImgCat src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336879/MONTAJE/EXPRESA/4-4_gqrlzp.png" alt="Gato leyendo"></StyledImgCat>


        </StyledImagenes>


    );
};

export default ImagenesExpresa