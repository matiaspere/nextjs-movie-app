import React from 'react';
import AppContext from 'context/AppContext';
import Input from '@components/Input';
import MainGrid from '@templates/MainGrid';
import style from "@styles/RecommendedGrid.module.scss";



const API_KEY = "f31930be708a30c107a4b2c3659d8d46";
const url = `https://api.themoviedb.org/3/tv/popular?api_key=f31930be708a30c107a4b2c3659d8d46&language=en-US&page=1`;


const MovieLayout = () => {
  const { tv, setTv } = React.useContext(AppContext);

  React.useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setTv(data.results);
      console.log(tv)
    }
    fetchData();
  }, []);
  return (
    <div >
        <Input />
        <p className={style.title}>Tv Series</p>
        <MainGrid state={tv}/>
    </div>
  )
}

export default MovieLayout