import React from "react";
import CardSlider from "@components/CardSlider";
import AppContext from "context/AppContext";
import style from "@styles/CardSliderContainer.module.scss";

const API_KEY = "f31930be708a30c107a4b2c3659d8d46";

const CardSliderContainer = () => {
  const { trending } = React.useContext(AppContext);

  console.log(trending)
  return (
    <>
      <h3 className={style.trendingTitle}>Trending</h3>
      <div className={style.Slider}>
        {trending.map((i) => (
          <CardSlider
            key={i.id}
            title={i.title}
            image={"https://image.tmdb.org/t/p/w300" + i.poster_path}
            adult={i.adult}
            media_type={i.media_type}
            date={i.release_date}
            vote={i.vote_average}
            booked={i.booked}
          />
        ))}
      </div>
    </>
  );
};

export default CardSliderContainer;
