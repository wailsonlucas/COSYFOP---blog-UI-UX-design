import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import s from "./css/nav.module.css"
import Link from "next/link"
//Actions
import { triggerSideMenu, setDarkMode } from "../reducers/ActionsCreator"

export default function Nav() {
  const dispatch = useDispatch()
  let { sideMenu, darkMode } = useSelector(state => state.MainReducer)
  const [dark, setDark] = useState(false)

  // if(typeof window !== "undefined") localStorage.setItem("darkModeState", false)


  useEffect(() => {
    checkDark()
  }, [dark])

  const checkDark = () => {
    if(typeof window !== "undefined") {
      let darkState = Boolean(JSON.parse(localStorage.darkstorage))
      if(darkState) {
        dispatch(setDarkMode())
      } else {
        dispatch(setDarkMode())
      }

    }
  }

  const handelDarkModeToggle = () => {
    if(typeof window !== "undefined") {
      setDark(!dark)
      localStorage.setItem("darkstorage", dark)
    }
  }


  return (
    <nav className={`${s.nav} ${darkMode&&s.darkNav}`}>
      <div className={s.top_nav}>
        <div className={s.links_container}>
          <Link href="/about">A PROPOS DE NOUS</Link>
          <Link href="/">RÈGLEMENTATIONS DE LA COSYFOP</Link>
          <Link href="/friendly-organisations"><a>FÉDÉRATIONS SYNDICALES</a></Link>
          <Link href="/friendly-organisations"><a>BIBLIOTHÈQUE DES LOIS DU TRAVAIL</a></Link>
          <Link href="/friendly-organisations"><a>INTERNATIONALES</a></Link>
          <Link href="/contact"><a>NOUS CONTACTER</a></Link>
        </div>
        <i onClick={() => dispatch(triggerSideMenu())} className="fa-solid fa-bars"></i>
      </div>
      <div className={s.title_container}>
        <Link href="/"><img src={"images/static/logo.png"} alt="" /></Link>
      </div>

      <div className={s.bottom_nav}>
        <ul>
          <li><Link href="/">APPEL A L&#39;ACTION</Link></li>
          <li><Link href="/">COMMUNIQUES</Link></li>
          <li><Link href="/">DROITS SYNDICAUX</Link></li>
          <li><Link href="/">REJOINDRE LA COSYFOP</Link></li>
          <li><Link href="/">MEMBRES DE L&#39;EXECUTIF</Link></li>
          <li className={s.darkModeButtons}>
            {
              darkMode?
              <i onClick={handelDarkModeToggle} className="fa-solid fa-sun"></i>
              :
              <i onClick={handelDarkModeToggle} className="fa-solid fa-moon"></i>
            }
          </li>
        </ul>
      </div>

      {sideMenu&&
        <div className={s.sideNav}>
          <div>
            <div className={s.left_links}>
              <Link href="/">APPEL A L&#39;ACTION</Link>
              <Link href="/">COMMUNIQUES</Link>
              <Link href="/">DROITS SYNDICAUX</Link>
              <Link href="/">REJOINDRE LA COSYFOP</Link>
              <Link href="/">MEMBRES DE L&#39;EXECUTIF</Link>
            </div>
            <div className={s.right_links}>
              <Link href="/about">A PROPOS DE NOUS</Link>
              <Link href="/">RÈGLEMENTATIONS DE LA COSYFOP</Link>
              <Link href="/friendly-organisations"><a>FÉDÉRATIONS SYNDICALES</a></Link>
              <Link href="/friendly-organisations"><a>BIBLIOTHÈQUE DES LOIS DU TRAVAIL</a></Link>
              <Link href="/friendly-organisations"><a>INTERNATIONALES</a></Link>
              <Link href="/contact"><a>NOUS CONTACTER</a></Link>
            </div>
          </div>

          <footer>
            <div className={s.darkModeButtons}>
              {
                darkMode?
                <i onClick={handelDarkModeToggle} className="fa-solid fa-sun"></i>
                :
                <i onClick={handelDarkModeToggle} className="fa-solid fa-moon"></i>
              }
            </div>
            <i onClick={() => dispatch(triggerSideMenu())} className="fa-solid fa-xmark"></i>
          </footer>
        </div>
      }
    </nav>
  )
}
