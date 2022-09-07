import Head from "next/head"
// css
import c from "../styles/contact.module.css"
import g from "../styles/global_static_routes.module.css"
//components
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Aside from "../components/Aside"

export default function About() {
  return (
    <div className={c.contact}>
    <Head>
      <title>COSYFOP | Nous Contacter</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
      <Nav />
      <div className={g.static_route}>
        <main>
          <div className={c.title}>
            <p className={g.g_title}>Nous Contacter</p>
          </div>
          <div className={g.content}>
            <h1>Internationale des Services Publics</h1>
            <div className={c.top_contact}>
              <div>
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <p>45 avenue Voltaire</p>
                  <p>BP 9</p>
                  <p>01211 Ferney-Voltaire Cedex</p>
                  <p>France</p>
                </div>
              </div>
              <div>
                <i className="fa-solid fa-phone"></i>
                <div>
                  <p>Office Tel: +33(0)450406464</p>
                  <p>Office Fax: +33(0)450407320</p>
                  <p>Office e-mail: psi@world-psi.org</p>
                  <p>Web: www.world-psi.org</p>
                </div>
              </div>
            </div>
            <div className={c.bottom_contact}>
              <i className="fa-solid fa-envelope"></i>
              <div>
                <input type="email" className={c.all_inputs} placeholder="Email" />
                <input className={c.all_inputs} placeholder="Sujet" />
                <textarea rows="10" className={c.all_inputs} placeholder="Message"></textarea>
                <button>Submit</button>
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
