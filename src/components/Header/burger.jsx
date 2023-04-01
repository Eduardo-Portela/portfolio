import React, { useState } from "react";
import { StyledBurger } from "./style";
import { NavBar } from "./navBar";

export const Burger = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </StyledBurger>
      <NavBar open={open} />
    </>
  );
};
