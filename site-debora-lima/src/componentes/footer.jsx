import React from "react";
import GoogleIcon from "../imagens/google_icon.svg";
import InstagramIcon from "../imagens/instagram_icon.svg";

function footer() {
  return (
    <div className="w-[767px] h-[630px] mt-4 bg-[#E92267]">
      <div className="flex-col w-full h-[370px] justify-start items-start ml-10 pt-10">
        <span className="font-poppins font-extrabold text-4xl text-[#F5F5F5]">
          NAVEGUE
        </span>
        <ul className="mt-4">
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
      <div className="flex justify-center">
        <a href="https://www.google.com.br/search?ved=1t:65428&_ga=2.188988715.1891366622.1665783409-1924530989.1663339519&q=Dra.+D%C3%A9bora+Lima+|+Endocrinologista+Infantil+Divin%C3%B3polis+MG&ludocid=1189964596597794438&lsig=AB86z5UqznHf0h4xgq5cnb0NKa-K#wptab=si:AC1wQDAXKblb4YtxZaDquKpQ5Js55CVph8NS1FIwBhgs6qyyHu8BGWGIQ615v5to0Y11PMQot28vQhgtB7mwLx1uBDTHgTR7KljlCs_4WawP13sLb7KL2H7QyxXQ0FO8Nz7qD7GsYfUOHFo-ohO74QAVGZMMom5q4SiBrvJvYz4VLg5pvaWY1pfPzmSTokFy2Nx71Dg6Mo5e">
          <img
            src={GoogleIcon}
            alt="ícone do Google"
            className="w-[80px] mr-6"
          />
        </a>
        <a href="https://instagram.com/dradebora_lima.endocrinoped?igshid=YmMyMTA2M2Y=">
          <img
            src={InstagramIcon}
            alt="ícone do instaram"
            className="w-[80px] ml-6"
          />
        </a>
      </div>
      <div className="text-center mt-6">
        <span className="font-poppins font-medium text-[#f5f5f5] text-2xl">
          &copy; 2022 Dra. Débora lima | Endocrinologista Pediátrica
          <br />
          Todos os direitos reservados
          <br />
          <br />
          Desenvolvido por E2D Marketing Digital & Sites
        </span>
      </div>
    </div>
  );
}

export default footer;
