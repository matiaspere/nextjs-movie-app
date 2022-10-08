import React from 'react';
import Bookmarked from '@layout/BookmarkedLayout.jsx'
import style from '@styles/index.module.scss';

const movies = () => {
  return (
    <div className={style.Content}>
        <Bookmarked />
    </div>
  )
}

export default movies