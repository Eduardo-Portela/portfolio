import React from "react";
import { NavHeader } from "./style";

interface INavBar {
  open: boolean;
}

export const NavBar = ({ open }: INavBar) => {
  return (
    <NavHeader open={open}>
      <a href="#">Sobre</a>
      <a href="#">Habilidades</a>
      <a href="#">Projetos</a>
      <a href="#">Contatos</a>
    </NavHeader>
  );
};
