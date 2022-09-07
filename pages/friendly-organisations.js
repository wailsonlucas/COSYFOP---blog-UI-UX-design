// css
import f from "../styles/friendly_organisations.module.css"
import g from "../styles/global_static_routes.module.css"
//components
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Aside from "../components/Aside"

export default function About() {
  return (
    <div>
      <Nav />
      <div className={g.static_route}>
        <main>
          <div className={f.title}>
            <p className={g.g_title}>Organisation Amies</p>
          </div>
          <div className={g.content}>
            dzdz
          </div>


        </main>
        <Aside />
      </div>
      <Footer />
    </div>
  )
}
