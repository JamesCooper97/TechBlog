import postcardStyles from "../styles/postcard.module.css";
import Link from "next/link";

export default function postcard({ id, date, title }){
    return (
        <section className={postcardStyles.card}>
            <Link href={`/posts/${id}`}>{title}</Link>
        </section>
    )
}

// export default function latestPost( {id, date, title} ){
//     return(
//         <div></div>
//     )
// }