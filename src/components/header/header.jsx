import React from "react";
import { useState } from "react";
import css from "./header.module.css";


export const Header = ({todoLen,counter}) => {


  return (
    <header className={css.header}>
      <img src="logo.png" alt="" className={css.logo} /> Todos {counter} / {todoLen}
    </header>
  );
};

export default Header;
