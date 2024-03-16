import '../components/style/Header.css'
import { LanguageContext } from '../context/languageContext'
import { useContext, useState } from 'react'
import { GB, PT } from 'country-flag-icons/react/3x2'
import { VscThreeBars } from "react-icons/vsc";

export default function Header(){
    const {Language, SetLanguage} = useContext(LanguageContext);
    const [ShowNav, SetShowNav] = useState(false);

    function SwitchLanguage() {
        if(Language == "Portuguese") {
            SetLanguage("English");
        } else {
            SetLanguage("Portuguese");
        }
    }

    return (
    <header className="Header">
        <nav className="Navbar">
            <div className='Logo'>
                <a href="#" className='Logo-Item'>Kauan Ramos</a>
            </div>
            <div className='Center-Contents'>
                <ul className="Navbar-Links ">
                    <li>
                        <a href="#About" aria-label={(Language == "Portuguese") ? "Sobre" : "About"} className="Navbar-Link">{(Language == "Portuguese") ? "Sobre" : "About"}</a>
                    </li>
                    <li>
                        <a href="#Projects" aria-label={(Language == "Portuguese") ? "Projetos" : "Projects"} className="Navbar-Link">{(Language == "Portuguese") ? "Projetos" : "Projects"}</a>
                    </li>
                    <li>
                        <a href="#Skills" aria-label={(Language == "Portuguese") ? "Habilidades" : "Skills"} className="Navbar-Link">{(Language == "Portuguese") ? "Habilidades" : "Skills"}</a>
                    </li>

                    <li>
                    {(Language == "Portuguese") ? 
                    <button aria-label='Switch Language' onClick={SwitchLanguage}>
                        <GB  className="Navbar-Mobile-Flag">Switch Language</GB>
                    </button>
                    :
                    <button aria-label='Mudar Linguagem' onClick={SwitchLanguage}>
                        <PT className="Navbar-Mobile-Flag">Mudar Linguagem</PT>
                    </button>
                    }   
                    </li>
                </ul>
            </div>
        </nav>
        <nav className="Navbar-Mobile">
            <button aria-label={(Language == "Portuguese") ? "Mostrar mais" : "Show More"} onClick={ () => SetShowNav(!ShowNav) }>
                <VscThreeBars className='ShowMore-Mobile-Icon'></VscThreeBars>
            </button>
            <ul className={`${ShowNav ?  "grid" : "hidden"} Navbar-Mobile-Links`}>
                <li><a href="#About"    aria-label={(Language == "Portuguese") ? "Sobre" : "About"}         className="Navbar-Mobile-Link">{(Language == "Portuguese") ? "Sobre" : "About"}</a></li>
                <li><a href="#Projects" aria-label={(Language == "Portuguese") ? "Projetos" : "Projects"}   className="Navbar-Mobile-Link">{(Language == "Portuguese") ? "Projetos" : "Projects"}</a></li>
                <li><a href="#Skills"   aria-label={(Language == "Portuguese") ? "Habilidades" : "Skills"}  className="Navbar-Mobile-Link">{(Language == "Portuguese") ? "Habilidades" : "Skills"}</a></li>
                {(Language == "Portuguese") ? 
                <li>
                    <button aria-label='Switch Language' onClick={SwitchLanguage}>
                        <GB  className="Navbar-Mobile-Flag">Switch Language</GB>
                    </button>
                </li> 
                :
                <li>
                    <button aria-label='Mudar Linguagem'  onClick={SwitchLanguage}>
                        <PT className="Navbar-Mobile-Flag">Mudar Linguagem</PT>
                    </button>
                </li>
                }
                
            </ul>
        </nav>
    </header>
    )
}
