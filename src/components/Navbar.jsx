import React from "react";
import Image from "next/image";
import style from "@styles/Navbar.module.scss";
import Link from "next/link";
import AppContext from "context/AppContext";
// Images
import logo from "@images/logo.svg";
import avatar from "@images/avatar-nathan-peterson.webp";
import menu from "@images/menu.svg";
import movie from "@images/movie.svg";
import tv from "@images/tv.svg";
import solidBookmark from "@images/solidBookmark.svg";
import switchOff from "@images/switchOff.svg";
import switchOn from "@images/switchOn.svg";

const size = "25px";
const Navbar = () => {
  const { darkMode, handleDarkMode } = React.useContext(AppContext);

  return (
    <div className={darkMode ? style.ContentLight : style.Content}>
      <nav className={darkMode ? style.NavbarLight : style.Navbar}>
        <Image margin="0" padding="0" src={logo} />
        <ul>
          <Link href="/">
            <li>
              <Image width={size} height={size} src={menu} />
            </li>
          </Link>
          <Link href="/movies">
            <li>
              <Image width={size} height={size} src={movie} />
            </li>
          </Link>
          <Link href="/tv">
            <li>
              <Image width={size} height={size} src={tv} />
            </li>
          </Link>
          <Link href="/bookmarked">
            <li>
              <Image width={size} height={size} src={solidBookmark} />
            </li>
          </Link>
        </ul>
        <div className={style.AvatarToggle}>
          <div onClick={handleDarkMode} className={style.toggle}>
            {darkMode ? <Image src={switchOn} /> : <Image src={switchOff} />}
          </div>
          <div className={style.avatar}>
            <Image src={avatar} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
