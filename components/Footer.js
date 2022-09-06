import s from "./css/footer.module.css"
import Link from "next/link"

export default function Footer() {
  return (
    <div className={s.footer}>
      <div>
        <div>
          <div className={s.img_cont}>
            <img src={"/images/static/logo.png"} className={s.footer_logo} alt="" />
          </div>
          <div className={s.footer_desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
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
            <b>New letter</b>
            <input placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className={s.featurde_posts}>
          <b>FEATURED POSTS</b>

          <div className={s.card}>
            <div className={s.img_container}>
              <img src={"/images/static/j1.jpg"} alt="" />
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
              <img src={"/images/static/j2.jpg"} alt="" />
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

        </div>
        <div>
          <div className={s.insta_pictures}>
            <b>INSTAGRAM PICTURES </b>
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
                <img src={"/images/static/t2.jpg"} alt="" />
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
            <b>LATEST TWEET</b>
            <div>
              <i className="fa-brands fa-twitter"></i>
              <p><span>@Lorem_ipsum</span> dolor sit amet, consectetur adipiscing elit, sed do @<span>eiusmod</span> tempor</p>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div>Copyright ©2022 All rights reserved | This template is made with by Wailson Lucas</div>
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
