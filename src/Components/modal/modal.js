import Styles from "./modal.module.css";
import { createPortal } from "react-dom";
import { forwardRef } from "react";
import VolumeOff from "../../images/icons/homepage/volume-off.svg";
import ShowEpisodes from "../Fragment/Show-episode/ShowEpisode.js";
import ShowRecomend from "../Fragment/showRecomend/showRecomed.js";

const Modal = forwardRef(function Modal(
  {
    title,
    rate,
    getIMG,
    getIMG_second,
    adult,
    isEpisode,
    genre,
    trailer,
    cast,
    desc,
    API,
  },
  ref
) {
  function getEpisode(nameMovie, { listEpisode }) {
    return listEpisode.map(
      ({ duration, episode, image, desc, url, title }, index) => {
        return (
          <ShowEpisodes
            nameMovie={nameMovie}
            title={title}
            desc={desc}
            img={image}
            episode={episode}
            duration={duration}
            key={index}
            index={index + 1}
          />
        );
      }
    );
  }

  function getRecomend(cast) {
    const filteredData = API.filter((data2) => {
      return data2.cast.some((i) => cast.includes(i));
    });
    if (filteredData.length === 1) {
      return (
        <p style={{ color: "white", padding: "3rem" }}>
          Maaf, tidak ada film dengan actor yang sama
        </p>
      );
    } else {
      return filteredData.map((data, i) => {
        if (data.title === title) {
          return;
        } else {
          return (
            <ShowRecomend key={i} title={data.title} img={data.imgPotrait} />
          );
        }
      });
    }
  }

  return createPortal(
    <dialog ref={ref} className={Styles.Dialog}>
      <div className={Styles.Body}>
        <form method="dialog" className={Styles.CloseDialog}>
          <button>x</button>
        </form>
        <div className={Styles.ImageShow}>
          <img src={getIMG_second} alt={title} />
          <div className={Styles.BtnDiv}>
            <h2>{title}</h2>
            <div>
              <button>Mulai</button>
              <span>
                <span>+</span>
              </span>
              <span>
                <img src={VolumeOff} alt="Volume-off" />
              </span>
            </div>
          </div>
        </div>

        <div className={Styles.DescMovie}>
          <div className={Styles.DescMovieDiv}>
            <div>
              <span>2021</span>
              <span>
                {isEpisode.episode ? `${isEpisode.episode} Episode` : "Movie"}
              </span>
              <span></span>
            </div>
            <p>{desc}</p>
          </div>
          <div className={Styles.DescGenre}>
            <div>
              <h4>Cast :</h4>
              <p>{`${cast[0]}, ${cast[1]}, ${cast[2]} dan lain-lain`}</p>
            </div>
            <div>
              <h4>Genre :</h4>
              <p>
                {genre.map((data) => {
                  return data.charAt(0).toUpperCase() + data.slice(1) + ",";
                })}
              </p>
            </div>
            <div></div>
          </div>
        </div>
        <h5 className={Styles.Head5}>
          {isEpisode.episode ? "Episodes" : "Rekomendasi Serupa"}
        </h5>
        <div className={Styles.ShowEpisodes}>
          {isEpisode.episode ? (
            getEpisode(title, isEpisode)
          ) : (
            <div className={Styles.Recomend}>{getRecomend(cast)}</div>
          )}
        </div>
      </div>
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
