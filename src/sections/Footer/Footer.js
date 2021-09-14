import "./Footer.css";
import { Facebook, Instagram, Pinterest, Twitter } from "../../icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__col footer__logoWrapper">
            <a href="/" className="footer__logo">
              Shortly
            </a>
          </div>
          <div className="footer__col">
            <p className="footer__col--title">Features</p>
            <ul className="footer__col--linksContainer">
              <li className="footer__col--item">
                <a href="/" className="footer__col--link">
                  Link Shortening
                </a>
              </li>
              <li className="footer__col--item">
                <a href="/" className="footer__col--link">
                  Branded Links
                </a>
              </li>
              <li className="footer__col--item">
                <a href="/" className="footer__col--link">
                  Analytics
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__col">
            <p className="footer__col--title">Resources</p>
            <ul className="footer__col--linksContainer">
              <li className="footer__col--item">
                <a href="/" className="footer__col--link">
                  Blog
                </a>
              </li>
              <li className="footer__col--item">
                <a href="/" className="footer__col--link">
                  Developers
                </a>
              </li>
              <li className="footer__col--item">
                <a href="/" className="footer__col--link">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__col">
            <p className="footer__col--title">Company</p>
            <ul className="footer__col--linksContainer">
              <li className="footer__col--item">
                <a href="/" className="footer__col--link">
                  About
                </a>
              </li>
              <li className="footer__col--item">
                <a href="/" className="footer__col--link">
                  Our Team
                </a>
              </li>
              <li className="footer__col--item">
                <a href="/" className="footer__col--link">
                  Careers
                </a>
              </li>
              <li className="footer__col--item">
                <a href="/" className="footer__col--link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__col socials__col">
            <ul className="footer__col--socials">
              <li className="footer__col--socialItem">
                <a href="/" className="footer__col--socialLink">
                  <Facebook className="footer__col--link" />
                  {/* <img src={facebookIcon} alt="" srcset="" /> */}
                </a>
              </li>
              <li className="footer__col--socialItem">
                <a href="/" className="footer__col--socialLink">
                  <Twitter className="footer__col--link" />
                </a>
              </li>
              <li className="footer__col--socialItem">
                <a href="/" className="footer__col--socialLink">
                  <Pinterest className="footer__col--link" />
                </a>
              </li>
              <li className="footer__col--socialItem">
                <a href="/" className="footer__col--socialLink">
                  <Instagram className="footer__col--link" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
