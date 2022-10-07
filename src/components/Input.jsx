import React from 'react';
import Image from 'next/image';
import search from '@images/search.svg';
import style from '@styles/Input.module.scss';

const Input = () => {
  return (
    <div className={style.input}>
        <Image src={search}/>
        <input placeholder='Search for movies or TV series'/>
    </div>
  )
}

export default Input