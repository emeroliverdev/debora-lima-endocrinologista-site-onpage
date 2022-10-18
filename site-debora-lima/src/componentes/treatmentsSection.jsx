import React from "react";
import Fade from "react-reveal/Fade";

function treatmentsSection() {
  return (
    <div>
      <div className="flex flex-col items-end w-[767px] mt-10">
        <Fade right>
          <h2
            className="h2 text-7xl text-[#E92267] font-poppins font-semibold mr-8"
            id="tratamentos"
          >
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
            <h2 className="text-5xl text-[#E92267] font-poppins font-bold">
              PATOLOGIA
            </h2>
          </div>
          <div className="div-corpo text-center">
            <p className="text-[#f5f5f5] text-4xl font-poppins font-semibold pt-10">
              Testando o contraste
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default treatmentsSection;
