import React from "react";
import Image from "next/image";
import style from "@styles/Navbar.module.scss";
import Link from "next/link";
// Images
import logo from "@images/logo.svg";
import avatar from "@images/avatar-nathan-peterson.webp";
import menu from "@images/menu.svg";
import movie from "@images/movie.svg";
import tv from "@images/tv.svg";
import solidBookmark from "@images/solidBookmark.svg";

const size = "25px";
const Navbar = () => {
  return (
    <div>
      <nav className={style.Navbar}>
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
          <Link href='tv'>
            <li>
              <Image width={size} height={size} src={tv} />
            </li>
          </Link>
          <li>
            <Image width={size} height={size} src={solidBookmark} />
          </li>
        </ul>
        <div className={style.avatar}>
          <Image src={avatar} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
