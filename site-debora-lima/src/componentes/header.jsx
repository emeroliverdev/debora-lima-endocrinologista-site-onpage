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
        <div className="div-fone-desktop">
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
