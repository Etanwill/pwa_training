import Image from "next/image";
import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "@/components/featured/featured";
import CardList from "@/components/cardList/CardList";
import CategoryList from "@/components/categoryList/CategoryList";
import Menu from "@/components/menu/Menu";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList />
        <Menu/>
      </div>
    </div>
  );
}
