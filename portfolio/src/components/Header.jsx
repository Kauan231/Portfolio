import '../components/style/Header.css'
import { LanguageContext } from '../context/languageContext'
import { useContext } from 'react'
import { GB } from 'country-flag-icons/react/3x2'

export default function Header(){
    const {Language, SetLanguage} = useContext(LanguageContext);
    function SwitchLanguage() {
        if(Language == "Portuguese") {
            SetLanguage("English");
        } else {
            SetLanguage("Portuguese");
        }
    }
    return (
    <header className="h-12 bg-gray-700 ">
        <div className="lg:flex items-center h-full ">
            <div className='lg:flex items-center justify-start hidden'>
                <a href="/" className=' flex h-full items-center justify-start text-2lg font-medium p-12 text-white lg:visible visible hover:scale-110 transform transition duration-y'>Kauan Ramos</a>
            </div>
            <div className='flex w-full h-full items-center justify-center'>
                <ul className="flex h-full lg:w-auto  lg:space-x-36 lg:visible visible">
                    <li>
                        <a href="#sobre" className="flex h-full items-center lg:text-lg font-medium p-2 text-white hover:scale-110 transform transition duration-y">Sobre</a>
                    </li>
                    <li>
                        <a href="#projetos" className="flex h-full items-center lg:text-lg font-medium p-2 text-white hover:scale-110 transform transition duration-y">Projetos</a>
                    </li>
                    <li>
                        <a href="#eventos" className="flex h-full items-center lg:text-lg font-medium p-2 text-white hover:scale-110 transform transition duration-y">Eventos</a>
                    </li>
                    <li>
                        <a href="#contato" className="flex h-full items-center lg:text-lg font-medium p-2 text-white hover:scale-110 transform transition duration-y">Contato</a>
                    </li>

                    <li>
                        <GB onClick={SwitchLanguage} className="flex h-full items-center lg:text-lg font-medium p-2 text-white hover:scale-110 transform transition duration-y">Switch Language</GB>
                    </li>
                </ul>
            </div>

        </div>
    </header>
    )
}
