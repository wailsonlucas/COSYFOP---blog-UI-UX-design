import s from '../styles/Home.module.css'
import Link from "next/link"
//components
import Nav from "../components/Nav"

export default function Home() {
  return (
    <div className={s.home}>
      <Nav />
      <header>
        <div className={s.header_child}>
          <img src={"/images/static/a.jpg"} alt="" />
          <div className={s.content}>
            <div className={s.header}>
              News
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris</p>
            <footer>
              <span>Aug 19, 2022 </span><span>33 <i className="fa-solid fa-comment"></i> </span>
            </footer>
          </div>
        </div>
        <div className={s.header_child}>
          <img src={"/images/static/b.jpg"} alt="" />
          <div className={s.content}>
            <div className={s.header}>
              News
            </div>
            <p>Sed efficitur est. Proin egestas mi nec ex consequat, vel viverra lorem </p>
            <footer>
              <span>Aug 19, 2022 </span><span>33 <i className="fa-solid fa-comment"></i> </span>
            </footer>
          </div>
        </div>
      </header>

      <div className={s.trending_posts}>
        <header>
          <p>Trending Posts</p>
        </header>
        <main>

          <div className={s.trending_post}>
            <div className={s.img_container}>
              <img src={"/images/static/t1.jpg"} alt="" />
            </div>
            <div className={s.content}>
              Lorem ipsum dolor sit amet, consectetur
            </div>
            <footer>
            <div>
              <i class="fa-regular fa-clock"></i>
              <span> Aug 19, 2022</span>
            </div>
            <div>
              <i class="fa-solid fa-comment"></i>
              <span> 33</span>
            </div>
            </footer>
          </div>

          <div className={s.trending_post}>
            <div className={s.img_container}>
              <img src={"/images/static/t2.jpg"} alt="" />
            </div>
            <div className={s.content}>
              Lorem ipsum dolor sit amet, consectetur
            </div>
            <footer>
            <div>
              <i class="fa-regular fa-clock"></i>
              <span> Aug 19, 2022</span>
            </div>
            <div>
              <i class="fa-solid fa-comment"></i>
              <span> 33</span>
            </div>
            </footer>
          </div>

          <div className={s.trending_post}>
            <div className={s.img_container}>
              <img src={"/images/static/t3.jpg"} alt="" />
            </div>
            <div className={s.content}>
              Lorem ipsum dolor sit amet, consectetur
            </div>
            <footer>
            <div>
              <i class="fa-regular fa-clock"></i>
              <span> Aug 19, 2022</span>
            </div>
            <div>
              <i class="fa-solid fa-comment"></i>
              <span> 33</span>
            </div>
            </footer>
          </div>

          <div className={s.trending_post}>
            <div className={s.img_container}>
              <img src={"/images/static/t4.jpg"} alt="" />
            </div>
            <div className={s.content}>
              Lorem ipsum dolor sit amet, consectetur
            </div>
            <footer>
            <div>
              <i class="fa-regular fa-clock"></i>
              <span> Aug 19, 2022</span>
            </div>
            <div>
              <i class="fa-solid fa-comment"></i>
              <span> 33</span>
            </div>
            </footer>
          </div>
        </main>
      </div>

      <div className={s.intro}>
          <div>
            <p className={s.shade}>What we are looking for</p>
            <p className={s.title}><span>Lorem ipsum dolor sit amet</span><span>, consectetur adipiscing elit.</span></p>
            <p className={s.desc}>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
          </div>
          <img src={"/images/static/j1.jpg"} alt="" />
      </div>

      <div className={s.intro}>
      <img src={"/images/static/j2.jpg"} alt="" />
          <div>
            <p className={s.shade}>What we are looking for</p>
            <p className={s.title}><span>Lorem ipsum dolor sit amet</span><span>, consectetur adipiscing elit.</span></p>
            <p className={s.desc}>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
          </div>
      </div>

      <div className={s.body}>
        <main className={s.bodyMain}>
          <div className={s.card}>
            <div className={s.img_container}>
              <img src={"/images/static/b.jpg"} alt="" />
            </div>
            <div className={s.bosyMain_card_content}>
              <p className={s.tag}>News</p>
              <b>Lorem ipsum dolor sit amet, consectetur adipiscing</b>
              <footer>
                <span>Aug 19, 2022 </span><span> <i className="fa-solid fa-comment"></i> 33</span>
              </footer>
              <p className={s.desc}>
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              </p>
            </div>
          </div>

          <div className={s.card}>
            <div className={s.img_container}>
              <img src={"/images/static/b.jpg"} alt="" />
            </div>
            <div className={s.bosyMain_card_content}>
              <p className={s.tag}>News</p>
              <b>Lorem ipsum dolor sit amet, consectetur adipiscing</b>
              <footer>
                <span>Aug 19, 2022 </span><span> <i className="fa-solid fa-comment"></i> 33</span>
              </footer>
              <p className={s.desc}>
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              </p>
            </div>
          </div>

          <div className={s.card}>
            <div className={s.img_container}>
              <img src={"/images/static/b.jpg"} alt="" />
            </div>
            <div className={s.bosyMain_card_content}>
              <p className={s.tag}>News</p>
              <b>Lorem ipsum dolor sit amet, consectetur adipiscing</b>
              <footer>
                <span>Aug 19, 2022 </span><span> <i className="fa-solid fa-comment"></i> 33</span>
              </footer>
              <p className={s.desc}>
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              </p>
            </div>
          </div>

          <div className={s.card}>
            <div className={s.img_container}>
              <img src={"/images/static/b.jpg"} alt="" />
            </div>
            <div className={s.bosyMain_card_content}>
              <p className={s.tag}>News</p>
              <b>Lorem ipsum dolor sit amet, consectetur adipiscing</b>
              <footer>
                <span>Aug 19, 2022 </span><span> <i className="fa-solid fa-comment"></i> 33</span>
              </footer>
              <p className={s.desc}>
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              </p>
            </div>
          </div>

          <div className={s.card}>
            <div className={s.img_container}>
              <img src={"/images/static/b.jpg"} alt="" />
            </div>
            <div className={s.bosyMain_card_content}>
              <p className={s.tag}>News</p>
              <b>Lorem ipsum dolor sit amet, consectetur adipiscing</b>
              <footer>
                <span>Aug 19, 2022 </span><span> <i className="fa-solid fa-comment"></i> 33</span>
              </footer>
              <p className={s.desc}>
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              </p>
            </div>
          </div>

          <div className={s.card}>
            <div className={s.img_container}>
              <img src={"/images/static/b.jpg"} alt="" />
            </div>
            <div className={s.bosyMain_card_content}>
              <p className={s.tag}>News</p>
              <b>Lorem ipsum dolor sit amet, consectetur adipiscing</b>
              <footer>
                <span>Aug 19, 2022 </span><span> <i className="fa-solid fa-comment"></i> 33</span>
              </footer>
              <p className={s.desc}>
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              </p>
            </div>
          </div>
        </main>
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
      </div>

    </div>
  )
}
