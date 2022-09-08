import Head from  "next/head"
// css
import s from "../styles/postView.module.css"
//components
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Aside from "../components/Aside"

export default function PostView({ renderedPost, simPosts }) {
  return (
    <div>
    <Head>
      <title>COSYFOP</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
      <Nav />
      <div className={s.postView_body}>
        <main>
          <div className={s.img_cont}>
            <img src={`/images/static/${renderedPost.filename}`} alt="" />
          </div>
          <b className={s.post_title}>{renderedPost.title}</b>
          <div className={s.post_content}>
            {renderedPost.content}
          </div>

          <div className={s.simular_posts}>

            <section><p>ARTICLES SIMILAIRES</p></section>
            {simPosts&&simPosts.map((simpost,index) =>
              <div  key={index}>
                <div className={s.simular_post}>
                  <div className={s.img_cont}>
                    <img src={`/images/static/${simpost.filename}`} alt="" />
                  </div>
                  <b>{simpost.title}</b>
                  <footer>
                    <span>{new Date(simpost.date).toDateString()}</span>
                  </footer>
                </div>
              </div>
            )}

          </div>
        </main>
        <Aside />
      </div>
      <Footer />
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
  let renderedPost = posts.find(post => post.id === Number(params.pid))

  posts.map(post => post.id === Number(params.pid) && post.views++)

  // renderedPost.views ++;
  // let posts.find(post => post.id === Number(params.id))

  let simPosts = posts.filter(post => post.tag === renderedPost.tag)

  try {
    fs.writeFile("localDB.json", JSON.stringify({posts}), (err, res) => {
      if(err) throw err
        console.log(res)
    })
    // console.log(updatingLocalDB)
  }catch(err){
    console.log(err)
  }

  return {
    props: {
      renderedPost,
      simPosts
    }
  }
}
