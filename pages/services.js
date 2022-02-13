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
                <strong>Digital:</strong> Our team of software developers and
                business consultants can help your lab build mobile or web
                application. We can help you with your EMR and custom API
                integrations. We use the most current technologies and keep
                things simple.{" "}
                <Link href="/contact">
                  <a>&rarr; lets talk!</a>
                </Link>{" "}
              </p>
              <p>
                {" "}
                <strong>Business consulting:</strong>
                Our consultants can help your business sell product, provide
                customer service, and build a logistics chain in your market.
                Contacts us now to find out how we can help you.
              </p>
              <p>
                <strong>Technical Service: </strong>Our technicians can help you
                repair, install and maintain your lab technologies. We
                specialize in time-lapse incubators and software.
              </p>
              <p>
                {" "}
                <Link href="/contact">
                  <a>&rarr; lets talk!</a>
                </Link>{" "}
              </p>
            </div>{" "}
          </div>
        </div>
        <div className={styles.footer}></div>
      </main>
    </div>
  );
}
