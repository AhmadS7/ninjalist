import Head from 'next/head';
import Footer from '../comps/Footer';
import Navbar from '../comps/Navbar';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>HomePage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id pariatur
          eaque ullam nihil consectetur quam maiores debitis voluptatem eos
          numquam !
        </p>

        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id pariatur
          eaque ullam nihil consectetur quam maiores debitis voluptatem eos
          numquam!
        </p>

        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
