import { useSelector } from "react-redux"
import s from "./css/aside.module.css"
import Link from "next/link"
//React-Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"

export default function Aside({ sorted, randomPosts }) {
  const { darkMode } = useSelector(state => state.MainReducer)
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <aside className={`${s.bodyAside} ${darkMode&&s.DarkBodyAside}`}>

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
        <Slider {...settings}>
        {
          sorted&&sorted.slice(0,4).map((sort, index) =>
          <Link key={index} href={`/${sort.id}`}>
            <a className={s.card}>
              <div className={s.img_container}>
                <img src={`/images/static/${sort.filename}`} alt="" />
              </div>
              <p>{sort.title.length > 30 ? sort.title.substring(0, 30) + "..." : sort.title}</p>
              <footer>
                <span><i className="fa-solid fa-calendar-days"></i>{new Date(sort.date).toDateString()}</span><span><i className="fa-solid fa-eye"></i>{sort.views}</span>
              </footer>
            </a>
          </Link>
        )}
        </Slider>
      </div>

      <div className={s.aside_trending}>
        <div>
          CHOISU POUR VOUS
        </div>
        {
          randomPosts&&randomPosts.map((rand, index) =>
          <Link key={index} href={`/${rand.id}`}>
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
