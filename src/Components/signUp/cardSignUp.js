import Styles from "./cardSignUp.module.css";
import googleLogo from "../../images/icons/login-page/google-sign-in.svg";
import logo from "../../images/icons/login-page/logo-chill.svg";
import ButtonUser from "../Fragment/Form/inputLogin";
import ButtonPw from "../Fragment/Form/inputPW";
import { Link } from "react-router-dom";

export default function CardSignUp() {
  return (
    <div className={Styles.Main}>
      <div className={Styles.Card}>
        <img src={logo} alt="logo-chill" className={Styles.ImgLogo} />
        <h1>Daftar</h1>
        <p>Selamat datang!</p>
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
              Kata Sandi
            </ButtonPw>
            <ButtonPw idInput="kataSandi" placeholder="Masukkan kata sandi">
              Konfirmasi Kata Sandi
            </ButtonPw>
          </form>
        </div>
        <div className={Styles.Validation}>
          <p>
            Sudah punya akun? <Link to="/login">Masuk</Link>
          </p>
        </div>
        <div className={Styles.DivButton}>
          <Link>
            <button className={Styles.Button}>Masuk</button>
          </Link>
          <p>Atau</p>
          <button className={Styles.Button}>
            <img src={googleLogo} alt="google-logo" /> Masuk dengan Google
          </button>
        </div>
      </div>
    </div>
  );
}
