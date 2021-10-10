import Head from "next/head";
import Image from "next/image";
import Forumulario from "../components/Formulario";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>bioBody</title>
        <meta name="description" content="Entenda sua Bioimpedância" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>bioBody</h1>
      </main>

      <Forumulario />
    </div>
  );
}
