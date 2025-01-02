import Styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import Logo from "../../images/icons/login-page/logo-chill.svg";
import LogoIcon from "../../images/icons/homepage/Logo-chill-icon.svg";
import Profile from "../../images/icons/homepage/photo-profile.svg";
import Hide from "../../images/icons/homepage/hide.svg";
import { useState } from "react";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  window.addEventListener("resize", () => {
    checkWindow();
  });

  const checkWindow = function () {
    if (window.innerWidth < 600) {
      return setIsMobile(true);
    } else {
      return setIsMobile(false);
    }
  };
  return (
    <nav>
      <ul className={Styles.UlNav}>
        <div>
          <Link to="/homepage">
            <li>
              {isMobile ? (
                <img src={LogoIcon} alt="logo-chill" />
              ) : (
                <img src={Logo} alt="logo-chill" />
              )}
            </li>
          </Link>
          <Link to="/pages/series">
            <li>Series</li>
          </Link>
          <Link to="/pages/film">
            <li>Film</li>
          </Link>
          <Link to="">
            <li>Daftar Saya</li>
          </Link>
        </div>
        <div>
          <li>
            <img src={Profile} alt="Photo-profile" />
          </li>
          <li>
            <img src={Hide} alt="hide-profile" />
          </li>
        </div>
      </ul>
    </nav>
  );
}
