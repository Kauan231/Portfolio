import Backend  from "./Backend"
import Gamedev from "./Gamedev"
import Frontend from "./Frontend"
import '../components/style/Areas.css'

import { useContext } from 'react';
import { LanguageContext } from "../context/languageContext";


export default function AreasDeAtuacao(){
    const { Language } = useContext(LanguageContext);

    return (
        <>
        <div className="bg-stone-100">
            <div className="bg-stone-300 sm:h-[20vh] h-[10vh] w-auto sm:mb-24" id="background"></div>
            <div className='flex justify-center align-middle'>
                <span className='font-semibold lg:text-[3vw] text-[8vw] text-center underline underline-offset-1'>{(Language == "Portuguese") ? "Áreas de Atuação" : "Expertise"}</span>
            </div>
            <Frontend/>
            <Backend/>
            <Gamedev/>
            <div className='pb-12 bg-stone-100' id='projetos'/>
        </div>
        </>
    )
}