import { useContext, useRef } from "react";
import { LanguageContext } from "../context/languageContext";
import '../components/style/Skills.css'
import useIsVisible from "../utils/Observer";

export default function Frontend(){
    const ref1 = useRef();
    const isVisible1 = useIsVisible(ref1);
    
    const { Language } = useContext(LanguageContext);
    return (
        <article ref={ref1} className={`mb-20 Skills-Article transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`} > 
            <h1 className="Skill-Title">Frontend </h1>
            <aside className="Skills-Aside">
                {
                    (Language == "Portuguese") ?
                    <>
                    Tenho experiência com <b>ReactJS</b> e <b>Tailwind</b>, além de experiência aplicando designs feitos no Figma, 
                    Photoshop e Illustrator para interfaces web e outros softwares.
                    </>
                    :
                    <>
                    I have experience with <b>ReactJS</b> and <b>Tailwind</b>, as well as experience applying designs created in Figma, 
                    Photoshop, and Illustrator for web interfaces and other software.
                    </>
                }      
                <ul className="Stack-Items"> 
                    <li className="Stack-Title">Stack:</li>
                    <li className="Stack-Item">ReactJS</li>
                    <li className="Stack-Item">Tailwind</li>
                    <li className="Stack-Item">HTML</li>
                    <li className="Stack-Item">CSS</li>
                    <li className="Stack-Item">Javascript</li>
                    <li className="Stack-Item">Typescript</li>
                </ul>
            </aside>
            
    </article>
    )
}