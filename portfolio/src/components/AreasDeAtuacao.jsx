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
            <div className="Arrow" id="Arrow"></div>
            <div className='Div-Center'>
                <h1 className='Title-Center'>{(Language == "Portuguese") ? "Áreas de Atuação" : "Expertise"}</h1>
            </div>
            <Frontend/>
            <Backend/>
            <Gamedev/>
        </section>
    )
}