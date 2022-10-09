import React from "react";

const useFetch = () => {
  const [trending, setTrending] = React.useState([]);
  const [recommended, setRecommended] = React.useState([]);
  const [movies, setMovies] = React.useState([]);
  const [tv, setTv] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [bookmarked, setBookmarked] = React.useState([]);
  const [darkMode, setDarkeMode] = React.useState(false);

  const onClose = () => {
    setSearchValue("");
  };

  const handleDarkMode = () => {
    setDarkeMode(!darkMode);
  }

  // guardo la pelicula en el state de bookmarked en caso de que no este, o la quito en caso de que si este
  const addToBoked = (title, image, date, vote, booked) => {
    if (!bookmarked.some((i) => i.title === title)) {
      const item = {
        title: title,
        image: image,
        date: date,
        vote: vote,
        booked: true,
      };
      let newBookmarked = [...bookmarked];
      newBookmarked.unshift(item);
      setBookmarked(newBookmarked);
    } else {
      let newBookmarked = [...bookmarked];
      const index = newBookmarked.findIndex((i) => i.title === title);
      newBookmarked.splice(index, 1);
      setBookmarked(newBookmarked);
    }
  };

  // seteo la propiedad booked a true o a false, segun corresponda (para mostrar un icono u otro)
  const setBookedState = (payload) => {
    let newTrending = [...trending];
    newTrending.map((i) => {
      if (i.title == payload) {
        if (i.booked == false) {
          i.booked = true;
          setTrending(newTrending);
        } else {
          i.booked = false;
          setTrending(newTrending);
        }
      }
    });

    let newRecommended = [...recommended];
    newRecommended.map((i) => {
      if (i.title == payload) {
        if (i.booked == false) {
          i.booked = true;
          setRecommended(newRecommended);
        } else {
          i.booked = false;
          setRecommended(newRecommended);
        }
      }
    });

    let newMovies = [...movies];
    newMovies.map((i) => {
      if (i.title == payload) {
        if (i.booked == false) {
          i.booked = true;
          setMovies(newMovies);
        } else {
          i.booked = false;
          setMovies(newMovies);
        }
      }
    });

    let newTv = [...tv];
    newTv.map((i) => {
      if (i.title == payload) {
        console.log(i.title, payload);
        if (i.booked == false) {
          i.booked = true;
          setTv(newTv);
        } else {
          i.booked = false;
          setTv(newTv);
        }
      }
    });
  };

  // Fetch de Recommended
  const urlRecommended = `https://api.themoviedb.org/3/discover/movie?api_key=f31930be708a30c107a4b2c3659d8d46&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
  React.useEffect(() => {
    async function fetchData() {
      const res = await fetch(urlRecommended);
      const data = await res.json();
      let dataBooked = data.results.map(
        (i) =>
          (i = {
            ...i,
            booked: false,
          })
      );
      setRecommended(dataBooked);
    }
    fetchData();
  }, []);

  // Fetch de Trending
  const API_KEY = "f31930be708a30c107a4b2c3659d8d46";
  React.useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=" + API_KEY
      );
      const data = await res.json();
      let dataBooked = data.results.map(
        (i) =>
          (i = {
            ...i,
            booked: false,
          })
      );
      setTrending(dataBooked);
    }
    fetchData();
  }, []);

  //  Fetch de Movies
  const urlMovie = `https://api.themoviedb.org/3/movie/popular?api_key=f31930be708a30c107a4b2c3659d8d46&language=en-US&page=1`;
  React.useEffect(() => {
    async function fetchData() {
      const res = await fetch(urlMovie);
      const data = await res.json();
      let dataBooked = data.results.map(
        (i) =>
          (i = {
            ...i,
            booked: false,
          })
      );
      setMovies(dataBooked);
    }
    fetchData();
  }, []);

  // Fetch de Tv
  const urlTv = `https://api.themoviedb.org/3/tv/popular?api_key=f31930be708a30c107a4b2c3659d8d46&language=en-US&page=2`;
  React.useEffect(() => {
    async function fetchData() {
      const res = await fetch(urlTv);
      const data = await res.json();
      let dataBooked = data.results.map(
        (i) =>
          (i = {
            ...i,
            booked: false,
          })
      );
      setTv(dataBooked);
    }
    fetchData();
  }, []);

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
    onClose,
    bookmarked,
    setBookmarked,
    addToBoked,
    setBookedState,
    darkMode,
    setDarkeMode,
    handleDarkMode
  };
};

export default useFetch;
