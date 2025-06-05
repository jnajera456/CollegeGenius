"use client";
import Navbar from "../components/navbar/navbar";
import styles from "./index.module.css";

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <h1 className={styles.mainTitle}>On the Home Page</h1>
    </main>
  );
}
