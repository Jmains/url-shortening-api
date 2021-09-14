import { useEffect, useState } from "react";
import "./Navbar.css";
import cn from "classnames";
import throttle from "lodash.throttle";

export default function Navbar() {
  const [navIsToggled, setNavIsToggle] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleNavToggle = () => {
    setNavIsToggle((toggled) => !toggled);
  };

  useEffect(() => {
    const handleScroll = throttle(() => {
      const offset = 10;
      const { scrollTop } = document.documentElement;

      const scrolled = scrollTop > offset;
      setHasScrolled(scrolled);
    }, 300);

    handleScroll();
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn("sticky-top ", {
        scrolled: hasScrolled,
      })}
    >
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
