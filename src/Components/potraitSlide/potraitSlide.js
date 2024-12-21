import Styles from "./potraitSlide.module.css";
import Slider from "../Fragment/Slider/slider";
import API from "../../Api/dataMovie.json";
import LeftBtn from "../../images/icons/homepage/left-btn.svg";
import RightBtn from "../../images/icons/homepage/right-btn.svg";

import { useRef, useState } from "react";

export default function PotraitSlide({ header, apiId }) {
  const [isDisable, setDisable] = useState(false);
  const WIDTH_SLIDER = useRef();
  const [isAnimating, setIsAnimating] = useState(false);

  const add = function getAPI() {
    let filteredAPI = API;
    if (apiId === "top") {
      filteredAPI.sort((a, b) => a.rate - b.rate);
      return filteredAPI.map(
        (
          { imgPotrait, isEpisode, imgLandscape, adult, genre, trailer },
          index
        ) => {
          if (isEpisode.episode) {
            return (
              <Slider
                key={index}
                getIMG={imgPotrait}
                getIMG_second={imgLandscape}
                adult={adult}
                isEpisode={isEpisode.episode}
                genre={genre}
                trailer={trailer}
              />
            );
          } else {
            return;
          }
        }
      );
    } else if (apiId === "new") {
      return (filteredAPI = API.map(
        (
          { imgPotrait, isNew, imgLandscape, adult, isEpisode, genre, trailer },
          index
        ) => {
          if (isNew) {
            return (
              <Slider
                key={index}
                getIMG={imgPotrait}
                isNew={isNew}
                getIMG_second={imgLandscape}
                adult={adult}
                isEpisode={isEpisode.episode}
                genre={genre}
                trailer={trailer}
              />
            );
          }
        }
      ));
    } else {
      return API.map(
        (
          { imgPotrait, imgLandscape, adult, isEpisode, genre, trailer },
          index
        ) => {
          if (!isEpisode.episode) {
            return (
              <Slider
                key={index}
                getIMG={imgPotrait}
                getIMG_second={imgLandscape}
                adult={adult}
                isEpisode={isEpisode.episode}
                genre={genre}
                trailer={trailer}
              />
            );
          }
        }
      );
    }
  };

  window.addEventListener("resize", () => {
    console.log("resize");
    WIDTH_SLIDER.current.style.transform = "translateX(0px)";
  });

  function handleClick(where) {
    console.log(isAnimating, isDisable);
    if (isAnimating || isDisable) {
      return;
    } else {
      setDisable(true);
      if (where === "right") {
        const countCard = WIDTH_SLIDER.current.childNodes.length;
        const widthSlider = WIDTH_SLIDER.current.childNodes[0].offsetWidth;
        const getGap = parseFloat(
          getComputedStyle(WIDTH_SLIDER.current).rowGap
        );
        const curTransform = Number(
          getComputedStyle(WIDTH_SLIDER.current)
            .transform.replaceAll(/matrix|\(|\)/g, "")
            .split(",")[4]
        );
        const rect =
          WIDTH_SLIDER.current.childNodes[
            countCard - 1
          ].getBoundingClientRect();
        const distanceFromLeft = window.innerWidth - rect.right;
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
        setTimeout(() => {
          setDisable((data) => {
            return (data = false);
          });
        }, 600);
      } else {
        const widthSlider = WIDTH_SLIDER.current.childNodes[0].offsetWidth;
        const getGap = parseFloat(
          getComputedStyle(WIDTH_SLIDER.current).rowGap
        );
        const curTransform = Number(
          getComputedStyle(WIDTH_SLIDER.current)
            .transform.replaceAll(/matrix|\(|\)/g, "")
            .split(",")[4]
        );
        if (curTransform) {
          WIDTH_SLIDER.current.style.transform = `translateX(${
            curTransform + widthSlider + getGap
          }px)`;
        } else if (curTransform === 0 || curTransform > 0) {
          WIDTH_SLIDER.current.style.transform = `translateX(0px)`;
        }
        setTimeout(() => {
          setDisable((data) => {
            return (data = false);
          });
        }, 600);
      }
    }
  }

  return (
    <div className={Styles.Slide}>
      <p>{header}</p>
      <div ref={WIDTH_SLIDER} className={Styles.CardSlider}>
        {add()}
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
