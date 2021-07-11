import Head from "next/head";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Project from "../components/Project";
import Services from "../components/Services";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Henry Portfolio Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        
        <Hero />
        <Services />
        {/* <Project />
        <Contact /> */}
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
    </div>
  );
}
