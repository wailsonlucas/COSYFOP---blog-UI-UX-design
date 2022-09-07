import Head from "next/head"
// css
import a from "../styles/about.module.css"
import g from "../styles/global_static_routes.module.css"
//components
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Aside from "../components/Aside"

export default function About() {
  return (
    <div>
    <Head>
      <title>COSYFOP | Qui sommes-nous</title>
    </Head>
      <Nav />
      <div className={g.static_route}>
        <main>
          <div className={a.title}>
            <p className={g.g_title}>Qui sommes-nous?</p>
          </div>
          <div className={g.content}>
            <p>
              COSYFOP est une organisation syndicale internationale. Elle s&#39;appuie sur le principe de solidarité entre les travailleurs et les travailleuses du secteur public du monde entier. et oeuvre pour &#34Renforcer les syndicats du secteur public à l’échelle mondiale en vue de défendre les droits et les intérêts des travailleurs et de promouvoir le rôle essentiel des services publics de qualité dans l&#39;établissement de sociétés équitables et inclusives dans lesquelles tous les individus jouissent de l’égalité d&#39;accès à ces services et de l’égalité des chances.&#34
            </p>
            <h1>A propos de PSI</h1>
            <p>
              L&#3p;Internationale des Services Publics rassemble plus de 20 millions de travailleurs/euses, représentés par plus de 700 syndicats dans 163 pays et territoires. Nous sommes une fédération syndicale internationale qui se consacre à la promotion des services publics de qualité partout dans le monde. Nos membres, dont deux-tiers sont des femmes, travaillent dans les services sociaux, la santé, les services municipaux et de la communauté, l&#39;administration centrale et les services de distribution tels que l&#39;eau et l&#39;électricité.
            </p>
            <h1>Organisations affiliées à l&#39;ISP</h1>
            <p>
              L&#39;Internationale des Services Publics rassemble plus de 20 millions de travailleuses et travailleurs, représentés par 700 syndicats dans 163 pays et territoires.
            </p>
            <br />
            <p>
              Veuillez utiliser les filtres ci-dessous pour afficher nos organisations affiliées par région, sous-région et/ou pays et/ou territoires. Vous pouvez également télécharger le répertoire de nos affiliés en format PDF:
            </p>
          </div>


        </main>
        <Aside />
      </div>
      <Footer />
    </div>
  )
}
