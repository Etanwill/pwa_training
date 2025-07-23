import React from "react";
import styles from "./singlePage.module.css";
import Menu from "@/components/menu/Menu";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

function SinglePage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image
                src="/p1.jpeg"
                alt=""
                fill
                className={styles.avatar}
              ></Image>
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.05.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}></Image>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium id commodi neque magni a, sed harum, voluptatum,
                accusantium quod velit quia non ullam in expedita saepe culpa
                nemo quibusdam vel.
              </p>
              <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium id commodi neque magni a, sed harum, voluptatum,
                accusantium quod velit quia non ullam in expedita saepe culpa
                nemo quibusdam vel.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium id commodi neque magni a, sed harum, voluptatum,
                accusantium quod velit quia non ullam in expedita saepe culpa
                nemo quibusdam vel.
              </p>
          </div>
          <div className={styles.comment}>
            <Comments/>
          </div>
        </div>
        <Menu></Menu>
      </div>
    </div>
  );
}

export default SinglePage;
