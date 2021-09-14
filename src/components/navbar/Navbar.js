import { useState } from "react";
import "./Navbar.css";
import cn from "classnames";

export default function Navbar() {
  const [navIsToggled, setNavIsToggle] = useState(false);

  const handleNavToggle = () => {
    setNavIsToggle((toggled) => !toggled);
  };

  return (
    <header className="sticky-top">
      <nav className="nav container">
        <a className="nav__logo" href="/">
          Shortly
        </a>
        <button onClick={handleNavToggle} class="nav-toggle" aria-label="open navigation">
          <span
            class={cn("hamburger ", {
              "hamburger-toggled": navIsToggled,
            })}
          ></span>
        </button>

        <div
          className={navIsToggled ? "nav__listContainer nav--visible" : "nav__listContainer"}
        >
          <button onClick={handleNavToggle} className="nav__dropdown-exit"></button>
          <ul className="nav__list-pri">
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
          </ul>

          <div className="nav__item nav__item--divider"></div>

          <ul className="nav__list-sec">
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
        </div>
      </nav>
    </header>
  );
}
