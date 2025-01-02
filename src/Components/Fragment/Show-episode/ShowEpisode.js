import Styles from "./ShowEpisode.module.css";

export default function ShowEpisodes({
  nameMovie,
  title,
  desc,
  img,
  index,
  duration,
  episode,
}) {
  return (
    <div tabIndex={0} className={Styles.ShowEpisodes}>
      <p>{index}</p>
      <img
        src={`/images/episode/${nameMovie}/${img}`}
        alt={title + " " + episode}
      />
      <div className={Styles.Desc}>
        <div>
          <span>{title ? title : `${nameMovie} episode ${episode}`}</span>
          <span>{`${duration} menit`}</span>
        </div>
        <p>{desc}</p>
      </div>
    </div>
  );
}
