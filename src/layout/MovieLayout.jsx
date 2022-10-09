import React from "react";
import AppContext from "context/AppContext";
import Input from "@components/Input";
import MainGrid from "@templates/MainGrid";
import style from "@styles/RecommendedGrid.module.scss";
import Image from "next/image";
import arrow from "@images/arrow.svg";


const MovieLayout = () => {
  const { movies, setMovies, searchValue, setSearchValue, onClose } =
    React.useContext(AppContext);

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
          <p className={style.title}>Movies</p>
          <MainGrid state={movies} />
        </>
      )}
    </div>
  );
};

export default MovieLayout;


