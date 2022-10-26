import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="flex flex-col pb-2">
        <span className="span-header">
          <strong>CUIDADO</strong> e <b>CARINHO</b> com as
        </span>
        <span className="span-header">crianças nos tratamentos de</span>
        <h1 className="pl-2 pt-2">
          <span className="text-[45px] font-poppins leading-[50px] text-[#E92267] pl-6 font-semibold">
            {" "}
          </span>
        </h1>
      </div>
    </header>
  );
}

export default Header;
