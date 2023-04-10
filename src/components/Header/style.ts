import styled from "styled-components";

export const Headers = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 65px;
  h2 {
    color: white;
  }

  button {
    font-size: 30px;
  }
  @media (min-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #f1f1f1;
    color: white;
    height: 65px;

    h2 button {
      border: none;
      background-color: transparent;
      color: white;
    }

    & button {
      display: none;
    }
  }
`;

export const NavHeader = styled.nav<IStyledBurger>`
  display: flex;
  flex-flow: column nowrap;
  background-color: var(--color-grey-900);
  border: 1px solid black;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 250px;
  justify-content: space-evenly;
  font-size: var(--font-size-20);
  padding-left: 16px;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;

  & a {
    color: white;
  }

  @media (min-width: 800px) {
    position: relative;
    display: flex;
    justify-content: flex-end;
    gap: 48px; 
    flex-flow: row nowrap;
    top:0;
    min-width: 30%;
    height: 65px;
    border: none;
    align-items: center;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(0)")};
  }
`;

interface IStyledBurger {
  open: boolean;
}

export const StyledBurger = styled.div<IStyledBurger>`
  width: var(--font-size-32);
  height: var(--font-size-32);
  position: fixed;
  top: 15px;
  right: 20px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  border-radius: 18px;
  z-index: 20;

  div {
    width: var(--font-size-32);
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ccc" : "#333")};
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0deg)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0deg)")};
    }
  }

  @media (min-width: 800px) {
    display: none;
  }
`;
