import Head from "next/head";
import styles from "./layout2.module.css";

const name = "James Cooper";
export const siteTitle = "Next.js Sample Website";

export default function Layout2({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        
      </Head>
      <main>{children}</main>
    </div>
  );
}
