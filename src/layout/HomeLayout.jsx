import React from "react";
import AppContext from "context/AppContext";
import style from "@styles/RecommendedGrid.module.scss";
import Image from "next/image";
// components and layouts
import Input from "@components/Input";
import CardSliderContainer from "templates/CardSliderContainer.jsx";
import MainGrid from "templates/MainGrid";
import arrow from "@images/arrow.svg";

const API_KEY = "f31930be708a30c107a4b2c3659d8d46";
const url = `https://api.themoviedb.org/3/discover/movie?api_key=f31930be708a30c107a4b2c3659d8d46&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

const HomeLayout = () => {
  const { recommended, setRecommended, searchValue, setSearchValue, onClose } =
    React.useContext(AppContext);

  React.useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setRecommended(data.results);
    }
    fetchData();
  }, []);

  
  return (
    <div>
      {searchValue ? (
        <>
          <Input />
          <div className={style.arrow} onClick={onClose}>
            <Image src={arrow} />
          </div>
          <MainGrid state={searchValue.results} />
        </>
      ) : (
        <>
          <Input />
          <CardSliderContainer />
          <p className={style.title}>Recommended for you</p>
          <MainGrid state={recommended} />
        </>
      )}
    </div>
  );
};

export default HomeLayout;
