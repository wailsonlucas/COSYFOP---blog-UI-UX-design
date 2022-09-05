import s from "./css/nav.module.css"
import Link from "next/link"

export default function Nav() {
  return (
    <nav className={s.nav}>
      <div className={s.top_nav}>
        <div className={s.links_container}>
          <Link href="/"><a>Home</a></Link>
          <Link href="/"><a>News</a></Link>
          <Link href="/"><a>Sport</a></Link>
          <Link href="/"><a>Business</a></Link>
        </div>
        <div className={s.socials_container}>
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-google-plus-g"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>
      </div>
      <div className={s.title_container}>
        <img src={"images/static/logo.png"} alt="" />
      </div>
      <div className={s.bottom_nav}>
        <ul>
          <li className={s.home_a}><Link href="/">Home</Link></li>
          <li><Link href="/">News</Link></li>
          <li><Link href="/">Sport</Link></li>
          <li><Link href="/">Life Style</Link></li>
          <li><Link href="/">Business</Link></li>
        </ul>
        <div className={s.nav_search_container}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </nav>
  )
}
