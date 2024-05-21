import { collection, getDocs } from "@firebase/firestore";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { db } from "../../../Firebase/firebaseConfig";

const CarouselContainer = styled.div`
  max-width: 70%;
  margin-bottom: 5%;
  position: relative;
  z-index: 3;
`;

const CustomSlider = styled(Slider)`
  .slick-slide {
    padding: 0 10px;
    @media (max-width: 800px) {
      padding: 0;
    }
  }

  .slick-slide img {
    height: auto;
    border-radius: 5%;
    max-width: 100%;
  }

  .slick-slide-content {
    position: relative;
    overflow: hidden;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .slick-slide-content img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-bottom: 5%;
  }

  .slick-prev {
    left: -45px;
  }

  .slick-prev:before,
  .slick-next:before {
    display: inline-block;
    font-size: 40px;
    border-radius: 55%;
    transition: transform 0.3s ease;
    color: #4100CE;
    @media (max-width: 800px) {
      font-size: 20px;
    }
  }

  .slick-prev:hover:before,
  .slick-next:hover:before {
    color: #4100CE;
    transform: rotate(-180deg);
    font-size: 45px;
    @media (max-width: 800px) {
      font-size: 25px;
    }
  }
`;

const StyledTitle = styled.p`
  font-family: "Filson Pro Book";
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  background-color: #1df0c22f;
  margin-top: 5%;
  margin-bottom: 5%;
  border-radius: 5%;
  padding: 3%;
  width: 100%;
  font-size: 15px;
  line-height: 1.5;
  text-align: center;
`;



const CarruselProceso = () => {
  const [procesos, setProcesos] = useState([]);

  useEffect(() => {
    const fetchProceso = async () => {
      try {
        const procesoCollection = collection(db, "somosNuestroProceso");
        const procesoSnapshot = await getDocs(procesoCollection);
        const procesoList = procesoSnapshot.docs.map((doc) => doc.data());
        console.log("Proceso fetched: ", procesoList);
        setProcesos(procesoList);
      } catch (error) {
        console.error("Error fetching Proceso: ", error);
      }
    };

    fetchProceso();
  }, []);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  
    focusOnSelect: false,
    autoplaySpeed: 2000,
    initialSlide: 0,
   
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2, 
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <CarouselContainer>
      <CustomSlider {...settings}>
        {procesos.map((proceso, index) => (
          <div key={index}>
            <div className="slick-slide-content">
              <img src={proceso.poster} alt={`Poster ${index + 1}`} />
              <StyledTitle>{proceso.title}</StyledTitle>
            </div>
          </div>
        ))}
      </CustomSlider>
    </CarouselContainer>
  );
}

export default CarruselProceso
