import React from "react";
import Fade from "react-reveal/Fade";

function reviewsSection() {
  return (
    <div className="flex flex-col items-start w-[767px] mt-8">
      <Fade left>
        <h2
          className="h2 text-6xl text-[#E92267] font-poppins font-medium ml-8"
          id="o-que-dizem"
        >
          O que dizem?
        </h2>
        <div className="div-line w-[650px] h-[4px] bg-[#E92267] ml-[140px] mt-1">
          {" "}
        </div>
      </Fade>
    </div>
  );
}

export default reviewsSection;
