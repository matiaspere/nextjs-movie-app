import React from "react";
import AppContext from "context/AppContext";
import Image from "next/image";
import style from "@styles/CardSlider.module.scss";
import movieIcon from "@images/movie.svg";
import tvIcon from "@images/tv.svg";
import bookmark from '@images/bookmark.svg';
import solidBookmark from '@images/solidBookmark.svg'
// 
import { CircularProgress } from "@mui/material";
import CircularProgressWithLabel from "@components/CircularStatic";

const CardSlider = ({ title, image, date, vote, booked }) => {
  const {addToBoked, setBookedState} = React.useContext(AppContext);
  vote = Math.round(vote);

  return (
    <div className={style.CardContainer}>
      <div className={style.CardContainerImages}>
        <img src={image} width="200px" height="200px" objectfit="cover" />
        <div className={style.bookmarkContainer} onClick={()=>{addToBoked(title, image, date, Math.round(vote), booked); setBookedState(title); }}>
          {booked ? <Image src={solidBookmark} width="20px" height="20px" objectfit="cover" /> : <Image src={bookmark} width="20px" height="20px" objectfit="cover" />}
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
