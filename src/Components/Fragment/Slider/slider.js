import Styles from "./slider.module.css";
import Star from "../../../images/icons/homepage/star.svg";
import { useState, useRef } from "react";
import PlayBtn from "../../../images/icons/homepage/play-btn.svg";
import CheckBtn from "../../../images/icons/homepage/check-btn.svg";
import CheckBtn2 from "../../../images/icons/homepage/check-btn-1.svg";
import OpenBtn from "../../../images/icons/homepage/hide.svg";
import DialogCustom from "../../modal/modal.js";
import { useSelector, useDispatch } from "react-redux";
import ActionType from "../../redux/ActionsType.js";

export default function Slider({
  title,
  rate,
  getIMG,
  isNew,
  getIMG_second,
  isLandscape,
  adult,
  isEpisode,
  genre,
  trailer,
  cast,
  desc,
  API,
}) {
  const [mouseIn, setMouseIn] = useState(false);
  const openModal = useRef();
  const validation = useRef();
  const STATE = useSelector((state) => state);
  const dispatch = useDispatch();

  let createDebounce;

  function handleMouseEnter() {
    clearTimeout(createDebounce);
    createDebounce = setTimeout(() => {
      const rect = validation.current.getBoundingClientRect();
      const left = window.innerWidth - rect.left;
      const right = window.innerWidth - rect.right;
      if (left + 20 < window.innerWidth && right > 50) {
        setMouseIn((data) => {
          return (data = true);
        });
      }
    }, 500);
  }

  function handleMouseLeave() {
    clearTimeout(createDebounce);
    setMouseIn((data) => {
      return (data = false);
    });
  }

  function handleClick(
    title,
    rate,
    getIMG,
    isNew,
    getIMG_second,
    adult,
    isEpisode,
    genre,
    trailer,
    cast,
    desc
  ) {
    setMouseIn(false);
    openModal.current.showModal();
  }

  const addCard_Land = function (title, rate, getIMG, isNew, API) {
    if (mouseIn) {
      return (
        <>
          <img src={`..${getIMG}`} alt={title} className={Styles.ImgCard} />
          {isNew ? <p className={Styles.Isnew}>New</p> : null}
          {rate && title ? (
            <div className={Styles.FirstDesc} style={{ display: "none" }}>
              <p>{title}</p>
              <div>
                <img src={Star} alt="star-rate" />
                <span>{`${rate}/10`}</span>
              </div>
            </div>
          ) : null}
          <div className={Styles.DescImg}>
            <div>
              <div>
                <img src={PlayBtn} alt="play-btn" />
                <span className={Styles.Span}>
                  <img src={CheckBtn} alt="check-btn" />
                </span>
              </div>
              <div>
                <span className={Styles.Span}>
                  <img src={OpenBtn} alt="open-btn" />
                </span>
              </div>
            </div>
            <div>
              <span>{adult}+</span>
              <span>{isEpisode ? `Episode ${isEpisode}` : "Movie"}</span>
            </div>
            <div>
              {genre ? (
                <>
                  <span>{genre[0]}</span>
                  <span>{genre[1]}</span>
                  <span>{genre[2]}</span>
                </>
              ) : null}
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <img src={`..${getIMG}`} alt={title} className={Styles.ImgCard} />
          {isNew ? <p className={Styles.Isnew}>New</p> : null}
          {rate && title ? (
            <div className={Styles.FirstDesc}>
              <p>{title}</p>
              <div>
                <img src={Star} alt="star-rate" />
                <span>{`${rate}/10`}</span>
              </div>
            </div>
          ) : null}
        </>
      );
    }
  };
  const addCard = function (
    title,
    rate,
    getIMG,
    isNew,
    getIMG_second,
    adult,
    isEpisode,
    genre,
    trailer,
    cast,
    desc,
    API
  ) {
    if (mouseIn) {
      return (
        <>
          <DialogCustom
            ref={openModal}
            title={title}
            rate={rate}
            getIMG={getIMG}
            getIMG_second={getIMG_second}
            adult={adult}
            isEpisode={isEpisode}
            genre={genre}
            trailer={trailer}
            cast={cast}
            desc={desc}
            API={API}
          />
          <iframe
            id="iframe"
            src={`${trailer}?enablejsapi=1&autoplay=1&controls=1`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className={Styles.Iframe}
          ></iframe>

          {isNew ? <p className={Styles.Isnew}>New</p> : null}
          <div className={Styles.DescImg}>
            <div>
              <div>
                <img src={PlayBtn} alt="play-btn" onClick={handleClick} />
                <span
                  className={
                    STATE.includes(title) ? Styles.SpanAdd : Styles.Span
                  }
                  onClick={() => {
                    if (STATE.includes(title)) {
                      window.alert('Film telah ditambahkan ke Dafton "tonton"');
                      return;
                    } else {
                      dispatch({
                        type: ActionType.ADD_MOVIE,
                        payload: { movie: title },
                      });
                    }
                  }}
                >
                  <img
                    src={STATE.includes(title) ? CheckBtn2 : CheckBtn}
                    alt="check-btn"
                  />
                </span>
              </div>
              <div onClick={handleClick}>
                <span className={Styles.Span}>
                  <img src={OpenBtn} alt="open-btn" />
                </span>
              </div>
            </div>
            <div>
              <span>{adult}+</span>
              <span>
                {isEpisode.episode ? `Episode ${isEpisode.episode}` : "Movie"}
              </span>
            </div>
            <div>
              {genre ? (
                <>
                  <span>{genre[0]}</span>
                  <span>{genre[1]}</span>
                  <span>{genre[2]}</span>
                </>
              ) : null}
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <DialogCustom
            ref={openModal}
            title={title}
            rate={rate}
            getIMG={getIMG}
            getIMG_second={getIMG_second}
            adult={adult}
            isEpisode={isEpisode}
            genre={genre}
            trailer={trailer}
            cast={cast}
            desc={desc}
            API={API}
          />
          <img src={`..${getIMG}`} alt={title} className={Styles.ImgCard} />
          {isNew ? <p className={Styles.Isnew}>New</p> : null}
        </>
      );
    }
  };

  return (
    <div
      ref={validation}
      className={Styles.Card}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isLandscape
        ? addCard_Land(title, rate, getIMG, isNew, trailer, cast, desc, API)
        : addCard(
            title,
            rate,
            getIMG,
            isNew,
            getIMG_second,
            adult,
            isEpisode,
            genre,
            trailer,
            cast,
            desc,
            API
          )}
    </div>
  );
}
