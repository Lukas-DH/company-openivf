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
            <p>
              Services Digital Transformation: Our team of software developers
              and business consultants can help your clinic or lab build custom
              mobile or web application, and help you with your EMR and custom
              API integrations. No need for big development teams and crazy
              budgets. We use the most current technologies and keep things
              simple. lets talk! Business consulting Our consultants can help
              your business sell product, provide customer service, and build a
              logistics choin in your market. Contacts us now to find out how we
              can help you. Technical Service: Our technicians can help you
              repair, install and maintain your lab technologies. We specialize
              in time-lapse incubators and software.
            </p>{" "}
          </div>
        </div>
        <div className={styles.footer}>
          {" "}
          <Link href="/">
            <a>&larr; Open-IVF!</a>
          </Link>
        </div>
      </main>
    </div>
  );
}
