import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

function Featured() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, lama dev here!</b> discover my stories and creative ideas
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}></Image>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h1>
          <p className={styles.postDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam hic
            atque velit nihil laborum? Quo, porro eaque! Commodi quod assumenda
            dolorem officiis vel similique dicta nemo, repudiandae expedita
            voluptas perspiciatis!
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
