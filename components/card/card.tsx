import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" className={styles.image} alt="" fill></Image>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.details}>
          <span className={styles.date}>07.03.2025 - </span>
          <span className={styles.category}>Culture</span>
          </div>
          <Link href="/"></Link>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam,
            impedit? Nemo ab placeat facere optio accusantium. Molestiae
            quisquam earum necessitatibus eum ut repudiandae officia, minus
            quasi expedita blanditiis nobis voluptatibus!
          </p>
          <Link href="/" className={styles.link}>Read More</Link>
      </div>
    </div>
  );
}

export default Card;
