import React from 'react';
import MovieLayout from '@layout/MovieLayout';
import style from '@styles/index.module.scss';
import AppContext from 'context/AppContext';

const movies = () => {
  const {darkMode} = React.useContext(AppContext);

  return (
    <div className={darkMode ? style.ContentLight : style.Content}>
        <MovieLayout />
    </div>
  )
}

export default movies