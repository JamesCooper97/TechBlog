import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import profileStyles from "../styles/profilecard.module.css";

const name = "James Cooper"

export default function profile(){
    return (
    <div className={profileStyles.profileContainer}>
        <Image
            priority
            src="/images/standard.jpg"
            className={profileStyles.picture}
            height={144}
            width={144}
            alt=""
        />
        <section>
          James Cooper
        </section>
        <section>
          MAP
        </section>

      </div>)
}