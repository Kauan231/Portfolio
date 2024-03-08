import Backend  from "./Backend"
import Gamedev from "./Gamedev"
import Frontend from "./Frontend"
import '../components/style/Skills.css'

import { useContext } from 'react';
import { LanguageContext } from "../context/languageContext";

export default function AreasDeAtuacao(){
    const { Language } = useContext(LanguageContext);

    return (
        <section id="Skills" className="Section">
            <div className='Div-Center m-0 sm:pt-24'>
                <h1 className='Title-Center m-0 pb-2'>{(Language == "Portuguese") ? "Áreas de Atuação" : "Expertise"}</h1>
            </div>
            <Frontend/>
            <Backend/>
            <Gamedev/>
        </section>
    )
}