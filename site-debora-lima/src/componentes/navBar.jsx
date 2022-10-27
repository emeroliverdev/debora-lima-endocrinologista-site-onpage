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
          id="inicio"
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
        <li className="li-navbar hover:text-[#F9B3BC] duration-300">
          <a href="#inicio">Início</a>
        </li>
        <li className="li-navbar  hover:text-[#F9B3BC] duration-300">
          <a href="#sobre-mim">Sobre mim</a>
        </li>
        <li className="li-navbar  hover:text-[#F9B3BC] duration-300">
          <a href="#o-que-dizem">O que dizem?</a>
        </li>
        <li className="li-navbar  hover:text-[#F9B3BC] duration-300">
          <a href="#tratamentos">Tratamentos</a>
        </li>
        <li className="li-navbar  hover:text-[#F9B3BC] duration-300">
          <a href="#contato">Contato</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
