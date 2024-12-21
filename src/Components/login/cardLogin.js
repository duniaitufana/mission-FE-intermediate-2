import Styles from "./cardLogin.module.css";
import googleLogo from "../../images/icons/login-page/google-sign-in.svg";
import logo from "../../images/icons/login-page/logo-chill.svg";
import ButtonUser from "../Fragment/Form/inputLogin";
import ButtonPw from "../Fragment/Form/inputPW";
import { Link } from "react-router-dom";

export default function CardLogin() {
  return (
    <div className={Styles.Main}>
      <div className={Styles.Card}>
        <img src={logo} alt="logo-chill" />
        <h1>Masuk</h1>
        <p>Selamat datang kembali!</p>
        <div className={Styles.DivForm}>
          <form className={Styles.Form}>
            <ButtonUser
              idInput="username"
              type="text"
              placeholder="Masukkan username"
            >
              Username
            </ButtonUser>
            <ButtonPw idInput="kataSandi" placeholder="Masukkan kata sandi">
              Kata sandi
            </ButtonPw>
          </form>
        </div>
        <div className={Styles.Validation}>
          <p>
            Belum punya akun? <Link to="/signup">Daftar</Link>
          </p>
          <p>Lupa kata sandi?</p>
        </div>
        <div className={Styles.DivButton}>
          <button>Masuk</button>
          <button>
            <img src={googleLogo} alt="google-logo" /> Masuk dengan Google
          </button>
        </div>
      </div>
    </div>
  );
}
