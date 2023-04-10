import React from "react";
import { NavHeader } from "./style";

interface INavBar {
  open: boolean;
}

export const NavBar = ({ open }: INavBar) => {
  return (
    <NavHeader open={open}>
      <a href="#header">Sobre</a>
      <a href="#skills">Habilidades</a>
      <a href="#projects">Projetos</a>
      <a href="#contacts">Contatos</a>
    </NavHeader>
  );
};
