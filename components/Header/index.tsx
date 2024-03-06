import React from "react";
import Link from "next/link";
import {
  AccidentIcon,
  ClubIcon,
  FrameIcon,
  PopularIcon,
  StudentIcon,
  TeacherIcon,
  Logo,
  SearchIcon,
} from "@/assets";
import * as styles from "./style.css";

const navigationList = [
  { item: "학생", href: "/student", icon: <StudentIcon /> },
  { item: "선생님", href: "/teacher", icon: <TeacherIcon /> },
  { item: "사건/사고", href: "/accident", icon: <AccidentIcon /> },
  { item: "동아리", href: "/club", icon: <ClubIcon /> },
  { item: "틀", href: "/frame", icon: <FrameIcon /> },
  { item: "인기", href: "/popular", icon: <PopularIcon /> },
];

const Header = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.navigationList}>
        <Logo className={styles.logo} />
        {navigationList.map((nav) => (
          <Link
            key={nav.item}
            href={nav.href}
            className={styles.navigationItem}
          >
            {nav.icon}
            <span>{nav.item}</span>
          </Link>
        ))}
      </ul>
      <form className={styles.searchBox}>
        <input
          placeholder="검색어를 입력하세요..."
          className={styles.searchInput}
        />
        <SearchIcon className={styles.searchButton} />
      </form>
    </div>
  );
};

export default Header;
