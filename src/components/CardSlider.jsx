import React from "react";
import Image from "next/image";
import style from "@styles/CardSlider.module.scss";
import movieIcon from "@images/movie.svg";
import tvIcon from "@images/tv.svg";
import bookmark from '@images/bookmark.svg';


const CardSlider = ({ title, image, adult, media_type, date }) => {
  // const date2 = date.substring(0, 4);
  const icon = "";
  if (media_type === "movie") {
    icon = { movieIcon };
  } else {
    icon = { tvIcon };
  }

  const atp = "";
  if (adult === true) {
    atp = "+18";
  } else {
    atp = "PG";
  }

  return (
    <div className={style.CardContainer}>
      <div className={style.CardContainerImages}>
        <img src={image} width="200px" height="200px" objectfit="cover" />
        <div className={style.bookmarkContainer}>
          <Image src={bookmark} width="20px" height="20px" objectfit="cover" />
        </div>
      </div>
      <div className={style.CardContainerText}>
        <div className={style.CardContainerTextUp}>
          <p>{date}</p>
          <p>{atp}</p>
        </div>
        <div className={style.CardContainerTextDown}>
          <p className={style.title}>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
