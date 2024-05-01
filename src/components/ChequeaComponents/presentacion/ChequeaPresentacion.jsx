import "./ChequeaPresentacion.scss";

const ChequeaPresentacion = () => {
  return (
    <>
        <section className="sectionChequeaPresentacion">
            <div className="sectionChequeaPresentacion__imgContainer">
                <img className="sectionChequeaPresentacion__imgContainer-imgCheems" src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336855/MONTAJE/CHEQUEA/2-1_gjbuhp.png" alt="Meme Cheems" />
                <img className="sectionChequeaPresentacion__imgContainer-imgTitle" src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336856/MONTAJE/CHEQUEA/2-chequea_zkxdxm.png" alt="Chequea"/>
            </div>
            <div className="sectionChequeaPresentacion__textContainer">
                <p className="sectionChequeaPresentacion__textContainer-text">
                <span className="sectionChequeaPresentacion__textContainer--bg">Cuenta un set de herramientas para ayudarte a </span>
                <span className="sectionChequeaPresentacion__textContainer--bg">verificar y valorar críticamente la información. </span>
                </p>
            </div>
        </section>
    </>
  );
};

export default ChequeaPresentacion;
