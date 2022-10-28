import React from "react";
import InstagramIcon from "../imagens/instagram_icon.svg";

function Footer() {
  return (
    <div className="w-[767px] md:w-[1350px] h-[630px] md:h-[360px] mt-0 bg-[#E92267]">
      <div className="flex-col w-full h-[370px] md:h-[230px] justify-start items-start ml-10 pt-10 md:pt-2">
        <span className="font-poppins font-extrabold text-4xl md:text-[30px] text-[#F5F5F5]">
          NAVEGUE
        </span>
        <ul className="mt-2 md:mt-0">
          <li className="li-footer">
            <a href="#inicio">Início</a>
          </li>
          <li className="li-footer">
            <a href="#sobre-mim">Sobre mim</a>
          </li>
          <li className="li-footer">
            <a href="#o-que-dizem">O que dizem?</a>
          </li>
          <li className="li-footer">
            <a href="#tratamentos">Tratamentos</a>
          </li>
          <li className="li-footer">
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center">
        <a href="https://instagram.com/dradebora_lima.endocrinoped?igshid=YmMyMTA2M2Y=">
          <img
            src={InstagramIcon}
            alt="ícone do instaram"
            className="w-[80px] md:w-[50px] ml-6 pr-1"
          />
        </a>
        <a href="https://instagram.com/dradebora_lima.endocrinoped?igshid=YmMyMTA2M2Y=">
          <span className="md:text-[30px] text-[40px] font-rochester text-[#f5f5f5] font-semibold pl-1">
            Instagram
          </span>
        </a>
      </div>
      <div className="text-center mt-6 md:mt-2">
        <span className="font-poppins font-medium text-[#f5f5f5] text-2xl md:text-[18px]">
          Dra. Débora lima | Endocrinologista Pediátrica
          <br />
          &copy;2022 - Todos os direitos reservados | Desenvolvido por E2D
          Marketing Digital & Sites
        </span>
      </div>
    </div>
  );
}

export default Footer;
