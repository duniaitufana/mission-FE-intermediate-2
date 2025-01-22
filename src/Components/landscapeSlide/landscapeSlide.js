import Styles from "./landscapeSlide.module.css";
import Slider from "../Fragment/Slider/slider";
import LeftBtn from "../../images/icons/homepage/left-btn.svg";
import RightBtn from "../../images/icons/homepage/right-btn.svg";
import { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function LandscapeSlide({ API }) {
  const [isDisable, setDisable] = useState(false);
  const WIDTH_SLIDER = useRef();
  const [isAnimating, setIsAnimating] = useState(false);
  const [isOverflow, setIsOverflow] = useState(false);
  const STATE = useSelector((state) => state);

  useEffect(() => {
    const getOverflow = WIDTH_SLIDER.current;
    function check() {
      if (getOverflow) {
        const hasOverflow = getOverflow.scrollWidth > getOverflow.clientWidth;
        setIsOverflow(hasOverflow);
      } else {
        setIsOverflow(false);
      }
    }
    check();
    window.addEventListener("resize", check);

    const resizeObserver = new MutationObserver(() => {
      check();
    });

    resizeObserver.observe(getOverflow, {
      childList: true,
      subtree: true,
    });

    return () => {
      window.removeEventListener("resize", check);
      resizeObserver.unobserve(getOverflow);
    };
  }, []);

  function getAPI(API) {
    const NewApi = API.filter((x) => STATE.includes(x.title));
    if (NewApi.length === 0) {
      return <p>Tidak ada daftar film yang anda tambahkan</p>;
    } else {
      return NewApi.map(
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
        WIDTH_SLIDER.current.childNodes[
          STATE.length - 1
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
      <div
        className={
          STATE.length === 0 ? Styles.CardSliderNull : Styles.CardSlider
        }
        ref={WIDTH_SLIDER}
      >
        {getAPI(API)}
      </div>
      {!isOverflow ? null : (
        <>
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
        </>
      )}
    </div>
  );
}
