import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPost from "../menuPost/MenuPost";
import MenuCategory from "../menuCategory/MenuCategory";

function Menu() {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>What's hot</h2>
      <h1 className={styles.title}>Most popular</h1>
      <MenuPost widthImage={false}></MenuPost>
      <h2 className={styles.subtitle}>Discover by topics</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategory></MenuCategory>
      <h2 className={styles.subtitle}>choose by the Editor</h2>
      <h1 className={styles.title}>Editor's pick</h1>
      <MenuPost widthImage={true}></MenuPost>
    </div>
  );
}

export default Menu;
