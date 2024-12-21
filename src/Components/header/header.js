import Styles from "./header.module.css";
import VolumeOff from "../../images/icons/homepage/volume-off.svg";
import InfoOutline from "../../images/icons/homepage/information-outline.svg";

export default function Header() {
  return (
    <header className={Styles.Main}>
      <div className={Styles.Header}></div>
      <div className={Styles.DivHeader}>
        <div>
          <h1>Duty After School</h1>
          <p>
            Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
            Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk
            siswa sekolah menengah. Mereka pun segera menjadi pejuang garis
            depan dalam perang.
          </p>
        </div>
        <div>
          <div>
            <button>Mulai</button>
            <button>
              <span>
                <img src={InfoOutline} alt="information" />
              </span>
              <span>Selengkapnya</span>
            </button>
            <span>18+</span>
          </div>
          <div>
            <button>
              <img src={VolumeOff} alt="Volume-off" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
