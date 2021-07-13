import React from "react";
import CardContainer from "./card";

function Hero({ url, textOne, textTwo }) {
  return (
    <section
      className="text-gray-700 body-font  inner-shadow"
      style={{
        background: `url(${url}) center center`,
      }}
    >
      <div className=" mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <CardContainer textOne={textOne} textTwo={textTwo} />
      </div>
    </section>
  );
}

export default Hero;
