import s from '../styles/Home.module.css'
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
          hhh
        </main>
      </div>
    </div>
  )
}
