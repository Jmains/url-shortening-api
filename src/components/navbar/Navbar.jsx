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
    if (ev.key === "Esc" || ev.key === "Escape") setNavIsToggled(false);
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
      <nav role="navigation" className="nav container">
        <a className="nav__logo" href="/">
          Shortly
        </a>
        <button
          type="button"
          onClick={handleNavToggle}
          className="nav-toggle"
          aria-expanded={navIsToggled}
          aria-label="open navigation"
        >
          <span className={cn("hamburger ", { "hamburger-toggled": navIsToggled })} />
        </button>

        <div className={cn("nav__listContainer ", { "nav--visible": navIsToggled })}>
          <button tabIndex="-1" onClick={handleNavToggle} className="nav__dropdown-exit" />
          <ul aria-orientation="vertical" role="menu" className="nav__list-pri">
            <li className="nav__item">
              <a role="menuitem" className="nav__link" href="/" tabIndex="0">
                Features
              </a>
            </li>
            <li className="nav__item">
              <a role="menuitem" id="pricing" tabIndex="0" className="nav__link" href="/">
                Pricing
              </a>
            </li>
            <li className="nav__item">
              <a role="menuitem" className="nav__link" href="/" tabIndex="0">
                Resources
              </a>
            </li>
          </ul>

          <div role="separator" className="nav__item nav__item--divider"></div>

          <ul className="nav__list-sec">
            <li className="nav__item">
              <a tabIndex="0" className="nav__link" href="/">
                Login
              </a>
            </li>
            <li className="nav__item">
              <a tabIndex="0" className="nav__link nav__link--signup" href="/">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
