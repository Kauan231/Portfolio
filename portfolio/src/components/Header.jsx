import '../components/style/Header.css'
import { LanguageContext } from '../context/languageContext'
import { useContext, useState } from 'react'
import { GB, PT } from 'country-flag-icons/react/3x2'
import { VscThreeBars } from "react-icons/vsc";
import header from './content/header'

export default function Header(){
    const {Language, SetLanguage} = useContext(LanguageContext);
    const [ShowNav, SetShowNav] = useState(false);

    function ListItem(text, ref, isMobile) {
        return (
            <li>
                <a href={ref} aria-label={text} className={isMobile ? "Navbar-Mobile-Link" : "Navbar-Link"}>{text}</a>
            </li>
        )
    }

    function NavItems() {
        return header.Navlinks.map(navlink => ListItem(navlink[Language], navlink.href, false))
    }

    function NavItemsMobile() {
        return header.Navlinks.map(navlink => ListItem(navlink[Language], navlink.href, true))
    }

    function Flag() {
        return (
            <li>
            {(Language == "Portuguese") ?
                <button aria-label='Switch Language' onClick={() => SetLanguage('English')}>
                    <GB  className="Navbar-Mobile-Flag">Switch Language</GB>
                </button>
                :
                <button aria-label='Mudar Linguagem' onClick={() => SetLanguage('Portuguese')}>
                    <PT className="Navbar-Mobile-Flag">Mudar Linguagem</PT>
                </button>
                }
            </li>
        )
    }

    return (
    <header className="Header">
        <nav className="Navbar">
            <div className='Logo'>
                <a href="#" className='Logo-Item'>Kauan Ramos</a>
            </div>
            <div className='Center-Contents'>
                <ul className="Navbar-Links ">
                    <NavItems/>
                    <Flag />
                </ul>
            </div>
        </nav>
        <nav className="Navbar-Mobile">
            <button aria-label={(Language == "Portuguese") ? "Mostrar mais" : "Show More"} onClick={ () => SetShowNav(!ShowNav) }>
                <VscThreeBars className='ShowMore-Mobile-Icon'></VscThreeBars>
            </button>
            <ul className={`${ShowNav ?  "grid" : "hidden"} Navbar-Mobile-Links`}>
                    <NavItemsMobile/>
                <Flag />
            </ul>
        </nav>
    </header>
    )
}
