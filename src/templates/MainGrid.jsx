import React from "react";
import AppContext from "context/AppContext";
import style from "@styles/RecommendedGrid.module.scss";
import CardSlider from "@components/CardSlider";

const RecommendedGrid = ({ state }) => {
  console.log(state)
  return (
    <div className={style.RecomendedContainer}>
      <div className={style.GridContainer}>
          {state.map((i) => (
            <CardSlider
              key={i.id}
              title={i.title || i.original_name}
              image={"https://image.tmdb.org/t/p/w300" + i.poster_path}
              adult={i.adult}
              media_type={i.media_type}
              date={i.release_date}
            />
          ))}
       
      </div>
    </div>
  );
};

export default RecommendedGrid;
