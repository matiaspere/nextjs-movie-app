import React from 'react'

const useFetch = () => {
    const [trending, setTrending] = React.useState([]);
    const [recommended, setRecommended] = React.useState([]);
    const [movies, setMovies] = React.useState([]);
    const [tv, setTv] = React.useState([]);

  return {
    trending,
    setTrending,
    recommended,
    setRecommended,
    movies,
    setMovies,
    tv,
    setTv,
  }
};

export default useFetch