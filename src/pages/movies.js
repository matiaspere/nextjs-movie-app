import React from 'react';
import MovieLayout from '@layout/MovieLayout';
import style from '@styles/index.module.scss';

const movies = () => {
  return (
    <div className={style.Content}>
        <MovieLayout />
    </div>
  )
}

export default movies