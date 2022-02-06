import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Services from "../components/services";

export default function Home() {
  return (
    <div className={styles.container}>
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
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>
              <Link href="/">
                <a>Services &rarr;</a>
              </Link>
            </h2>
            <p>
              {" "}
              <Link href="/services">Find out more about what we do...</Link>
            </p>{" "}
          </div>
          <div className={styles.card}>
            <h2>
              <Link href="/">
                <a>Contact &rarr;</a>
              </Link>
            </h2>
            <p>
              {" "}
              <Link href="/">Get in touch via phone or email...!</Link>
            </p>{" "}
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
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
