import React from "react";
import styles from "./menuPost.module.css";
import Link from "next/link";
import Image from "next/image";

function MenuPost({ widthImage}) {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {widthImage && (<div className={styles.imageConatiner}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}></Image>
        </div>)}
        <div className={styles.textConatiner}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 10.03.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {widthImage && (<div className={styles.imageConatiner}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}></Image>
        </div>)}
        <div className={styles.textConatiner}>
          <span className={`${styles.category} ${styles.culture}`}>
            culture
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 10.03.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {widthImage && (<div className={styles.imageConatiner}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}></Image>
        </div>)}
        <div className={styles.textConatiner}>
          <span className={`${styles.category} ${styles.food}`}>food</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 10.03.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {widthImage && (<div className={styles.imageConatiner}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}></Image>
        </div>)}
        <div className={styles.textConatiner}>
          <span className={`${styles.category} ${styles.fashion}`}>
            fashion
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 10.03.2024</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MenuPost;
