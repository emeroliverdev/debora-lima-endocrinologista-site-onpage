import React from "react";
import Fade from "react-reveal/Fade";
import FotoPerfilMobile from "../imagens/foto_perfil_mobile.jpg";
import FotoPerfilDesktop from "../imagens/foto_perfil_desktop.jpg";
import TelefoneIcon from "../imagens/telefone_icon.svg";

function ProfileSection() {
  return (
    <section>
      <div className="div-cta md:invisible md:h-[0px]">
        <span className="text-4xl font-poppins text-[#f5f5f5]">
          Agendar Consulta
        </span>
        <div className="flex items-center pt-4">
          <a href="tel:+553736909251">
            <img
              src={TelefoneIcon}
              alt="icone do instagram"
              className="w-[60px]"
            />
          </a>
          <a href="tel:+553736909251">
            <span className="text-5xl font-poppins text-[#f5f5f5] pl-6">
              Ligar
            </span>
          </a>
        </div>
      </div>
      <div className="div-transicao-right">
        <Fade right>
          <h2 className="h2 mr-8" id="sobre-mim">
            Sobre mim
          </h2>
          <div className="div-line"> </div>
        </Fade>
      </div>
      <div className="sobre-mim-mobile">
        <Fade bottom>
          <img
            src={FotoPerfilMobile}
            alt="foto de perfil da doutora debora lima"
            className="foto-perfil-mobile shadow-lg shadow-gray-400"
          />
        </Fade>
        <Fade left>
          <img
            src={FotoPerfilDesktop}
            alt="foto de perfil doutora débora lima"
            className="invisible md:visible md:h-[350px] lg:h-[500px] shadow-lg shadow-gray-400"
          />
        </Fade>
        <div className="texto-sobre-mim">
          <div className="paragrafo-sobre-mim">
            <Fade big>
              <p className="md:text-[20px] text-[38px] font-semibold md:leading-[22px]">
                Dra. Débora Lima
              </p>
              <p>CRM: 80.616 | RQE: 45.787</p>
              <br />
              <p>
                Olá! Seja bem-vindo(a).
                <br />
                Gostaria de me aprensentar à você.
                <br />
                <br />
                Sou Natural de São Gonçalo do Pará-MG.
                <br />
                Médica com mais de <b>10 anos</b> de experiência,
                <br />
                formada pela Universidade do Vale
                <br />
                do Sapucaí, Pouso Alegre-MG.
                <br />
                <br />
                Sou <b>Pediatra</b> e <b>Endocrinologista Pediátrica</b>
                <br />
                formada pela <b>Santa Casa</b> de São Paulo.
                <br />
                <br />
                Após obter meu título de Endocrinologista
                <br />
                Pediátrica em São Paulo retornei para
                <br />
                Minas Gerais, Divinópolis, cidade que
                <br />
                acolheu a mim e miha família, onde tenho
                <br />
                muito orgulho de poder retribuir este
                <br />
                carinho com meu trabalho atendendo
                <br />
                Divinópolis e Região.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;
