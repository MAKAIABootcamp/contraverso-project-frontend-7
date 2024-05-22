import styled from 'styled-components'
import CarruselValora from './CarruselValora'

const StyledValora = styled.div`
background-image: url("https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336860/MONTAJE/CONFRONTA/14_h5r9za.png");
background-size: 100% 100%;
background-repeat: no-repeat;
height: 95vh;
scroll-snap-align: start;
display: flex;
flex-direction: column;
`
const StyledTitle = styled.div`
width: 40%;
height: 20%;
display: flex;
justify-content: center;
align-items: center;
margin-left: 5%;
margin-top: 2%;

@media (max-width:800px){
  width: 100%;
  margin-left: 0;
  align-items: center;
}
@media (min-width:801px) and (max-width:1000px){
  width:60%;
  align-items: center;
}
`
const StyledBgTitle = styled.img`
width: 100%;
`
const StyledTextTitle = styled.p`
font-size: 6vw;
font-family: 'MADE Soulmaze Brush';
position: absolute;
color: #161616;
@media (max-width:800px){
  font-size: 12vw;
}
@media (min-width:801px) and (max-width:1000px){
  font-size: 8vw;
}
`

const StyledContainer = styled.div`
width: 100%;
height: 80%;
display: flex;
justify-content: center;
align-items: center;
position: relative;
@media (max-width:800px){

  align-items: flex-start;

}
`

const Valora = () => {
  return (
    <StyledValora>
      <StyledTitle>
        <StyledBgTitle src='https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336869/MONTAJE/CONFRONTA/3-2_SUBR_nv95le.png'></StyledBgTitle>
        <StyledTextTitle>VALORA</StyledTextTitle>
      </StyledTitle>
      <StyledContainer>
        <CarruselValora></CarruselValora>
      </StyledContainer>
    </StyledValora>
  )
}

export default Valora


