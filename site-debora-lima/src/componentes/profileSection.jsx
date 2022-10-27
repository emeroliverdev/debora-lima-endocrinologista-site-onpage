import React from "react";
import Fade from "react-reveal/Fade";
import InstagramIcon from "../imagens/instagram_icon.svg";
import FotoPerfilMobile from "../imagens/foto_perfil_mobile.jpg";
import TelefoneIcon from "../imagens/telefone_icon.svg";

function profileSection() {
  return (
    <section>
      <div className="div-agendar">
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
      <div className="flex flex-col items-end w-[767px] mt-12">
        <Fade right>
          <h2 className="h2 mr-8" id="sobre-mim">
            Sobre mim
          </h2>
          <div className="div-line w-[650px] h-[4px] bg-[#E92267] mr-[125px] mt-1">
            {" "}
          </div>
        </Fade>
        <div className="sobre-mim-mobile">
          <Fade bottom>
            <img
              src={FotoPerfilMobile}
              alt="foto de perfil da doutora debora lima"
              className="foto-perfil-mobile"
            />
          </Fade>
          <div className="texto-sobre-mim">
            <div className="paragrafo-sobre-mim">
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
                Titulada em Pediatria pela Sociedade
                <br />
                Brasileira de Pediatria e em Endocrinologia
                <br />
                Pediátrica pela Sociedade Brasileira
                <br />
                de Endocrinologia e Metabologia.
                <br />
                <br />
                Após obter meu título de Endocrinologista
                <br />
                Pediátrica em São Paulo retornei para
                <br />
                Minas Gerais, Divinópolis, cidade que
                <br />
                acolheu a mim e miha família, onde tehno
                <br />
                muito orgulho de poder retribuir este
                <br />
                carinho com meu trabalho atendendo
                <br />
                Divinópolis e Região.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[150px] w-[767px] bg-[#E92267] flex justify-center items-center">
        <a href="https://instagram.com/dradebora_lima.endocrinoped?igshid=YmMyMTA2M2Y=">
          <img src={InstagramIcon} alt="icone do instagram" />
        </a>
        <a href="https://instagram.com/dradebora_lima.endocrinoped?igshid=YmMyMTA2M2Y=">
          <span className="text-7xl font-rochester font-bold text-[#f5f5f5] pl-6">
            Instagram
          </span>
        </a>
      </div>
    </section>
  );
}

export default profileSection;
