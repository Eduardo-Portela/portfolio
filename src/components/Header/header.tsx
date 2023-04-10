import { Headers } from "./style";
import { Burger } from "./burger";

export const Header = () => {
  return (
    <Headers id="header">
      <div>
        <a href="#header">
          <h2>Portfólio</h2>
        </a>
      </div>
      <Burger />
    </Headers>
  );
};
