import { useContext, useRef } from "react";
import { LanguageContext } from "../context/languageContext";
import useIsVisible from "../utils/Observer";

import ProfessionalProjects from './ProjetosProfissionais';
import PersonalProjects from './ProjetosPessoais';
import OpenVideo from './OpenVideo';
import './style/Projects.css';

export default function Projetos() {
    const { Language } = useContext(LanguageContext);
    const ref1 = useRef();
    const isVisible1 = useIsVisible(ref1);

    return (
        <div ref={ref1} className={`transition-opacity ease-in duration-500 ${isVisible1 ? "opacity-100" : "opacity-0"} `}>
            <section id="Projects">
                <article>
                    <div className="PersonalProjects m-0 sm:pt-30 pt-10 p-5">
                        <div className='Div-Center'>
                            <h1 className='Title-Center m-0 p-0'>{(Language == "Portuguese") ? "Projetos Pessoais" : "Personal Projects"}</h1>
                        </div>
                        <PersonalProjects/>
                    </div>


                    <div className="ProfessionalProjects sm:pt-30 pt-12 sm:pb-40">
                        <div className='Div-Center  mb-0 pb-2'>
                                <span className='Title-Center m-0 p-0 '>{(Language == "Portuguese") ? "Portifólio" : "Portfolio"}</span>
                        </div>
                        <div className='Div-Center m-0 p-0'>
                                <span className='text-lg'>{(Language == "Portuguese") ? "Trabalhos realizados" : "Professional projects"}</span>
                        </div>
                        <ProfessionalProjects/>
                    </div>
                    <OpenVideo/>

                </article>
            </section>
        </div>
    )
}

//<OpenVideo/>