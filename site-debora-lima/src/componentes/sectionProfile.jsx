import React from "react";
import InstagramIcon from "../imagens/instagram_icon.svg";

function sectionProfile() {
  return (
    <section>
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
      <div className="flex flex-col items-end w-[767px] mt-4">
        <h2 className="h2 text-5xl text-[#E92267] font-poppins font-medium">
          Sobre mim
        </h2>
        <div className="div-line w-[600px] h-[4px] bg-[#E92267]"> </div>
      </div>
    </section>
  );
}

export default sectionProfile;
