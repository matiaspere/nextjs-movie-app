import React from "react";
import AppContext from "context/AppContext";
import Image from "next/image";
import style from "@styles/CardSlider.module.scss";
import movieIcon from "@images/movie.svg";
import tvIcon from "@images/tv.svg";
import bookmark from '@images/bookmark.svg';
// 
import { CircularProgress } from "@mui/material";
import CircularProgressWithLabel from "@components/CircularStatic";

const CardSlider = ({ title, image, date, vote }) => {
  const {onBook} = React.useContext(AppContext);

  // vote = vote.toFixed(1);

  return (
    <div className={style.CardContainer}>
      <div className={style.CardContainerImages}>
        <img src={image} width="200px" height="200px" objectfit="cover" />
        <div className={style.bookmarkContainer} onClick={()=>onBook(title, image, date, vote)}>
          <Image src={bookmark} width="20px" height="20px" objectfit="cover" />
        </div>
      </div>
      <div className={style.CardContainerText}>
        <div className={style.CardContainerTextUp}>
          <p>{date}</p>
          <CircularProgressWithLabel value={vote} />
        </div>
        <div className={style.CardContainerTextDown}>
          <p className={style.title}>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
