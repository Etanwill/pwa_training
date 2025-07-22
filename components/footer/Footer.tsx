import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="lama blog" width={50} height={50}></Image>
          <h1 className={styles.logoText}>lama blog</h1>
        </div>
        <div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            deserunt soluta debitis tenetur. Ullam possimus molestiae aut odio
            consectetur magnam fugiat. Mollitia accusamus dolore, porro
            distinctio nesciunt iusto ipsa sit.
          </p>
          <div className={styles.icons}>
            <Image src="/facebook.png" alt="" width={18} height={18}></Image>
            <Image src="/instagram.png" alt="" width={18} height={18}></Image>
            <Image src="/tiktok.png" alt="" width={18} height={18}></Image>
            <Image src="/youtube.png" alt="" width={18} height={18}></Image>
          </div>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span >
          <Link href="/">HomePage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Conatact</Link>
        </div>
                <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span >
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Culture</Link>
        </div>
                <div className={styles.list}>
          <span className={styles.listTitle}>Socials</span >
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
