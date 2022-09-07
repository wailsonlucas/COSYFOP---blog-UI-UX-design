import Head from  "next/head"
// css
import s from "../styles/postView.module.css"
//components
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Aside from "../components/Aside"

export default function PostView({ post }) {
  return (
    <div>
    <Head>
      <title>COSYFOP</title>
    </Head>
      <Nav />
      <div className={s.postView_body}>
        <main>
          <b className={s.post_title}>{post.title}</b>
          <div className={s.post_content}>
            {post.content}
          </div>

          <div className={s.simular_posts}>
            <section><p>SIMULAR POSTS</p></section>
            <div>
              <div className={s.simular_post}>
                <div className={s.img_cont}>
                  <img src={"/images/static/a.jpg"} alt="" />
                </div>
                <b>Simular Post Title</b>
                <footer>
                  <span>Aug 19, 2022 </span><span>33 <i className="fa-solid fa-comment"></i> </span>
                </footer>
              </div>
            </div>
          </div>
        </main>
        <Aside />
      </div>
      <Footer />
    </div>
  )
}

export async function getStaticPaths(){
    let db = await require("../localDB.json")
    let paths = db.posts.map(post => ({ params: {pid: post.id.toString() } }) )
    return {
      paths,
      fallback: false
    }
}


export async function getStaticProps({ params }){
  let db = require("../localDB.json")
  let post = db.posts.find(post => post.id === Number(params.pid))
  return {
    props: {
      post
    }
  }
}
