import React from "react";

const useFetch = () => {
  const [trending, setTrending] = React.useState([]);
  const [recommended, setRecommended] = React.useState([]);
  const [movies, setMovies] = React.useState([]);
  const [tv, setTv] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [bookmarked, setBookmarked] = React.useState([]);

  const onClose = () => {
    setSearchValue("");
  };

  const onBook = (title, image, date, vote) => {
    const item = {
      title: title,
      image: image,
      date: date,
      vote: vote,
    };

    if (!bookmarked.some((i) => i.title === item.title)) {
      let newBookmarked = [...bookmarked];
      newBookmarked.unshift(item);
      setBookmarked(newBookmarked);
    } else {
      let newBookmarked = [...bookmarked];
      const index = newBookmarked.findIndex((i) => i.title === item.title);
      newBookmarked.splice(index, 1);
      setBookmarked(newBookmarked);
    }
  };

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
    onBook,
  };
};

export default useFetch;
