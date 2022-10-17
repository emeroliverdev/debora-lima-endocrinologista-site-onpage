import React from "react";
import Fade from "react-reveal/Fade";
import Avaliacao1 from "../imagens/avaliação_gmn_01.png";
import Avaliacao2 from "../imagens/avaliação_gmn_02.png";
import Avaliacao3 from "../imagens/avaliação_gmn_03.png";

function reviewsSection() {
  return (
    <div className="flex flex-col items-start w-[767px] mt-8">
      <Fade left>
        <h2
          className="h2 text-6xl text-[#E92267] font-poppins font-medium ml-8"
          id="o-que-dizem"
        >
          O que dizem?
        </h2>
        <div className="div-line w-[650px] h-[4px] bg-[#E92267] ml-[140px] mt-1">
          {" "}
        </div>
      </Fade>
      <div>
        <div className="w-[767px] flex justify-center mt-10">
          <a href="https://bit.ly/3CCmlfi">
            <img
              src={Avaliacao1}
              alt="avaliação do perfil google meu negocio"
              className="w-[650px]"
            />
          </a>
          <a href="https://bit.ly/3CCmlfi">
            <img
              src={Avaliacao2}
              alt="avaliação do perfil google meu negocio"
              className="w-[650px]"
            />
          </a>
          <a href="https://bit.ly/3CCmlfi">
            <img
              src={Avaliacao3}
              alt="avaliação do perfil google meu negocio"
              className="w-[650px]"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default reviewsSection;
