import Head from "next/head"
import Link from "next/link"
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
    <Head>
      <title>COSYFOP | Organisation Amies</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
      <Nav />
      <div className={g.static_route}>
        <main>
          <div className={f.title}>
            <p className={g.g_title}>Organisation Amies</p>
          </div>
          <div className={g.content}>
            <p>L’Internationale des Services Publics rassemble plus de 20 millions de travailleuses et travailleurs, représentés par 700 syndicats dans 163 pays et territoires.</p>
            <br />
            <p>Veuillez utiliser les filtres ci-dessous pour afficher nos organisations affiliées par région, sous-région et/ou pays et/ou territoires</p>

            <div className={f.org}>
              <div className={f.img_cont}>
                <img src={"/images/static/org4.png"} alt="" />
              </div>
              <div className={f.content}>
                <h3>Organisation Amie 1</h3>
                <p>Veuillez utiliser les filtres ci-dessous pour afficher nos organisations affiliées par région, sous-région et/ou pays et/ou territoires</p>
                <div>visite à <Link href="/">www.org-1.com</Link></div>
              </div>
            </div>


            <div className={f.org}>
              <div className={f.img_cont}>
                <img src={"/images/static/org1.png"} alt="" />
              </div>
              <div className={f.content}>
                <h3>Organisation Amie 2</h3>
                <p>Veuillez utiliser les filtres ci-dessous pour afficher nos organisations affiliées par région, sous-région et/ou pays et/ou territoires</p>
                <div>visite à <Link href="/">www.org-2.com</Link></div>
              </div>
            </div>

            <div className={f.org}>
              <div className={f.img_cont}>
                <img src={"/images/static/org2.png"} alt="" />
              </div>
              <div className={f.content}>
                <h3>Organisation Amie 3</h3>
                <p>Veuillez utiliser les filtres ci-dessous pour afficher nos organisations affiliées par région, sous-région et/ou pays et/ou territoires</p>
                <div>visite à <Link href="/">www.org-3.com</Link></div>
              </div>
            </div>

            <div className={f.org}>
              <div className={f.img_cont}>
                <img src={"/images/static/org3.png"} alt="" />
              </div>
              <div className={f.content}>
                <h3>Organisation Amie 4</h3>
                <p>Veuillez utiliser les filtres ci-dessous pour afficher nos organisations affiliées par région, sous-région et/ou pays et/ou territoires</p>
                <div>visite à <Link href="/">www.org-4.com</Link></div>
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
