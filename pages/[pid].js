import { useSelector } from "react-redux"
import Head from  "next/head"
import Link from "next/link"
// css
import s from "../styles/postView.module.css"
//components
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Aside from "../components/Aside"

export default function PostView({ renderedPost, simPosts, randomPosts, sorted }) {
  let { darkMode, lang } = useSelector(state => state.MainReducer)
  return (
    <div>
    <Head>
      <title>{renderedPost.languages.fr.title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
      <Nav />
      <div style={lang==="fr"?{direction:"ltr"}:{direction:"rtl"}} className={`${s.postView_body} ${darkMode&&s.darkPostView}`}>
        <main style={lang==="fr"?{marginRight:"20px"}:{marginLeft:"20px"}}>
          <div className={s.img_cont}>
            <img src={`/images/static/${renderedPost.filename}`} alt="" />
          </div>
          <p className={s.post_title}>{lang==="fr"?renderedPost.languages.fr.title:renderedPost.languages.ar.title}</p>
          <div className={s.renderedPost_metadata}>
            <span><i className="fa-solid fa-calendar-days"></i>{new Date(renderedPost.date).toDateString()}</span><span><i className="fa-solid fa-eye"></i>{renderedPost.views}</span>
          </div>
          <div className={s.post_content}>
            {lang==="fr"?renderedPost.languages.fr.content:renderedPost.languages.ar.content}
          </div>

          <div style={lang==="fr"?{direction:"ltr"}:{direction:"rtl"}} className={s.simular_posts}>
            <section><p>{lang==="fr"?"ARTICLES SIMILAIRES":"مواضيع ممالة"}</p></section>
            {simPosts&&simPosts.map((simpost,index) =>
              <Link href={`/${simpost.id}`}>
                <a key={index}>
                  <div className={s.simular_post}>
                    <div className={s.img_cont}>
                      <img src={`/images/static/${simpost.filename}`} alt="" />
                    </div>
                    <div className={s.content}>
                      <b>{lang==="fr"?simpost.languages.fr.title:simpost.languages.ar.title}</b>
                      <p className={s.desc}>{lang==="fr"?
                        simpost.languages.fr.content.substring(0, 60) + "..."
                        :
                        simpost.languages.ar.content.substring(0, 60) + "..."
                        }
                        </p>
                      <footer>
                        <span><i className="fa-solid fa-calendar-days"></i>{new Date(simpost.date).toDateString()}</span><span><i className="fa-solid fa-eye"></i>{simpost.views}</span>
                      </footer>
                    </div>
                  </div>
                </a>
              </Link>
            )}

          </div>
        </main>
        <Aside randomPosts={randomPosts} sorted={sorted} />
      </div>
      <Footer randomPosts={randomPosts}/>
    </div>
  )
}

export async function getStaticPaths(){
    let {posts} = await require("../localDB.json")
    let paths = posts.map(post => ({ params: {pid: post.id.toString() } }) )
    return {
      paths,
      fallback: false
    }
}


export async function getStaticProps({ params }){
  const fs = require("fs")

  let {posts} = require("../localDB.json")
  //Passed to page props
  let renderedPost = [...posts].find(post => post.id === Number(params.pid))

  //Get simular posts by tag name
  let simPosts =  [...posts].filter(post => post.tag === renderedPost.tag)
  //Sorting posts - for Asside
  let sorted =  [...posts].sort(
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
  //Random posts - for Aside
  let randomPosts = [...posts].sort(() => .5 - Math.random()).slice(0,4)

  function viewsIncrease() {
    //Increase post views
    let match = posts.find(post => post.id === Number(params.pid))
    match.views++

    fs.writeFileSync("localDB.json", JSON.stringify({posts: posts.map(post => post.id === match.id ? match : post)}), (err, res) => {
      if(err) throw err
    })
  }

  viewsIncrease()

  return {
    props: {
      renderedPost,
      simPosts,
      sorted,
      randomPosts
    }
  }
}
