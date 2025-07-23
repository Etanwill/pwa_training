import React from "react";
import styles from "./comment.module.css";
import Link from "next/link";
import Image from "next/image";
function Comments() {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Comment</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="write a comment..."
            className={styles.input}
          ></textarea>
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a Comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.10.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            praesentium obcaecati? Minima rerum laborum sint totam, obcaecati
            possimus! Culpa modi iure officiis vitae veniam eum quas! Mollitia
            rem obcaecati maiores.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.10.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            praesentium obcaecati? Minima rerum laborum sint totam, obcaecati
            possimus! Culpa modi iure officiis vitae veniam eum quas! Mollitia
            rem obcaecati maiores.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.10.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            praesentium obcaecati? Minima rerum laborum sint totam, obcaecati
            possimus! Culpa modi iure officiis vitae veniam eum quas! Mollitia
            rem obcaecati maiores.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.10.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            praesentium obcaecati? Minima rerum laborum sint totam, obcaecati
            possimus! Culpa modi iure officiis vitae veniam eum quas! Mollitia
            rem obcaecati maiores.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Comments;
