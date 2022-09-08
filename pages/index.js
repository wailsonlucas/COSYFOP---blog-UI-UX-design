import s from "../styles/Home.module.css"
import Link from "next/link"
import Head from "next/head"
//components
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Aside from "../components/Aside"
//React-Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"

export default function Home({ sorted }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };

  return (
    <div className={s.home}>
    <Head>
      <title>COSYFOP | Home page</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
      <Nav />
      <header>
        <Slider className={s.index_carousel} {...settings}>
          {sorted&&sorted.slice(0,4).map((post, index) =>
            <div key={index} className={s.header_child}>
              <img src={`/images/static/${post.filename}`} alt="" />
              <div className={s.content}>
                <div className={s.header}>
                  {post.tag}
                </div>
                <p>{post.title}</p>
                <footer>
                  <span>{new Date(post.date).toDateString()}</span>
                </footer>
              </div>
            </div>
          )}
        </Slider>
      </header>

      <div className={s.trending_posts}>
        <header>
          <p>Articles Tendance</p>
        </header>
        <main>
          <Link href="/3">
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

          <Link href="/4">
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

          <Link href="/5">
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

          <Link href="/6">
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
        {
          sorted&&sorted.map((post, index) =>
            <Link href={`/${post.id}`}>
              <a className={s.card}>
                <div className={s.img_container}>
                  <img src={`/images/static/${post.filename}`} alt="" />
                </div>
                <div className={s.bosyMain_card_content}>
                  <p className={s.tag}>{post.tag}</p>
                  <b>{post.title.length > 30 ? post.title.substring(0,30) + "..." : post.title}</b>
                  <footer>
                    <span>{new Date(post.date).toDateString()}</span>
                  </footer>
                  <p className={s.desc}>
                    {post.content.substring(0, 60) + "..."}
                  </p>
                </div>
              </a>
            </Link>
        )}


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

export async function getStaticProps(){
  let {posts} = require("../localDB.json")
  // let datesArr = posts.map(post => post.date)
  // let sorted = datesArr.sort().slice(0,4)
  let sorted = posts.sort(
    function(a,b) {
      if(a.date > b.date) {
        return 1
      } else if (a.date < b.date) {
        return -1
      } else {
        return 0
      }
    }
  )
  return {
    props: {
      sorted
    }
  }
}
