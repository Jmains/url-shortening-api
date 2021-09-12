import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [navIsToggled, setNavIsToggle] = useState(false);

  const handleNavToggle = () => {
    setNavIsToggle((toggled) => !toggled);
  };

  return (
    <header>
      <nav className="nav">
        <a className="nav__logo" href="/">
          Shortly
        </a>
        <button onClick={handleNavToggle} class="nav-toggle" aria-label="open navigation">
          <span class="hamburger"></span>
        </button>

        <ul class={navIsToggled ? "nav__list nav--visible" : "nav__list"}>
          <li class="nav__item">
            <a class="nav__link" href="/">
              Features
            </a>
          </li>
          <li class="nav__item">
            <a class="nav__link" href="/">
              Pricing
            </a>
          </li>
          <li class="nav__item">
            <a class="nav__link" href="/">
              Resources
            </a>
          </li>
          <div className="nav__item nav__item--divider"></div>
          <li class="nav__item">
            <a class="nav__link" href="/">
              Login
            </a>
          </li>
          <li class="nav__item">
            <a class="nav__link nav__link--signup" href="/">
              Sign Up
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
