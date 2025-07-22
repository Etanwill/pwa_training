import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Image from "next/image";
import Card from "../card/card";

function CardList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Recent Posts</h1>
      <div className={styles.Posts}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  );
}

export default CardList;
