import { useEffect, useState, } from "react"
import { useDispatch, useSelector } from "react-redux"

import s from "./css/nav.module.css"
import Link from "next/link"
//Actions
import { triggerSideMenu, setDarkMode, setLanguage } from "../reducers/ActionsCreator"

export default function Nav() {
  const dispatch = useDispatch()
  let { sideMenu, darkMode, lang } = useSelector(state => state.MainReducer)



  const handelDarkModeToggle = () => {
      if(typeof window !== "undefined") {
        let darkState = Boolean(localStorage.darkstorage)

        if(darkState) {
          dispatch(setDarkMode(false))
          localStorage.setItem("darkstorage", false)
        } else {
          dispatch(setDarkMode(true))
          localStorage.setItem("darkstorage", true)
        }
      }
    },



  const handelLanguageToggle = () => {
      if(typeof window !== "undefined") {

        let langState = localStorage.languagestorage

        if(langState==="fr") {
          localStorage.setItem("languagestorage", "ar")
          dispatch(setLanguage("ar"))
        } else {
          localStorage.setItem("languagestorage", "fr")
          dispatch(setLanguage("fr"))
        }

        if(typeof langState === "undefined") {
            dispatch(setLanguage("fr"))
            localStorage.setItem("languagestorage", "fr")
        }

      }
    },

  return (
    <>
    <nav style={lang==="ar"?{direction:"rtl"}:{direction:"ltr"}} className={`${s.nav} ${darkMode&&s.darkNav}`}>
      <div className={s.top_nav}>
        <div className={s.links_container}>
          <Link href="/about">{lang==="fr"?"A PROPOS DE NOUS":"حولنا"}</Link>
          <Link href="/">{lang==="fr"?"RÈGLEMENTATIONS DE LA COSYFOP":"قوانين COSYFOP"}</Link>
          <Link href="/friendly-organisations"><a>{lang==="fr"?"Fédérations syndicales":"حولنا"}</a></Link>
          <Link href="/friendly-organisations"><a>{lang==="fr"?"BIBLIOTHÈQUE DES LOIS DU TRAVAIL":"مكتبة قانون العمل"}</a></Link>
          <Link href="/friendly-organisations"><a>{lang==="fr"?"INTERNATIONALES":"دوليا"}</a></Link>
          <Link href="/contact"><a>{lang==="fr"?"NOUS CONTACTER":"إتصل بنا"}</a></Link>
        </div>
        <i onClick={() => dispatch(triggerSideMenu())} className="fa-solid fa-bars"></i>
      </div>
      <div className={s.title_container}>
        <Link href="/"><img src={"images/static/logo.png"} alt="" /></Link>
      </div>

      {sideMenu&&
        <div className={s.sideNav}>
          <div>
            <div className={s.left_links}>
              <Link href="/">{lang==="fr"?"APPEL A L&#39;ACTION":"دعوة للعمل"}</Link>
              <Link href="/">{lang==="fr"?"COMMUNIQUES":"توصل"}</Link>
              <Link href="/">{lang==="fr"?"DROITS SYNDICAUX":"حقوق النقابات"}</Link>
              <Link href="/">{lang==="fr"?"REJOINDRE LA COSYFOP":"إنظم إلى COSYFOP"}</Link>
              <Link href="/">{lang==="fr"?"MEMBRES DE L&#39;EXECUTIF":"الأعضاء التنفيذيون"}</Link>
            </div>
            <div className={s.right_links}>
              <Link href="/about">{lang==="fr"?"A PROPOS DE NOUS":"حولنا"}</Link>
              <Link href="/">{lang==="fr"?"RÈGLEMENTATIONS DE LA COSYFOP":"قوانين COSYFOP"}</Link>
              <Link href="/friendly-organisations"><a>{lang==="fr"?"Fédérations syndicales":"حولنا"}</a></Link>
              <Link href="/friendly-organisations"><a>{lang==="fr"?"BIBLIOTHÈQUE DES LOIS DU TRAVAIL":"مكتبة قانون العمل"}</a></Link>
              <Link href="/friendly-organisations"><a>{lang==="fr"?"INTERNATIONALES":"دوليا"}</a></Link>
              <Link href="/contact"><a>{lang==="fr"?"NOUS CONTACTER":"إتصل بنا"}</a></Link>
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
              {
                lang==="fr"?
                <i className={s.lang_icon} onClick={handelLanguageToggle}>AR</i>
                :
                <i className={s.lang_icon} onClick={handelLanguageToggle}>FR</i>
              }
            </div>
            <div>
              <i onClick={() => dispatch(triggerSideMenu())} className="fa-solid fa-xmark"></i>
            </div>
          </footer>
        </div>
      }
    </nav>
    <div className={s.bottom_nav}>
      <ul>
        <li><Link href="/">{lang==="fr"?"APPEL A L'ACTION":"دعوة للعمل"}</Link></li>
        <li><Link href="/">{lang==="fr"?"COMMUNIQUES":"توصل"}</Link></li>
        <li><Link href="/">{lang==="fr"?"DROITS SYNDICAUX":"حقوق النقابات"}</Link></li>
        <li><Link href="/">{lang==="fr"?"REJOINDRE LA COSYFOP":"إنظم إلى COSYFOP"}</Link></li>
        <li><Link href="/">{lang==="fr"?"MEMBRES DE L'EXECUTIF":"الأعضاء التنفيذيون"}</Link></li>
        <li className={s.darkModeButtons}>
          {
            darkMode?
            <i onClick={handelDarkModeToggle} className="fa-solid fa-sun"></i>
            :
            <i onClick={handelDarkModeToggle} className="fa-solid fa-moon"></i>
          }
          {
            lang==="fr"?
            <button className={s.lang_icon} onClick={() => handelLanguageToggle("fr")}>AR</button>
            :
            <button className={s.lang_icon} onClick={() => handelLanguageToggle("ar")}>FR</button>
          }
        </li>
      </ul>
    </div>
    </>
  )
}
