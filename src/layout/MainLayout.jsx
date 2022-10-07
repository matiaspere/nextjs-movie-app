import React from "react";
import Navbar from '../Components/Navbar';
import style from '@styles/MainLayout.module.scss';

const Layout = ({children}) => {
  return (
    <>
      <div className={style.MainLayout}>
        <Navbar />
        {/* {children} */}
        <div className={style.children}>
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
