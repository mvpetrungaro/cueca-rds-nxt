import Head from "next/head";
import Image from "next/image";
import { useFetch } from "../hooks/fetch.hook";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cueca RDS</title>
        <meta name="description" content="A CUE Cards Rich Deck Selector" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Cueca RDS, a{" "}
          <a href="https://www.cardstheuniverseandeverything.com/">CUE Cards</a>{" "}
          Rich Deck Selector!
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
