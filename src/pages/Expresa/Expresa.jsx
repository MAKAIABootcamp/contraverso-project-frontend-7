import InicioExpresa from "../../components/Expresa/InicioExpresa";
import PodcastExpresa from "../../components/Expresa/PodcastExpresa";
import FanzinesExpresa from "../../components/Expresa/FanzinesExpresa";
import ImagenesExpresa from "../../components/Expresa/ImagenesExpresa";

import "./Expresa.scss";


const Expresa = () => {
  return (
      <>
        <div className="expresa">
          <InicioExpresa/>
          <PodcastExpresa/>
          <FanzinesExpresa/>
          <ImagenesExpresa/>
        </div>
        
      </>
  )
};

export default Expresa;