import { useSelector } from "react-redux"
import s from "./css/footer.module.css"
import Link from "next/link"

export default function Footer({ randomPosts }) {
  let { lang } = useSelector(state => state.MainReducer)
  return (
    <div className={s.footer}>
      <div>
        <div>
          <div className={s.img_cont}>
            <img src={"/images/static/logo.png"} className={s.footer_logo} alt="" />
          </div>
          <div className={s.footer_desc}>
            L’Internationale des Services Publics rassemble plus de 20 millions de travailleurs/euses, représentés par plus de 700 syndicats dans 163 pays et territoires. Nous sommes une fédération syndicale internationale qui se consacre à la promotion des services publics de qualité partout dans le monde.
          </div>
          <div className={s.footer_socials}>
            <Link href="/"><a className={s.side_socials_fb}><i className="fa-brands fa-facebook-f"></i></a></Link>
            <Link href="/"><a className={s.side_socials_twitter}><i className="fa-brands fa-twitter"></i></a></Link>
            <Link href="/"><a className={s.side_socials_googlePlus}><i className="fa-brands fa-google-plus-g"></i></a></Link>
            <Link href="/"><a className={s.side_socials_instagram}><i className="fa-brands fa-instagram"></i></a></Link>
            <Link href="/"><a className={s.side_socials_youtube}><i className="fa-brands fa-youtube"></i></a></Link>
            <Link href="/"><a className={s.side_socials_rss}><i className="fa-solid fa-rss"></i></a></Link>
          </div>
          <div className={s.footer_newsletter}>
            <b>Lettre D&#39;information</b>
            <input placeholder="Entrer votre Email" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className={s.featurde_posts}>
          <b>CHOISU POUR VOUS</b>
          {
           randomPosts&&randomPosts.map((rand, index) =>
             <Link key={index} href={`/${rand.id}`}>
             <a className={s.card}>
               <div className={s.img_container}>
                 <img src={`/images/static/${rand.filename}`} alt="" />
               </div>
               <div>
               <p>{
                   lang==="fr" ? rand.languages.fr.title.length > 30 ? rand.languages.fr.title.substring(0, 30) + "..." : rand.languages.fr.title
                   :
                   rand.languages.ar.length > 30 ? rand.languages.ar.substring(0, 30) + "..." : rand.languages.ar.title
                 }</p>
                 <footer>
                   <p><i className="fa-solid fa-calendar-days"></i>{new Date(rand.date).toDateString()}</p>
                   <p><i className="fa-solid fa-eye"></i>{rand.views}</p>
                 </footer>
               </div>
             </a>
             </Link>
         )}
        </div>
        <div>
          <div className={s.insta_pictures}>
            <b>Photos Instagram </b>
            <div>
              <div className={s.img_cont}>
                <img src={"/images/static/a.jpg"} alt="" />
              </div>
              <div className={s.img_cont}>
                <img src={"/images/static/b.jpg"} alt="" />
              </div>
              <div className={s.img_cont}>
                <img src={"/images/static/j1.jpg"} alt="" />
              </div>
              <div className={s.img_cont}>
                <img src={"/images/static/j2.jpg"} alt="" />
              </div>

              <div className={s.img_cont}>
                <img src={"/images/static/t1.jpg"} alt="" />
              </div>
              <div className={s.img_cont}>
                <img src={"/images/static/t2.jpeg"} alt="" />
              </div>
              <div className={s.img_cont}>
                <img src={"/images/static/t3.jpg"} alt="" />
              </div>
              <div className={s.img_cont}>
                <img src={"/images/static/t4.jpg"} alt="" />
              </div>
            </div>
          </div>
          <div className={s.last_tweet}>
            <b>Dernier Tweet</b>
            <div>
              <i className="fa-brands fa-twitter"></i>
              <p><span>@Lorem_ipsum</span> dolor sit amet, consectetur adipiscing elit, sed do @<span>eiusmod</span> tempor</p>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div>Copyright ©2022 Tous droits réservés | Ce site a été réalisé par<a className={s.footer_twitter_redirect}href="https://twitter.com/BeforecodeDev">Wailson Lucas</a></div>
        <div>
          <Link href="/">Home</Link>
          <Link href="/">About us</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Privacy</Link>
        </div>
      </section>
    </div>
  )
}
