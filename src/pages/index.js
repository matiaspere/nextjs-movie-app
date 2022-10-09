import style from '@styles/index.module.scss';
import React from 'react';
import HomeLayout from '@layout/HomeLayout.jsx';
import AppContext from 'context/AppContext';

export default function Home() {
  const {darkMode} = React.useContext(AppContext);
  return (
    <div className={darkMode ? style.ContentLight : style.Content}>
      <HomeLayout />
    </div>
  )
}
