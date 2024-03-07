import { useContext } from "react";
import { LanguageContext } from "../context/languageContext";

import ProfessionalProjects from './ProjetosProfissionais';
import PersonalProjects from './ProjetosPessoais';
import OpenVideo from './OpenVideo';
import './style/Projects.css';

export default function Projetos() {
    const { Language } = useContext(LanguageContext);
    return (
        <section id="Projects">
            <article>
                <div className="PersonalProjects m-0 p-0">
                    <div className='Div-Center'>
                        <h1 className='Title-Center m-0 p-0'>{(Language == "Portuguese") ? "Projetos Pessoais" : "Personal Projects"}</h1>
                    </div>
                    <PersonalProjects/>
                </div>
                

                <div className="ProfessionalProjects pt-0 ">
                    <div className='Div-Center'>
                            <span className='Title-Center'>{(Language == "Portuguese") ? "Projetos Profissionais" : "Professional Projects"}</span>
                    </div>
                    <ProfessionalProjects/>
                </div>
                
                <OpenVideo/>
            </article>
        </section>
    )
}
