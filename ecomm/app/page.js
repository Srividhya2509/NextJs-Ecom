import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import Login from "./components/auth/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar/>
     <Login/>
    </main>
  );
}
