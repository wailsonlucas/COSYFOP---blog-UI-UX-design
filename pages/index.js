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
  let { darkMode, lang } = useSelector(state => state.MainReducer)
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };

  return (
    <div style={lang==="ar"?{direction:"rtl"}:{direction:"ltr"}} className={`${s.home} ${darkMode&&s.darkIndex}`}>
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
                <p>{
                    lang === "fr"? post.languages.fr.title.length > 30 ? post.languages.fr.title.substring(0, 30) + "..." : post.languages.fr.title
                    :
                    post.languages.ar.title.length > 30 ? post.languages.ar.title.substring(0, 30) + "..." : post.languages.ar.title
                  }</p>
                <footer>
                  <span>{new Date(post.date).toDateString()}</span>
                </footer>
              </div>
            </div>
          )}
        </Slider>
      </header>

      <div style={lang==="ar"?{direction:"rtl"}:{direction:"ltr"}} className={s.trending_posts}>
        <header>
          <p>{lang==="fr"?"Articles Tendance":"المواضيع الشائعة"}</p>
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
                <p>{
                    lang==="fr" ? trend.languages.fr.title.length > 30 ? trend.languages.fr.substring(0, 30) + "..." : trend.languages.fr.title
                    :
                    trend.languages.ar.title.length > 30 ? trend.languages.ar.title.substring(0, 30) + "..." : trend.languages.ar.title
                  }</p>
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

      <div style={lang==="ar"?{direction:"rtl"}:{direction:"ltr"}} className={`${s.intro} ${darkMode&&s.darkIntro}`}>
          <div>
            <p className={s.shade}>{lang==="fr"?"Pourquoi nous sommes ici ?":"لماذا نحن هنا؟"}</p>
            <p className={s.title}>
              {
                lang==="fr"?
                <>
                  <span>Lorem ipsum dolor sit amet</span>
                  <span>, consectetur adipiscing elit.</span>
                </>
                :
                <>
                  <span>هذه هي مجموعة الاهداف التي نسعى الى تحقيقها</span>
                  <span>و يمكنك الانظمام الى مجتمعنا النقابي بكل سهولة</span>
                </>
              }
              </p>
            <p className={s.desc}>
              {lang==="fr"?
              <span>sed dszo eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</span>
              :
              <span>نحن نوجه اليك دعوة صريحا للانظمام الى مجتمعنا الان</span>
            }
            </p>
          </div>
          <img src={"/images/static/j2.jpg"} alt="" />
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
                  <div>
                    <span className={s.tag}>{post.tag}</span>
                  </div>
                  <h3 className={s.title}>{
                      lang==="fr" ? post.languages.fr.title.length > 30 ? post.languages.fr.title.substring(0, 30) + "..." : post.languages.fr.title
                      :
                      post.languages.ar.title.length > 30 ? post.languages.ar.title.substring(0, 30) + "..." : post.languages.ar.title
                    }</h3>
                  <footer>
                    <span><i className="fa-solid fa-calendar-days"></i>{new Date(post.date).toDateString()}</span><span><i className="fa-solid fa-eye"></i>{post.views}</span>
                  </footer>
                  <p className={s.desc}>{
                      lang==="fr" ? post.languages.fr.content.length > 30 ? post.languages.fr.content.substring(0, 30) + "..." : post.languages.fr.content
                      :
                      post.languages.ar.content.length > 30 ? post.languages.ar.content.substring(0, 30) + "..." : post.languages.ar.content
                    }</p>
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
