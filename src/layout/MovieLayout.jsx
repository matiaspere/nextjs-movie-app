import React from "react";
import AppContext from "context/AppContext";
import Input from "@components/Input";
import MainGrid from "@templates/MainGrid";
import style from "@styles/RecommendedGrid.module.scss";
import Image from "next/image";
import arrow from "@images/arrow.svg";

const API_KEY = "f31930be708a30c107a4b2c3659d8d46";
const url = `https://api.themoviedb.org/3/movie/popular?api_key=f31930be708a30c107a4b2c3659d8d46&language=en-US&page=1`;

const MovieLayout = () => {
  const { movies, setMovies, searchValue, setSearchValue, onClose } =
    React.useContext(AppContext);

  React.useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    }
    fetchData();
  }, []);

  console.log(movies)

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


