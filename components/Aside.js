import s from "./css/aside.module.css"
import Link from "next/link"


export default function Aside() {
  return (
    <aside className={s.bodyAside}>

      <div className={s.ad_zone}>
        <i className="fa-solid fa-bullhorn"></i>
        <p>Ads space</p>
      </div>

      <div className={s.side_socials}>
        <section>STAY CONNECTED</section>
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
        <p>new letter</p>
        <input placeholder="Enter your Email" />
        <button>Subscribe</button>
      </div>

      <div className={s.aside_slideShow}>
        <div className={s.card}>
          <div className={s.img_container}>
            <img src={"/images/static/j1.jpg"} alt="" />
          </div>
          <p>Ttile</p>
          <footer>
            <span>Aug 19, 2022 </span><span> <i className="fa-solid fa-comment"></i> 33</span>
          </footer>
        </div>
      </div>

      <div className={s.aside_trending}>
        <div className={s.card}>
          <div className={s.img_container}>
            <img src={"/images/static/a.jpg"} alt="" />
          </div>
          <div>
            <b>Title</b>
            <footer>
              <span>Aug 19, 2022 </span><span> <i className="fa-solid fa-comment"></i> 33</span>
            </footer>
          </div>
        </div>
        <div className={s.card}>
          <div className={s.img_container}>
            <img src={"/images/static/b.jpg"} alt="" />
          </div>
          <div>
            <b>Title</b>
            <footer>
              <span>Aug 19, 2022 </span><span> <i className="fa-solid fa-comment"></i> 33</span>
            </footer>
          </div>
        </div>
        <div className={s.card}>
          <div className={s.img_container}>
            <img src={"/images/static/t1.jpg"} alt="" />
          </div>
          <div>
            <b>Title</b>
            <footer>
              <span>Aug 19, 2022 </span><span> <i className="fa-solid fa-comment"></i> 33</span>
            </footer>
          </div>
        </div>
        <div className={s.card}>
          <div className={s.img_container}>
            <img src={"/images/static/t2.jpg"} alt="" />
          </div>
          <div>
            <b>Title</b>
            <footer>
              <span>Aug 19, 2022 </span><span> <i className="fa-solid fa-comment"></i> 33</span>
            </footer>
          </div>
        </div>
      </div>

    </aside>
  )
}
