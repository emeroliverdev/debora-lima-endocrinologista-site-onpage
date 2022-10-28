import React from "react";
import Fade from "react-reveal/Fade";
import TelefoneIconFooter from "../imagens/telefone_icon_footer.svg";
import InstragraIconFooter from "../imagens/instagram_icon_footer.svg";
import LocalIcon from "../imagens/local_icon.svg";
import WatchIcon from "../imagens/watch_icon.svg";
import Consultorio from "../imagens/consultorio.jpg";

function contatcSection() {
  return (
    <div className="flex flex-col items-start w-[767px] mt-12">
      <Fade left>
        <h2 className="h2 ml-8" id="contato">
          Atendimento
        </h2>
        <div className="div-line w-[650px] h-[4px] bg-[#E92267] ml-[140px] mt-1">
          {" "}
        </div>
      </Fade>
      <div className="w-full md:w-[1350px] h-[1000px] md:h-[800px] bg-[#F9B3BC] mt-4 flex-col justify-center">
        <div className="div-contato mt-10 md:mt-4">
          <a href="tel:+553736909251">
            <img
              src={TelefoneIconFooter}
              alt="icone do instagram"
              className="w-[60px] md:w-[30px]"
            />
          </a>
          <a href="tel:+553736909251">
            <span className=" span-contato">(37) 3690-9251</span>
          </a>
        </div>
        <div className="div-contato mt-4 md:mt-0">
          <img
            src={WatchIcon}
            alt="icone do instagram"
            className="w-[60px] md:w-[30px]"
          />
          <span className="span-contato">
            Segunda - Sexta | 08h:00 às 17:00
          </span>
        </div>
        <div className="div-contato mt-4 md:mt-0">
          <a href="https://www.google.com.br/maps/dir/-20.1392128,-44.8954368/dra+debora+lima+endocrinologista/@-20.1404163,-44.8958622,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0xa0a58415f54c05:0x10839a7ef380a686!2m2!1d-44.8875513!2d-20.1409896">
            <img
              src={LocalIcon}
              alt="icone do instagram"
              className="w-[60px] md:w-[30px]"
            />
          </a>
          <spam className="text-4xl md:text-[25px] font-poppins font-semibold text-[#E92267] pl-2">
            Endereço:
          </spam>
        </div>
        <div className="font-poppins text-[30px] md:text-[20px] font-normal text-[#E92267] pl-[128px]">
          <p>
            R. Cel. João Notini, 331 - 6° Agendar
            <br />
            Centro | Divinópolis | MG
            <br />
            CEP: 35500-017
          </p>
        </div>
        <div className="font-poppins text-[30px] font-semibold text-[#E92267] mt-2 pl-[128px]">
          <button
            type="button"
            className="btn w-[220px] h-[45px] md:text-[22px] md:w-[200px] h-[40px]"
          >
            Como chegar
          </button>
        </div>
        <div className="div-contato mt-4 md:mt-2">
          <a href="https://instagram.com/dradebora_lima.endocrinoped?igshid=YmMyMTA2M2Y=">
            <img
              src={InstragraIconFooter}
              alt="icone do instagram"
              className="w-[63px] md:w-[30px]"
            />
          </a>
          <a href="https://instagram.com/dradebora_lima.endocrinoped?igshid=YmMyMTA2M2Y=">
            <span className="span-contato">@dradebora_lima.endocrinoped</span>
          </a>
        </div>
        <div className="w-full flex justify-center items-center mt-8 md:mt-4">
          <img
            src={Consultorio}
            alt="doutora Débora Lima em seu consultório"
            className="w-[720px]"
          />
        </div>
      </div>
    </div>
  );
}

export default contatcSection;
