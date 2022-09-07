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
          <Link href="/"><a>A propos de nous</a></Link>
          <Link href="/"><a>Documents</a></Link>
          <Link href="/"><a>Organisations Amies</a></Link>
          <Link href="/"><a>Nous Contacter</a></Link>
        </div>
        <div className={s.socials_container}>
          <i className="fa-solid fa-phone"></i><span>  +213 456 789 159</span>
        </div>
        <i onClick={() => dispatch(triggerSideMenu())} className="fa-solid fa-bars"></i>
      </div>
      <div className={s.title_container}>
        <img src={"images/static/logo.png"} alt="" />
      </div>
      {sideMenu&&
        <div className={s.bottom_nav}>
          <ul>
            <li><Link href="/">APPEL A L'ACTION</Link></li>
            <li><Link href="/">DROITS SYNDICAUX</Link></li>
            <li><Link href="/">ENJEUX</Link></li>
            <li><Link href="/">SECTEUR</Link></li>
            <li><Link href="/">RESOURCES</Link></li>
            <li><Link href="/">REGIONS</Link></li>
          </ul>
          <div className={s.burger}>
            <i onClick={() => dispatch(triggerSideMenu())} className="fa-solid fa-xmark"></i>
          </div>
        </div>
      }
    </nav>
  )
}
