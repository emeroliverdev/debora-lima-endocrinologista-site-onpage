import React from "react";
import Fade from "react-reveal/Fade";
import TelefoneIcon from "../imagens/telefone_icon.svg";

function TreatmentsSection() {
  return (
    <div>
      <div className="div-transicao-right">
        <Fade right>
          <h2 className="h2 mr-8" id="tratamentos">
            Tratamentos
          </h2>
          <div className="div-line"> </div>
        </Fade>
      </div>
      <div className="md:flex flex-wrap justify-around">
        <div className="div-tratamentos">
          <div className="div-cabecalho">
            <h2 className="h2-card">PUBERDADE PRECOCE</h2>
          </div>
          <div className="div-corpo text-center">
            <p className="p-card">
              Quando caracteríticas do início da fase adulta aparecem antes do
              tempo normal, tais como: pelos, odor axiliar, instabilidade de
              humor, etc. Esses sinais não devem ocorrer antes dos{" "}
              <b>08 anos</b> nas meninas e <b>09 anos</b> nos meninos. Se
              ocorrer deve ser insvestigado.
            </p>
          </div>
        </div>
        <div className="div-tratamentos">
          <div className="div-cabecalho">
            <h2 className="h2-card">DIABETES TIPO 1</h2>
          </div>
          <div className="div-corpo text-center">
            <p className="p-card">
              Doença crônica, auto-imune, mais frequente na adolescência. Caso
              em que o pâncreas produz pouca ou nenhuma insulina. Sintomas como
              sede excessiva, fome excessiva, cansaço e visão turva, podem ser
              indícios da doença. Não tem <b>CURA</b>, mas tem <b>TRATAMENTO</b>
              .
            </p>
          </div>
        </div>
        <div className="div-tratamentos">
          <div className="div-cabecalho">
            <h2 className="h2-card">PROBLEMAS DA TIREOIDE</h2>
          </div>
          <div className="div-corpo text-center">
            <p className="p-card">
              Alterações hormonais da Tireoide como o <b>Hipotireoidismo</b>{" "}
              (pouca produção hormonal) ou <b>Hipertireoidismo</b> (excesso de
              hotmônio) podem afetar o desenvolvimento e o crescimento da
              criança. Inclusive o desenvolvimento neurológico.
            </p>
          </div>
        </div>
        <div className="div-tratamentos">
          <div className="div-cabecalho">
            <h2 className="h2-card">OBSIDADE INFANTIL</h2>
          </div>
          <div className="div-corpo text-center">
            <p className="p-card">
              Dados do Ministério da Saúde de 2021 estimou que existam mais de 3
              milhões de crianças obesas no Brasil.
              <br />A obesidade infantil pode causar Diabetes, pressão alta e
              níveis elevados de Colesterol.
            </p>
          </div>
        </div>
        <div className="div-tratamentos">
          <div className="div-cabecalho">
            <h2 className="h2-card">BAIXA ESTATURA</h2>
          </div>
          <div className="div-corpo text-center">
            <p className="p-card">
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
        <div className="div-tratamentos">
          <div className="div-cabecalho">
            <h2 className="h2-card">SÍDROMES</h2>
          </div>
          <div className="div-corpo text-center">
            <p className="p-card">
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
      </div>
      <div className="invisible absolute md:relative flex justify-center mt-[100px] mb-[100px] md:visible">
        <a href="tel:+553736909251">
          <button className="btn w-[320px] h-[55px]" type="button">
            Agendar consulta
          </button>
        </a>
      </div>
      <div className="div-cta mt-6 md:invisible md:absolute">
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

export default TreatmentsSection;
