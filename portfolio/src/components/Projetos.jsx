import ProfessionalProjects from './ProjetosProfissionais';
import PersonalProjects from './ProjetosPessoais';
import OpenVideo from './OpenVideo';
import '../components/style/Areas.css'
import { useContext } from "react";
import { LanguageContext } from "../context/languageContext";

export default function Projetos() {
    const { Language } = useContext(LanguageContext);
    return (
        <>
        <div className='flex justify-center align-middle bg-stone-100  sm:pb-12 pb-5'>
                <span className='font-semibold lg:text-[3vw] text-[8vw] text-center lg:underline underline-offset-1  '>{(Language == "Portuguese") ? "Projetos Pessoais" : "Personal Projects"}</span>
        </div>
        
        <div className='pb-12 bg-stone-100'>
            <PersonalProjects/>

            <div className="w-full h-full bg-gradient-to-b from-slate-200 to-sky-200 pb-12 sm:pt-20 pt-12">
                <div className='flex justify-center align-middle '>
                        <span className='font-semibold lg:text-[3vw] text-[8vw] text-center lg:underline underline-offset-1 sm:pb-12 pb-5'>{(Language == "Portuguese") ? "Projetos Profissionais" : "Professional Projects"}</span>
                </div>
                <ProfessionalProjects/>
            </div>
            <div className="bg-sky-200 sm:h-[20vh] h-[10vh] w-auto sm:mb-24 mb-2" id="background"></div>
            <OpenVideo/>
        </div>
        </>
    )
}
