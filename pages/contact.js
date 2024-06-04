// import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Contact() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.description}>
          <Link href="/">
            <a>&larr; back</a>
          </Link>
          <h2>Contact</h2>{" "}
          <div className={styles.grid}>
            <div>
              <p>
                <strong>Email:</strong> contact@open-ivf.com
              </p>
              <p>
                {" "}
                <strong>Phone (France):</strong> +33 7 49 96 81 75 
              </p>
            </div>{" "}
          </div>
        </div>
        <div className={styles.footer}> </div>
      </main>
    </div>
  );
}
