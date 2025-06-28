"use client";
import Navbar from "../components/navbar/navbar";
import styles from "./index.module.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["600", "500", "400"], //regular, medium, semi-bold
});

export default function Home() {
  return (
    <main className={inter.className}>
      <Navbar></Navbar>
      <h1 className={styles.mainTitle}>This is the home page</h1>
    </main>
  );
}
