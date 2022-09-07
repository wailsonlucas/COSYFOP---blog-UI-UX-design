import { useDispatch, useSelector } from "react-redux"

import s from "./css/nav.module.css"
import Link from "next/link"
//Actions
import { triggerSideMenu } from "../reducers/ActionsCreator"

export default function Nav() {
  const dispatch = useDispatch()
  let { sideMenu } = useSelector(state => state.MainReducer)
  return (
    <nav className={s.nav}>
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
        <img src={"images/static/logo.png"} alt="" />
      </div>
      {sideMenu&&
        <div className={s.bottom_nav}>
          <ul>
            <li><Link href="/">APPEL A L&#39;ACTION</Link></li>
            <li><Link href="/">COMMUNIQUES</Link></li>
            <li><Link href="/">DROITS SYNDICAUX</Link></li>
            <li><Link href="/">REJOINDRE LA COSYFOP</Link></li>
            <li><Link href="/">MEMBRES DE L&#39;EXECUTIF</Link></li>
          </ul>
          <div className={s.burger}>
            <i onClick={() => dispatch(triggerSideMenu())} className="fa-solid fa-xmark"></i>
          </div>
        </div>
      }
    </nav>
  )
}
