import React, { useState } from "react";
import LogoNav from "../imagens/logo_nav.jpg";
import "../index.css";

function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="containerLogoMenu">
        <img
          src={LogoNav}
          alt="logotipo doutora débora lima"
          className="logoNav"
        />
        <button
          onClick={() => setOpen(!open)}
          className="ion-icon"
          type="button"
        >
          <ion-icon name={open ? "close" : "menu-sharp"} />
        </button>
      </div>
      <ul className={`menu ${open ? "top-[150px]" : "opacity-0"}`}>
        <li className="li hover:text-[#F9B3BC] duration-600">
          <a href="/">Início</a>
        </li>
        <li className="li  hover:text-[#F9B3BC] duration-600">
          <a href="#sobre-mim">Sobre mim</a>
        </li>
        <li className="li  hover:text-[#F9B3BC] duration-600">
          <a href="#o-que-dizem">O que dizem?</a>
        </li>
        <li className="li  hover:text-[#F9B3BC] duration-600">
          <a href="/">Tratamentos</a>
        </li>
        <li className="li  hover:text-[#F9B3BC] duration-600">
          <a href="/">Contato</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
