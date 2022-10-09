import React from 'react';
import TvLayout from '@layout/TvLayout';
import style from '@styles/index.module.scss';
import AppContext from 'context/AppContext';

const movies = () => {
  const {darkMode} = React.useContext(AppContext);

  return (
    <div className={darkMode ? style.ContentLight : style.Content}>
        <TvLayout />
    </div>
  )
}

export default movies