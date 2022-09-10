import { useSelector } from "react-redux"
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

export default function Home({ sorted, trendingByViews, randomPosts }) {
  let { darkMode } = useSelector(state => state.MainReducer)
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };

  return (
    <div className={`${s.home} ${darkMode&&s.darkIndex}`}>
    <Head>
      <title>COSYFOP | SITE OFFICIEL</title>
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
                <p>{post.title.length > 30 ? post.title.substring(0, 30) + "..." : post.title}</p>
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
          {
            trendingByViews&&trendingByViews.map((trend, index) =>
            <Link key={index} href={`/${trend.id}`}>
              <a  className={s.trending_post}>
                <div className={s.img_container}>
                  <img src={`/images/static/${trend.filename}`} alt="" />
                </div>
                <div className={s.content}>
                  {trend.title.length > 30 ? trend.title.substring(0, 30) + "..." : trend.title}
                </div>
                <footer>
                <div>
                  <i className="fa-solid fa-calendar-days"></i>{new Date(trend.date).toDateString()}
                </div>
                <div>
                  <i className="fa-solid fa-eye"></i>{trend.views}
                </div>
                </footer>
              </a>
            </Link>
            )
          }
        </main>
      </div>

      <div className={`${s.intro} ${darkMode&&s.darkIntro}`}>
          <div>
            <p className={s.shade}>Pourquoi nous sommes ici ?</p>
            <p className={s.title}><span>Lorem ipsum dolor sit amet</span><span>, consectetur adipiscing elit.</span></p>
            <p className={s.desc}>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
          </div>
          <img src={"/images/static/j1.jpg"} alt="" />
      </div>

      <div className={`${s.intro} ${darkMode&&s.darkIntro}`}>
      <img src={"/images/static/j2.jpg"} alt="" />
          <div>
            <p className={s.shade}>C&#39;est notre vision !</p>
            <p className={s.title}><span>Lorem ipsum dolor sit amet</span><span>, consectetur adipiscing elit.</span></p>
            <p className={s.desc}>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
          </div>
      </div>

      <div className={`${s.body} ${darkMode&&s.darkBodyMain}`}>
        <main className={s.bodyMain}>
        {
          sorted&&sorted.map((post, index) =>
            <Link key={index} href={`/${post.id}`}>
              <a className={s.card}>
                <div className={s.img_container}>
                  <img src={`/images/static/${post.filename}`} alt="" />
                </div>
                <div className={s.bosyMain_card_content}>
                  <p className={s.tag}>{post.tag}</p>
                  <b>{post.title.length > 30 ? post.title.substring(0,30) + "..." : post.title}</b>
                  <footer>
                    <span><i className="fa-solid fa-calendar-days"></i>{new Date(post.date).toDateString()}</span><span><i className="fa-solid fa-eye"></i>{post.views}</span>
                  </footer>
                  <p className={s.desc}>
                    {post.content.substring(0, 60) + "..."}
                  </p>
                </div>
              </a>
            </Link>
        )}
        </main>
        <Aside randomPosts={randomPosts} sorted={sorted} />
      </div>

    <Footer randomPosts={randomPosts}/>
    </div>
  )
}

export async function getStaticProps(){
  let {posts} = require("../localDB.json")

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

  let trendingByViews = posts.sort((a, b) => {
    if(a.views > b.views) return -1
    if(a.views < b.views) return 1
    return 0
  }).slice(0, 4)

  let randomPosts = posts.sort(() => .5 - Math.random()).slice(0,4)

  return {
    props: {
      sorted,
      trendingByViews,
      randomPosts
    }
  }
}
