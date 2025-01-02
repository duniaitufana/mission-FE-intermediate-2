import Styles from "./showRecomend.module.css";

export default function ShowRecomend({ img, title }) {
  return (
    <div tabIndex={0} className={Styles.Card}>
      <img src={img} alt={title} title={title} />
    </div>
  );
}
