import '../components/style/Header.css'
import { LanguageContext } from '../context/languageContext'
import { useContext, useState } from 'react'
import { GB } from 'country-flag-icons/react/3x2'
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
    <header className="h-full sm:h-12 w-full bg-gray-700">
        <div className="lg:flex items-center h-full sm:block hidden">
            <div className='lg:flex items-center justify-start hidden'>
                <a href="/" className=' flex h-full items-center justify-start text-2lg font-medium p-12 text-white lg:visible visible hover:scale-110 transform transition duration-y'>Kauan Ramos</a>
            </div>
            <div className='flex w-full h-full items-center justify-center'>
                <ul className="flex h-full lg:w-auto  lg:space-x-36 lg:visible visible">
                    <li>
                        <a href="#sobre" className="flex h-full items-center lg:text-lg font-medium p-2 text-white hover:scale-110 transform transition duration-y">{(Language == "Portuguese") ? "Sobre" : "About"}</a>
                    </li>
                    <li>
                        <a href="#projetos" className="flex h-full items-center lg:text-lg font-medium p-2 text-white hover:scale-110 transform transition duration-y">{(Language == "Portuguese") ? "Projetos" : "Projects"}</a>
                    </li>
                    <li>
                        <a href="#eventos" className="flex h-full items-center lg:text-lg font-medium p-2 text-white hover:scale-110 transform transition duration-y">{(Language == "Portuguese") ? "Eventos" : "Events"}</a>
                    </li>
                    <li>
                        <a href="#contato" className="flex h-full items-center lg:text-lg font-medium p-2 text-white hover:scale-110 transform transition duration-y">{(Language == "Portuguese") ? "Contato" : "Contacts"}</a>
                    </li>

                    <li>
                        <GB onClick={SwitchLanguage} className="flex h-full items-center lg:text-lg font-medium p-2 text-white hover:scale-110 transform transition duration-y">Switch Language</GB>
                    </li>
                </ul>
            </div>
        </div>
        <div className="justify-items-center h-full w-full grid sm:hidden">
            <VscThreeBars className='text-white h-auto w-8 mb-6' onClick={ () => SetShowNav(!ShowNav)}></VscThreeBars>
            <div className={`${ShowNav ?  "grid" : "hidden"} h-full w-full grid-rows-4 justify-center gap-4`}>
                <a href="#sobre" className="text-center font-medium p-2 text-white text-sm">{(Language == "Portuguese") ? "Sobre" : "About"}</a>
                <a href="#projetos" className="text-center font-medium p-2 text-white text-sm">{(Language == "Portuguese") ? "Projetos" : "Projects"}</a>
                <a href="#eventos" className="text-center font-medium p-2 text-white text-sm">{(Language == "Portuguese") ? "Eventos" : "Events"}</a>
                <a href="#contato" className="text-center font-medium p-2 text-white text-sm">{(Language == "Portuguese") ? "Contato" : "Contacts"}</a>
                <GB onClick={SwitchLanguage} className="h-auto w-16 items-center font-medium p-2 text-white">Switch Language</GB>
            </div>
        </div>
    </header>
    )
}
