import React from "react";
import style from "@styles/RecommendedGrid.module.scss";
import CardSlider from "@components/CardSlider";

const RecommendedGrid = ({ state }) => {

    
  return (
    <div className={style.RecomendedContainer}>
      <div className={style.GridContainer}>
          {state.map((i) => (
            <CardSlider
              key={i.title}
              title={i.title || i.original_name}
              image={i.poster_path ? "https://image.tmdb.org/t/p/w300" + i.poster_path : i.image}
              date={i.release_date || i.first_air_date  || i.date}
              vote={i.vote_average  || i.vote}
              booked={i.booked}
            />
          ))}
       
      </div>
      {state.length == 0 && <p>No results found : (</p>}
    </div>
  );
};

export default RecommendedGrid;
