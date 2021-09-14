import { useEffect, useState } from "react";
import "./Navbar.css";
import cn from "classnames";
import throttle from "lodash.throttle";

export default function Navbar() {
  const [navIsToggled, setNavIsToggled] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleNavToggle = () => {
    setNavIsToggled((toggled) => !toggled);
  };

  const handleEscape = (ev) => {
    if (ev.key === "Esc" || ev.key === "Escape") {
      setNavIsToggled(false);
    }
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
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("scroll", handleScroll);
      document.removeEventListener("keydown", handleEscape);
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
        <button
          type="button"
          onClick={handleNavToggle}
          class="nav-toggle"
          aria-expanded={navIsToggled}
          aria-label="open navigation"
        >
          <span
            class={cn("hamburger ", {
              "hamburger-toggled": navIsToggled,
            })}
          ></span>
        </button>

        <div
          className={navIsToggled ? "nav__listContainer nav--visible" : "nav__listContainer"}
        >
          <button
            tabIndex="-1"
            onClick={handleNavToggle}
            className="nav__dropdown-exit"
          ></button>
          <ul className="nav__list-pri">
            <li class="nav__item">
              <a class="nav__link" href="/" tabIndex="0">
                Features
              </a>
            </li>
            <li class="nav__item">
              <a tabIndex="0" class="nav__link" href="/home">
                Pricing
              </a>
            </li>
            <li tabIndex="0" class="nav__item">
              <a class="nav__link" href="/">
                Resources
              </a>
            </li>
          </ul>

          <div role="separator" className="nav__item nav__item--divider"></div>

          <ul className="nav__list-sec">
            <li class="nav__item">
              <a tabIndex="0" class="nav__link" href="/home">
                Login
              </a>
            </li>
            <li class="nav__item">
              <a tabIndex="0" class="nav__link nav__link--signup" href="/">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
