import { useState } from "react";
import hide from "../../../images/icons/login-page/hide-pw.svg";

export default function ButtonPw({ idInput, children, ...porps }) {
  const [Hide, setHide] = useState("password");
  function handleClick(Hide) {
    if (Hide === "password") {
      setHide("text");
    } else {
      setHide("password");
    }
  }
  return (
    <>
      <label id={idInput}>{children}</label>
      <input type={Hide} {...porps}></input>
      <img
        onClick={() => {
          handleClick(Hide);
        }}
        src={hide}
        alt="hide-password"
      />
    </>
  );
}
