import Head from "next/head";
import styles from "./layout2.module.css";
import Navbar from "./navbar";

const name = "James Cooper";
export const siteTitle = "Blog";

export default function Layout2({ children, home }) {
  return (
    <div>
      <Navbar />
      <Head>
        
      </Head>
      <div className={styles.container}>
        <main>{children}</main>
      </div>
    </div>
  );
}
