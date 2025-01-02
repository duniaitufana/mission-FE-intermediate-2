import Styles from "./header.module.css";
import VolumeOff from "../../images/icons/homepage/volume-off.svg";
import InfoOutline from "../../images/icons/homepage/information-outline.svg";
import { useRef } from "react";
import Modal from "../modal/modal.js";
import API from "../../Api/dataMovie.json";

export default function Header({ name, link }) {
  const openModal = useRef();

  const getAPI = API.find(({ title }) => {
    return title === name;
  });

  const { title, isEpisode, genre, desc, cast, imgLandscape } = getAPI;

  function handleClick() {
    openModal.current.showModal();
  }
  return (
    <header className={Styles.Main}>
      <Modal
        ref={openModal}
        title={title}
        getIMG_second={imgLandscape}
        isEpisode={isEpisode}
        genre={genre}
        desc={desc}
        cast={cast}
        API={API}
      />
      <div
        className={Styles.Header}
        style={{
          backgroundImage: `url(${link})`,
        }}
      ></div>
      <div className={Styles.DivHeader}>
        <div>
          <h1>{title}</h1>
          <p>{desc}</p>
        </div>
        <div>
          <div>
            <button onClick={handleClick}>Mulai</button>
            <button onClick={handleClick}>
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
