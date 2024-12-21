import Styles from "./landscapeSlide.module.css";
import Slider from "../Fragment/Slider/slider";
import API from "../../Api/dataMovie.json";
import LeftBtn from "../../images/icons/homepage/left-btn.svg";
import RightBtn from "../../images/icons/homepage/right-btn.svg";
import { useRef, useState } from "react";

export default function LandscapeSlide() {
  const [isDisable, setDisable] = useState(false);
  const WIDTH_SLIDER = useRef();
  const [isAnimating, setIsAnimating] = useState(false);

  function getAPI() {
    return API.map(
      ({ title, rate, imgLandscape, adult, isEpisode, genre }, index) => {
        return (
          <Slider
            key={index}
            title={title}
            rate={rate}
            getIMG={imgLandscape}
            isLandscape={true}
            adult={adult}
            isEpisode={isEpisode.episode}
            genre={genre}
          />
        );
      }
    );
  }

  function handleClick(where) {
    if (isAnimating || isDisable) {
      return;
    }
    setDisable(true);
    setIsAnimating(true);

    if (where === "right") {
      const widthSlider = WIDTH_SLIDER.current.childNodes[0].offsetWidth;
      const getGap = parseFloat(getComputedStyle(WIDTH_SLIDER.current).rowGap);
      const curTransform = Number(
        getComputedStyle(WIDTH_SLIDER.current)
          .transform.replaceAll(/matrix|\(|\)/g, "")
          .split(",")[4]
      );
      const rect =
        WIDTH_SLIDER.current.childNodes[API.length - 1].getBoundingClientRect();
      const distanceFromLeft = window.innerWidth - rect.right;
      console.log(isDisable, isAnimating);
      if (curTransform === "none" || !curTransform) {
        WIDTH_SLIDER.current.style.transform = `translateX(-${
          widthSlider + getGap
        }px)`;
      } else if (distanceFromLeft > 20) {
        WIDTH_SLIDER.current.style.transform = `translateX(-${curTransform}px)`;
      } else {
        WIDTH_SLIDER.current.style.transform = `translateX(-${
          widthSlider + getGap - curTransform
        }px)`;
      }
    } else {
      const widthSlider = WIDTH_SLIDER.current.childNodes[0].offsetWidth;
      const getGap = parseFloat(getComputedStyle(WIDTH_SLIDER.current).rowGap);
      const curTransform = Number(
        getComputedStyle(WIDTH_SLIDER.current)
          .transform.replaceAll(/matrix|\(|\)/g, "")
          .split(",")[4]
      );
      console.log(curTransform, widthSlider, getGap);
      if (curTransform) {
        WIDTH_SLIDER.current.style.transform = `translateX(${
          curTransform + widthSlider + getGap
        }px)`;
      } else if (curTransform === 0 || curTransform < 0) {
        WIDTH_SLIDER.current.style.transform = `translateX(0px)`;
      }
    }
    setTimeout(() => {
      setDisable(false);
      setIsAnimating(false);
    }, 400);
  }
  return (
    <div className={Styles.Slide}>
      <p>Melanjutkan tonton film</p>
      <div className={Styles.CardSlider} ref={WIDTH_SLIDER}>
        {getAPI()}
      </div>
      <img
        src={LeftBtn}
        alt="left-btn"
        onClick={() => {
          if (!isDisable) {
            handleClick("left");
          }
        }}
      />
      <img
        src={RightBtn}
        alt="right-btn"
        onClick={() => {
          if (!isDisable) {
            handleClick("right");
          }
        }}
      />
    </div>
  );
}
