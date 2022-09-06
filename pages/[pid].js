
//components
import Nav from "../components/Nav"
import Footer from "../components/Footer"

export default function PostView({ post }) {
  console.log(post)
  return (
    <div>
      <Nav />
      {post.title}
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
