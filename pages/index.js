import Head from "next/head";

import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <image></image>
      <Head>
        <title>Open-IVF</title>
        <meta name="description" content="company information" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <Link href="/">
            <a>Open-IVF!</a>
          </Link>
        </h1>

        <p className={styles.description}>
          Open source <code className={styles.code}>AI and ML</code> to assisted
          reproduction. And much more...
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <Link href="/services">
              <a>
                <h2>Services &rarr;</h2>
                <p> Find out more about what we do...</p>{" "}
              </a>
            </Link>
          </div>

          <div className={styles.card}>
            <Link href="/contact">
              <a>
                <h2>Contact &rarr;</h2>
                <p> Get in touch via phone or email.</p>{" "}
              </a>
            </Link>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
        </a>
      </footer>
    </div>
  );
}
