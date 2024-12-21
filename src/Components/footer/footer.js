import Styles from "./footer.module.css";
import Logo from "../../images/icons/login-page/logo-chill.svg";
import Genre from "../Fragment/Footer-genre/genre";

import { useRef, useState } from "react";

export default function Footer() {
  return (
    <footer className={Styles.Footer}>
      <div className={Styles.Container}>
        <div>
          <img src={Logo} alt="logo-chill" />
          <p>@2023 Chill All Rights Reserved.</p>
        </div>
        <div>
          <Genre title="Genre" />
          <ul>
            <li>aksi</li>
            <li>anak-anak</li>
            <li>anime</li>
            <li>britania</li>
            <li>drama</li>
            <li>fantasi & fantasi ilmiah</li>
            <li>kejahatan</li>
            <li>kdrama</li>
            <li>komedi</li>
            <li>pertualangan</li>
            <li>perang</li>
            <li>romantis</li>
            <li>sains & alam</li>
            <li>thriller</li>
          </ul>
        </div>
        <div>
          <Genre title="Bantuan" />
          <ul>
            <li>FAQ</li>
            <li>kontak kami</li>
            <li>privasi</li>
            <li>syarat & ketentuan</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
