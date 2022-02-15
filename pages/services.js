// import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Services() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.description}>
          <Link href="/">
            <a>&larr; back</a>
          </Link>
          <div className={styles.grid}>
            <h2>Services </h2>{" "}
            <div>
              <p>
                <strong>Digital:</strong> We can help your clinic or lab build
                custom mobile or web applications, and help you with your EMR
                and API integration. We use the most current technologies and
                keep things simple. lets talk!{" "}
              </p>
              <p>
                {" "}
                <strong>Business consulting:</strong>
                We can help your business sell product, provide customer
                service, and build a logistics chain in your market. Contacts us
                now to find out how we can help you.
              </p>
              <p>
                <strong>Technical Service: </strong>We can help you repair,
                install and maintain your lab technologies. We specialize in
                time-lapse incubators and software.
              </p>
            </div>{" "}
          </div>
        </div>
        <div className={styles.footer}></div>
      </main>
    </div>
  );
}
