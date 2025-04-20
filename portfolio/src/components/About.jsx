import { useContext, useRef } from 'react';
import { LanguageContext } from "../context/languageContext";
import Photo from "../assets/home/documentos/1.jpg";
import Resume from '../assets/home/documentos/Resume.pdf';
import Curriculo from '../assets/home/documentos/Curriculo.pdf';
import downloadIcon from '../assets/home/download.svg';
import useIsVisible from "../utils/Observer";

import './style/About.css';
import about from './content/about';

export default function About() {
    const { Language } = useContext(LanguageContext);
    const ref1 = useRef();
    const isVisible1 = useIsVisible(ref1);

    function UnorderedList(title, items) {
        return (
            <ul className="Stack-Items-About">
                <p className="Stack-Item-About-Title">{title}</p>
                {
                    items.map((item, index) => {
                        return (
                            <li key={index} className="Stack-Item-About">{item}</li>
                        )
                    })
                }
            </ul>
        )
    }

    function StackItems() {
        return about.Stack.map(stackItem => UnorderedList(stackItem[Language], stackItem.items))
    }

    return (
        <div ref={ref1} className={`transition-opacity ease-in duration-500 ${isVisible1 ? "opacity-100" : "opacity-0"} `}>
            <section id="About" ref={ref1} className={`About md:pt-24 pb-6 grid grid-cols-8`}>
                <article className="Article">
                    <h1 className="H1 lg:text-[4vw] md:text-[6vw] text-2xl">{about.About[Language].title}</h1>
                    <div className='ml-[5%] mr-[5%]'>
                        <div className='w-full justify-items-center grid'>
                            <p className="md:text-2xl font-normal  lg-pt-0 md:pt-12 md:pb-2 pt-4">
                                {about.About[Language].content}
                            </p>
                            <br></br>
                            <div className='StackConteiner'>
                                <p className="md:text-3xl text-xl font-semibold w-full">
                                    Stack:
                                </p>
                                <div className='mb-12 w-full'>
                                    <StackItems />
                                </div>
                            </div>
                        </div>
                        <button aria-label={Language == "Portuguese" ? "Baixar currículo" : "Download resume"} className='Download-Button align-middle grid w-full' onClick={
                            (e) => {
                                e.preventDefault();
                                const link = document.createElement('a');
                                link.download = Language == "Portuguese" ? "Curriculo.pdf" : "Resume.pdf";
                                link.href = Language == "Portuguese" ? Curriculo : Resume;
                                link.click();
                            }
                        }>
                            <span className="Download-Button-Text inline-flex items-center justify-between w-full  pt-4 pb-4  pr-5 pl-5">
                                <p className="m-0 text-left">
                                    {Language == "Portuguese" ? 'Baixe meu curriculo' : 'Download my Resume'}
                                </p>
                                <img className="h-6 hidden sm:block" src={downloadIcon} alt="Download Icon" />
                            </span>


                        </button>
                    </div>
                </article>
                <div className='PhotoContainer'>
                        <img src={Photo} className='Photo'/>
                </div>
            </section>
            <div className="Arrow bg-stone-300 -translate-y-1" id="Arrow"></div>
        </div>
    )
}
