import Head from "next/head";
import Layout2 from "../components/layout2";
import mainStyles from "../styles/mainpage.module.css";
import utilStyles from "../styles/utils.module.css";
import Profile from "../components/profile";

export default function Home() {
  return (
    <Layout2>
      <section className={mainStyles.flexcontainer}>
        <section className={mainStyles.blogPostContainer}>
                <section className={mainStyles.flexchild1}>
                    Flex Column 1
                </section>
                <section className={mainStyles.flexchild2}>
                    Flex Column 2
                </section>
            </section>
            <Profile className={mainStyles.profileContainer}/>
        </section>
    </Layout2>
  );
}
