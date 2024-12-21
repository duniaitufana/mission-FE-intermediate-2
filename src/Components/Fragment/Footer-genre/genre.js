import Styles from "./genre.module.css";
import { useRef, useState } from "react";
import Hide from "../../../images/icons/homepage/hide-footer.svg";

export default function Genre({ title }) {
  const hide = useRef();
  const [isHide, setIsHide] = useState(true);
  window.addEventListener("resize", () => {
    setIsHide((data) => {
      if (window.innerWidth > 750) {
        return (data = false);
      }
    });
  });
  function handleClick() {
    setIsHide((data) => {
      if (window.innerWidth > 750) {
        return (data = false);
      }
      if (data === true) {
        hide.current.nextElementSibling.style.display = "flex";
        return (data = false);
      } else {
        hide.current.nextElementSibling.style.display = "none";
        return (data = true);
      }
    });
  }
  return (
    <div ref={hide} className={Styles.DivH6} onClick={handleClick}>
      <span>{title}</span>
      <img src={Hide} alt="hide-footer" />
    </div>
  );
}
