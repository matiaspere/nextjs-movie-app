import React from 'react';
import AppContext from 'context/AppContext';
import Input from '@components/Input';
import MainGrid from '@templates/MainGrid';
import style from "@styles/RecommendedGrid.module.scss";
import Image from "next/image";
import arrow from "@images/arrow.svg";



const TvLayout = () => {
  const { tv, setTv, searchValue, setSearchValue, onClose } = React.useContext(AppContext);


  return (
    <div>
      {searchValue ? (
        <>
          <Input />
          <div className={style.arrow} onClick={onClose}>
            <Image src={arrow} />
          </div>
          <MainGrid state={searchValue.results} />
        </>
      ) : (
        <>
          <Input />
          <p className={style.title}>Tv Series</p>
          <MainGrid state={tv} />
        </>
      )}
    </div>
  )
}

export default TvLayout;

