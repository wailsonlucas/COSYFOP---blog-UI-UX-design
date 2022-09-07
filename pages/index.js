import s from "../styles/Home.module.css"
import Link from "next/link"
import Head from "next/head"
//components
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Aside from "../components/Aside"


export default function Home() {

  return (
    <div className={s.home}>
    <Head>
      <title>COSYFOP | Home page</title>
    </Head>
      <Nav />
      <header>
        <Link href="/5">
        <a className={s.header_child}>
          <img src={"/images/static/a.jpg"} alt="" />
          <div className={s.content}>
            <div className={s.header}>
              News
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris</p>
            <footer>
              <span>Jan 19, 2022 </span><span>33 <i className="fa-solid fa-comment"></i> </span>
            </footer>
          </div>
        </a>
        </Link>
        <Link href="/6">
        <a className={s.header_child}>
          <img src={"/images/static/b.jpg"} alt="" />
          <div className={s.content}>
            <div className={s.header}>
              News
            </div>
            <p>Sed efficitur est. Proin egestas mi nec ex consequat, vel viverra lorem </p>
            <footer>
              <span>Jan 19, 2022 </span><span>33 <i className="fa-solid fa-comment"></i> </span>
            </footer>
          </div>
        </a>
        </Link>
      </header>

      <div className={s.trending_posts}>
        <header>
          <p>Articles Tendance</p>
        </header>
        <main>
          <Link href="/1">
          <a  className={s.trending_post}>
            <div className={s.img_container}>
              <img src={"/images/static/t1.jpg"} alt="" />
            </div>
            <div className={s.content}>
              Lorem ipsum dolor sit amet, consectetur
            </div>
            <footer>
            <div>
              <i className="fa-regular fa-clock"></i>
              <span> Jan 19, 2022</span>
            </div>
            <div>
              <i className="fa-solid fa-comment"></i>
              <span> 33</span>
            </div>
            </footer>
          </a>
          </Link>

          <Link href="/2">
          <a className={s.trending_post}>
            <div className={s.img_container}>
              <img src={"/images/static/t2.jpeg"} alt="" />
            </div>
            <div className={s.content}>
              Lorem ipsum dolor sit amet, consectetur
            </div>
            <footer>
            <div>
              <i className="fa-regular fa-clock"></i>
              <span> Jan 19, 2022</span>
            </div>
            <div>
              <i className="fa-solid fa-comment"></i>
              <span> 33</span>
            </div>
            </footer>
          </a>
          </Link>

          <Link href="/3">
          <a className={s.trending_post}>
            <div className={s.img_container}>
              <img src={"/images/static/t3.jpg"} alt="" />
            </div>
            <div className={s.content}>
              Lorem ipsum dolor sit amet, consectetur
            </div>
            <footer>
            <div>
              <i className="fa-regular fa-clock"></i>
              <span> Jan 19, 2022</span>
            </div>
            <div>
              <i className="fa-solid fa-comment"></i>
              <span> 33</span>
            </div>
            </footer>
          </a>
          </Link>

          <Link href="/4">
          <a className={s.trending_post}>
            <div className={s.img_container}>
              <img src={"/images/static/t4.jpg"} alt="" />
            </div>
            <div className={s.content}>
              Lorem ipsum dolor sit amet, consectetur
            </div>
            <footer>
            <div>
              <i className="fa-regular fa-clock"></i>
              <span> Jan 19, 2022</span>
            </div>
            <div>
              <i className="fa-solid fa-comment"></i>
              <span> 33</span>
            </div>
            </footer>
          </a>
          </Link>
        </main>
      </div>

      <div className={s.intro}>
          <div>
            <p className={s.shade}>Pourquoi nous sommes ici ?</p>
            <p className={s.title}><span>Lorem ipsum dolor sit amet</span><span>, consectetur adipiscing elit.</span></p>
            <p className={s.desc}>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
          </div>
          <img src={"/images/static/j1.jpg"} alt="" />
      </div>

      <div className={s.intro}>
      <img src={"/images/static/j2.jpg"} alt="" />
          <div>
            <p className={s.shade}>C&#39;est notre vision !</p>
            <p className={s.title}><span>Lorem ipsum dolor sit amet</span><span>, consectetur adipiscing elit.</span></p>
            <p className={s.desc}>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
          </div>
      </div>

      <div className={s.body}>
        <main className={s.bodyMain}>
          <Link href="/7">
          <a className={s.card}>
            <div className={s.img_container}>
              <img src={"/images/static/b.jpg"} alt="" />
            </div>
            <div className={s.bosyMain_card_content}>
              <p className={s.tag}>News</p>
              <b>Lorem ipsum dolor sit amet, consectetur adipiscing</b>
              <footer>
                <span>Jan 19, 2022 </span><span> <i className="fa-solid fa-comment"></i> 33</span>
              </footer>
              <p className={s.desc}>
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              </p>
            </div>
          </a>
          </Link>

          <Link href="/8">
          <a className={s.card}>
            <div className={s.img_container}>
              <img src={"/images/static/b.jpg"} alt="" />
            </div>
            <div className={s.bosyMain_card_content}>
              <p className={s.tag}>News</p>
              <b>Lorem ipsum dolor sit amet, consectetur adipiscing</b>
              <footer>
                <span>Jan 19, 2022 </span><span> <i className="fa-solid fa-comment"></i> 33</span>
              </footer>
              <p className={s.desc}>
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              </p>
            </div>
          </a>
          </Link>

          <Link href="/8">
          <a className={s.card}>
            <div className={s.img_container}>
              <img src={"/images/static/b.jpg"} alt="" />
            </div>
            <div className={s.bosyMain_card_content}>
              <p className={s.tag}>News</p>
              <b>Lorem ipsum dolor sit amet, consectetur adipiscing</b>
              <footer>
                <span>Jan 19, 2022 </span><span> <i className="fa-solid fa-comment"></i> 33</span>
              </footer>
              <p className={s.desc}>
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              </p>
            </div>
          </a>
          </Link>

          <Link href="/9">
          <a className={s.card}>
            <div className={s.img_container}>
              <img src={"/images/static/b.jpg"} alt="" />
            </div>
            <div className={s.bosyMain_card_content}>
              <p className={s.tag}>News</p>
              <b>Lorem ipsum dolor sit amet, consectetur adipiscing</b>
              <footer>
                <span>Jan 19, 2022 </span><span> <i className="fa-solid fa-comment"></i> 33</span>
              </footer>
              <p className={s.desc}>
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              </p>
            </div>
          </a>
          </Link>

          <Link href="/10">
          <a className={s.card}>
            <div className={s.img_container}>
              <img src={"/images/static/b.jpg"} alt="" />
            </div>
            <div className={s.bosyMain_card_content}>
              <p className={s.tag}>News</p>
              <b>Lorem ipsum dolor sit amet, consectetur adipiscing</b>
              <footer>
                <span>Jan 19, 2022 </span><span> <i className="fa-solid fa-comment"></i> 33</span>
              </footer>
              <p className={s.desc}>
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              </p>
            </div>
          </a>
          </Link>

          <Link href="/11">
          <a className={s.card}>
            <div className={s.img_container}>
              <img src={"/images/static/b.jpg"} alt="" />
            </div>
            <div className={s.bosyMain_card_content}>
              <p className={s.tag}>News</p>
              <b>Lorem ipsum dolor sit amet, consectetur adipiscing</b>
              <footer>
                <span>Jan 19, 2022 </span><span> <i className="fa-solid fa-comment"></i> 33</span>
              </footer>
              <p className={s.desc}>
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              </p>
            </div>
          </a>
          </Link>
        </main>
        <Aside />
      </div>

    <Footer />
    </div>
  )
}
