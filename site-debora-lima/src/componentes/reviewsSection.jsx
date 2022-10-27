import React from "react";
import Fade from "react-reveal/Fade";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/lib/styles.css";
import Avaliacao1 from "../imagens/avaliação_gmn_01.png";
import Avaliacao2 from "../imagens/avaliação_gmn_02.png";
import Avaliacao3 from "../imagens/avaliação_gmn_03.png";

function reviewsSection() {
  const options = {
    items: 1,
    rewind: true,
    autoplay: true,
    loop: true,
  };
  return (
    <div className="div-transicao-left">
      <Fade left>
        <h2 className="h2 ml-8" id="o-que-dizem">
          O que dizem?
        </h2>
        <div className="div-line w-[650px] h-[4px] bg-[#E92267] ml-[140px] mt-1">
          {" "}
        </div>
      </Fade>
      <div className="w-[750px] md:w-[500px] lg:w-[650px] m-auto pt-10 flex justify-center">
        <OwlCarousel options={options}>
          <img src={Avaliacao1} alt="avaliação do perfil google meu negocio" />
          <img src={Avaliacao2} alt="avaliação do perfil google meu negocio" />
          <img src={Avaliacao3} alt="avaliação do perfil google meu negocio" />
        </OwlCarousel>
      </div>
      <div className="flex justify-center w-full">
        <a href="https://bit.ly/3CCmlfi">
          <button
            type="button"
            className="btn w-[380px] h-[70px] lg:w-[275px] lg:h-[50px] lg:text-[18px]"
          >
            Ver mais avaliações
          </button>
        </a>
      </div>
    </div>
  );
}

export default reviewsSection;
