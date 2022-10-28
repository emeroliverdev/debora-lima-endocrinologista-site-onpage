import React from "react";
import Fade from "react-reveal/Fade";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/lib/styles.css";
import Avaliacao1 from "../imagens/avaliação_gmn_01.png";
import Avaliacao2 from "../imagens/avaliação_gmn_02.png";
import Avaliacao3 from "../imagens/avaliação_gmn_03.png";
import Avaliacao5 from "../imagens/avaliação_gmn_05.png";

function ReviewsSection() {
  const options = {
    items: 1,
    rewind: true,
    autoplay: true,
    loop: true,
  };
  return (
    <div className="div-transicao-right">
      <Fade right>
        <h2 className="h2 ml-8" id="o-que-dizem">
          O que dizem?
        </h2>
        <div className="div-line ml-[140px]"> </div>
      </Fade>
      <div className="w-[750px] md:w-[500px] lg:w-[650px] m-auto pt-10 flex justify-center">
        <OwlCarousel options={options}>
          <img src={Avaliacao1} alt="avaliação do perfil google meu negocio" />
          <img src={Avaliacao2} alt="avaliação do perfil google meu negocio" />
          <img src={Avaliacao3} alt="avaliação do perfil google meu negocio" />
          <img src={Avaliacao5} alt="avaliação do perfil google meu negocio" />
        </OwlCarousel>
      </div>
    </div>
  );
}

export default ReviewsSection;
