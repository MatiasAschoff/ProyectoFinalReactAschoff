import React from "react";
import Navbar from "../Navbar/Navbar";

const Header = ({ showAs }) => {
  return (
    <header
      className={`${showAs === "Shadow" ? "header header--shadow" : "header"}`}
    >
      
      <Navbar />
    </header>
  );
};

export default Header;
