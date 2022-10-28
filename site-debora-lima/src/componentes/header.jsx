import React from "react";
import TelefoneIcon from "../imagens/telefone_icon.svg";

function Header() {
  return (
    <header className="header">
      <div className="flex flex-col pt-14">
        <span className="span-header">
          <strong>CUIDADO</strong> e <b>CARINHO</b> com as
          <br />
          crianças nos tratamentos de
        </span>
        <h1>
          <span className="h1"> </span>
        </h1>
        <div className="flex flex-col rounded-lg font-poppins font-normal text-[#f5f5f5] text-[20px] items-center justify-center ml-24 w-[250px] h-[100px] bg-[#E92267] mt-8 opacity-90 invisible md:visible">
          <div className="flex justify-start items-center">
            <img
              src={TelefoneIcon}
              alt="ícon de um telefone"
              className="w-[30px] mr-2"
            />
            <span>Agendar consulta</span>
          </div>
          <span>(37) 3690-9251</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
