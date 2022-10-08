import React from 'react'

const useFetch = () => {
    const [trending, setTrending] = React.useState([]);
    const [recommended, setRecommended] = React.useState([]);
    const [movies, setMovies] = React.useState([]);
    const [tv, setTv] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState("");

    const onClose = () =>{
      setSearchValue('');
    }

  return {
    trending,
    setTrending,
    recommended,
    setRecommended,
    movies,
    setMovies,
    tv,
    setTv,
    searchValue,
    setSearchValue,
    onClose
  }
};

export default useFetch