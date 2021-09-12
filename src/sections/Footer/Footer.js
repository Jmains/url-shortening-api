import "./Footer.css";
import facebookIcon from "../../images/icon-facebook.svg";
import twitterIcon from "../../images/icon-twitter.svg";
import pinterestIcon from "../../images/icon-pinterest.svg";
import instagramIcon from "../../images/icon-instagram.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <a href="/" className="footer__logo">
          Shortly
        </a>
        <div className="footer__content">
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
          <div className="footer__col">
            <ul className="footer__col--socials">
              <li className="footer__col--socialItem">
                <a href="/" className="footer__col--socialLink">
                  <img src={facebookIcon} alt="" srcset="" />
                </a>
              </li>
              <li className="footer__col--socialItem">
                <a href="/" className="footer__col--socialLink">
                  <img src={twitterIcon} alt="" srcset="" />
                </a>
              </li>
              <li className="footer__col--socialItem">
                <a href="/" className="footer__col--socialLink">
                  <img src={pinterestIcon} alt="" />
                </a>
              </li>
              <li className="footer__col--socialItem">
                <a href="/" className="footer__col--socialLink">
                  <img src={instagramIcon} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
