import Head from "next/head";
import Layout2 from "../components/layout2";
import mainStyles from "../styles/mainpage.module.css";
import utilStyles from "../styles/utils.module.css";
import Profile from "../components/profile";
import Postcard from "../components/postcard";

import { getSortedPostsData } from "../lib/posts";


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Main({allPostsData}) {
  return (
    <Layout2>
      <section className={mainStyles.flexcontainer}>
        <section className={mainStyles.blogPostContainer}>
                {allPostsData.map(({ id, date, title }) => (
                <Postcard id date title/>
          ))}
            </section>
              
            <Profile className={mainStyles.profileContainer}/>
        </section>
    </Layout2>
  );
}
