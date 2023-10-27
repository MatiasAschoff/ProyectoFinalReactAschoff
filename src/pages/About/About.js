import React from "react";
import Header from "../../components/Header/Header";
const About = () => { 
    return (
    <>
      <Header showAs="Shadow" />
      <div className="about">
        <img
          src="https://res.cloudinary.com/dnd3sdnvo/image/upload/v1698354743/tienda-de-ropa-para-hombres.jpg_d1okof.png"
          alt="banner"
          className="about__banner"
        />
        <h1 className="about__title">
        Nikos Clothing is a family-owned men's clothing store with 10 years in business.<br></br><br></br>
At Nikos, the customer is our priority, which is why our garments are of excellent quality and at a good price.<br></br><br></br>
In our virtual store you can buy safely and we have shipping to the entire country.
        </h1>
      </div>
    </>
  );
};

export default About
