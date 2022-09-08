import s from "./css/aside.module.css"
import Link from "next/link"


export default function Aside({ randomPosts }) {
  return (
    <aside className={s.bodyAside}>

      <div className={s.ad_zone}>
        <i className="fa-solid fa-bullhorn"></i>
        <p>Espace Publicitaire</p>
      </div>

      <div className={s.side_socials}>
        <section>Rester Connecté</section>
        <div>
          <Link href="/"><a className={s.side_socials_fb}><i className="fa-brands fa-facebook-f"></i></a></Link>
          <Link href="/"><a className={s.side_socials_twitter}><i className="fa-brands fa-twitter"></i></a></Link>
          <Link href="/"><a className={s.side_socials_googlePlus}><i className="fa-brands fa-google-plus-g"></i></a></Link>
          <Link href="/"><a className={s.side_socials_instagram}><i className="fa-brands fa-instagram"></i></a></Link>
          <Link href="/"><a className={s.side_socials_youtube}><i className="fa-brands fa-youtube"></i></a></Link>
          <Link href="/"><a className={s.side_socials_rss}><i className="fa-solid fa-rss"></i></a></Link>
        </div>
      </div>

      <div className={s.news_letter}>
        <p>Lettre D&#39;information</p>
        <input placeholder="Entrer votre Email" />
        <button>S&#39;Abonner</button>
      </div>

      <div className={s.aside_slideShow}>
        <div className={s.card}>
          <div className={s.img_container}>
            <img src={"/images/static/j1.jpg"} alt="" />
          </div>
          <p>Titre de l&#39;article</p>
          <footer>
            <span><i className="fa-solid fa-calendar-days"></i>Jan 19, 2022 </span><span> <i className="fa-solid fa-eye"></i>33</span>
          </footer>
        </div>
      </div>

      <div className={s.aside_trending}>
        {
          randomPosts&&randomPosts.map((rand, index) =>
          <Link href={`/${rand.id}`}>
            <a className={s.card}>
              <div className={s.img_container}>
                <img src={`/images/static/${rand.filename}`} alt="" />
              </div>
                <div>
              <div className={s.title}>{rand.title.length > 30 ? rand.title.substring(0, 30) + "..." : rand.title}</div>
              <footer>
                <p><i className="fa-solid fa-calendar-days"></i>{new Date(rand.date).toDateString()}</p><p> <i className="fa-solid fa-eye"></i>{rand.views}</p>
              </footer>
              </div>
            </a>
          </Link>
        )}
        </div>
    </aside>
  )
}

export async function getStaticProps(){
  let { posts } = require("../localDB.json")
  // let rendomPosts posts.fin
  return {
    props: {
      rendomPosts: null
    }
  }
}
