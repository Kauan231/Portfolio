import { useContext } from "react";
import { LanguageContext } from "../context/languageContext";
import '../components/style/Skills.css'

export default function Frontend(){
    const { Language } = useContext(LanguageContext);
    return (
        <article className="Skills-Article" > 
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