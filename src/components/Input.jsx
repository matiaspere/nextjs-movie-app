import React from "react";
import Image from "next/image";
import AppContext from "context/AppContext";
import search from "@images/search.svg";
import style from "@styles/Input.module.scss";

// const url = `https://api.themoviedb.org/3/search/movie?api_key=f31930be708a30c107a4b2c3659d8d46&language=en-US&page=1&query=${searchValue}`;

const Input = () => {
  const [inputValue, setInputValue] = React.useState("");
  const { searchValue, setSearchValue } = React.useContext(AppContext);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  async function fetchSearch(input) {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=f31930be708a30c107a4b2c3659d8d46&language=en-US&page=1&query=${input}`
    );
    const data = await res.json();
    setSearchValue(data);
    console.log(data)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchSearch(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={style.input}>
        <button className={style.button} type="submit">
          <Image src={search} />
        </button>
        <input
          value={inputValue}
          onChange={handleInput}
          placeholder="Search for movies or TV series"
        />
      </form>
    </div>
  );
};

export default Input;
