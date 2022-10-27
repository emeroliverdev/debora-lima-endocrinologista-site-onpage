import React from "react";
import Fade from "react-reveal/Fade";
import TelefoneIcon from "../imagens/telefone_icon.svg";

function treatmentsSection() {
  return (
    <div>
      <div className="flex flex-col items-end w-[767px] mt-16">
        <Fade right>
          <h2 className="h2 mr-8" id="tratamentos">
            Tratamentos
          </h2>
          <div className="div-line w-[650px] h-[4px] bg-[#E92267] mr-[125px] mt-1">
            {" "}
          </div>
        </Fade>
      </div>
      <Fade bottom>
        <div className="div-tratamentos">
          <div className="div-cabecalho">
            <h2 className="text-[40px] text-[#E92267] font-poppins font-bold">
              PUBERDADE PRECOCE
            </h2>
          </div>
          <div className="div-corpo text-center">
            <p className="text-[#f5f5f5] text-4xl font-poppins font-medium pt-10 px-2">
              Quando caracteríticas do início da fase adulta aparecem antes do
              tempo normal, tais como: pelos, odor axiliar, instabilidade de
              humor, etc. Esses sinais não devem ocorrer antes dos{" "}
              <b>08 anos</b> nas meninas e <b>09 anos</b> nos meninos. Se
              ocorrer deve ser insvestigado.
            </p>
          </div>
        </div>
      </Fade>
      <Fade bottom>
        <div className="div-tratamentos">
          <div className="div-cabecalho">
            <h2 className="text-[40px] text-[#E92267] font-poppins font-bold">
              DIABETES TIPO 1
            </h2>
          </div>
          <div className="div-corpo text-center">
            <p className="text-[#f5f5f5] text-4xl font-poppins font-medium pt-10 px-2">
              Doença crônica, auto-imune, mais frequente na adolescência. Caso
              em que o pâncreas produz pouca ou nenhuma insulina. Sintomas como
              sede excessiva, fome excessiva, cansaço e visão turva, podem ser
              indícios da doença. Não tem <b>CURA</b>, mas tem <b>TRATAMENTO</b>
              .
            </p>
          </div>
        </div>
      </Fade>
      <Fade bottom>
        <div className="div-tratamentos">
          <div className="div-cabecalho">
            <h2 className="text-[40px] text-[#E92267] font-poppins font-bold">
              PROBLEMAS DA TIREOIDE
            </h2>
          </div>
          <div className="div-corpo text-center">
            <p className="text-[#f5f5f5] text-4xl font-poppins font-medium pt-10 px-2">
              Alterações hormonais da Tireoide como o <b>Hipotireoidismo</b>{" "}
              (pouca produção hormonal) ou <b>Hipertireoidismo</b> (excesso de
              hotmônio) podem afetar o desenvolvimento e o crescimento da
              criança. Inclusive o desenvolvimento neurológico.
            </p>
          </div>
        </div>
      </Fade>
      <Fade bottom>
        <div className="div-tratamentos">
          <div className="div-cabecalho">
            <h2 className="text-[40px] text-[#E92267] font-poppins font-bold">
              OBSIDADE INFANTIL
            </h2>
          </div>
          <div className="div-corpo text-center">
            <p className="text-[#f5f5f5] text-4xl font-poppins font-medium pt-10 px-2">
              Dados do Ministério da Saúde de 2021 estimou que existam mais de 3
              milhões de crianças obesas no Brasil.
              <br />A obesidade infantil pode causar Diabetes, pressão alta e
              níveis elevados de Colesterol.
            </p>
          </div>
        </div>
      </Fade>
      <Fade bottom>
        <div className="div-tratamentos">
          <div className="div-cabecalho">
            <h2 className="text-[40px] text-[#E92267] font-poppins font-bold">
              BAIXA ESTATURA
            </h2>
          </div>
          <div className="div-corpo text-center">
            <p className="text-[#f5f5f5] text-4xl font-poppins font-medium pt-10 p-2">
              Quando a altura da criança ou adolescente está abaixo da média
              para a idade e sexo.
              <br />
              A causa pode ser genética ou ter relação com alguma patologia e
              precisa ser investigado.
              <br />
              Se diagnosticado a tempo existe tratamento para atingir a altura
              média esperada.
            </p>
          </div>
        </div>
      </Fade>
      <Fade bottom>
        <div className="div-tratamentos">
          <div className="div-cabecalho">
            <h2 className="text-[40px] text-[#E92267] font-poppins font-bold">
              SÍDROMES
            </h2>
          </div>
          <div className="div-corpo text-center">
            <p className="text-[#f5f5f5] text-4xl font-poppins font-medium pt-10 px-2">
              <b>NOONAN</b> - Doença genética, com vários sintomas possíveis. O
              acompanhamento médico é essencial.
              <br />
              <b>TURNER</b> - Doença genética onde a mulher nasce com apenas um
              cromossomo X.
              <br />
              <b>KLINEFELTER</b> - Doença genética onde o homem nasce com uma
              cópia extra do cromossomo X.
            </p>
          </div>
        </div>
      </Fade>
      <div className="div-agendar mt-6">
        <span className="text-4xl font-poppins text-[#f5f5f5] pl-6">
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
    </div>
  );
}

export default treatmentsSection;
