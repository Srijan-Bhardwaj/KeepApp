import React from "react";
import Style from "./Header.module.css";
import TextAnimation from "react-animate-text"; 

const Header = () => {
  return (
    <>
      <div className={Style.header}>
        <div className={Style.heading}>
          <span>
            <TextAnimation>BAHI KHATA</TextAnimation>
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
 