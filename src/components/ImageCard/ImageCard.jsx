import s from "./ImageCard.module.css";

const ImageCard = ({ id, likes, smallImg, largeImg, alt, openModalFu }) => {
  return (
    <div key={id} className={s.cardDiv}>
      <img
        src={smallImg}
        alt={alt}
        className={s.cardImg}
        onClick={() => openModalFu(largeImg)}
      />
      <span className={s.cardDesc}>
        <p className={s.cardDescItem}>Likes: {likes}</p>
        <p className={s.cardDescItem}>{alt}</p>
      </span>
    </div>
  );
};

export default ImageCard;
