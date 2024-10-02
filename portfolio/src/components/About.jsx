import { useContext } from 'react';
import { LanguageContext } from "../context/languageContext";
import Photo from "../assets/home/documentos/1.jpg"
import Resume from '../assets/home/documentos/Resume.pdf'
import Curriculo from '../assets/home/documentos/Curriculo.pdf'
import './style/About.css';

export default function About() {
    const { Language } = useContext(LanguageContext);
    return (
        <> 
        
        <section id="About" className="About md:pt-24 pb-6 grid grid-cols-8 "> 
            <article className="Article">
                <h1 className="H1 lg:text-[4vw] md:text-[6vw] text-2xl">{(Language == "Portuguese") ?  "Sobre" : "About me"}</h1>
                <div className='w-full justify-items-center grid'>
                    {
                        (Language == "Portuguese") ? 
                        <>
                            <p className="md:text-2xl font-normal md:pl-[15%] md:pr-[15%] lg-pt-0 md:pt-12 md:pb-2 pt-4">
                                Tenho mais de dois anos de experiência atuando no ramo de interatividade para eventos utilizando Unity e .Net porém também trabalhando com Backend e Frontend Web em NodeJS.
                            </p>
                            <br></br>
                            <div className='hidden md:grid w-full justify-items-center'>
                                <p className="md:text-3xl text-xl font-semibold border-b-4 border-black/60 w-[70%] ">
                                    Stack:
                                </p>
                            
                                <ul className="Stack-Items-About w-full md:pl-[15%]"> 
                                    <p className="Stack-Item-About-Title">Backend:</p>
                                    <li className="Stack-Item-About">Asp.net</li>
                                    <li className="Stack-Item-About">NodeJS</li>
                                </ul>
                                <ul className="Stack-Items-About w-full md:pl-[15%]"> 
                                    <p className="Stack-Item-About-Title">Frontend:</p>
                                    <li className="Stack-Item-About">ReactJS</li>
                                    <li className="Stack-Item-About">Tailwind</li>
                                    <li className="Stack-Item-About">HTML</li>
                                    <li className="Stack-Item-About">CSS</li>
                                    <li className="Stack-Item-About">Javascript</li>
                                    <li className="Stack-Item-About">Typescript</li>
                                </ul>
                                <ul className="Stack-Items-About w-full md:pl-[15%]"> 
                                    <p className="Stack-Item-About-Title">Outros:</p>
                                    <li className="Stack-Item-About">AWS</li>
                                    <li className="Stack-Item-About">Nginx</li>
                                    <li className="Stack-Item-About">RabbitMQ</li>
                                    <li className="Stack-Item-About">Docker</li>
                                </ul>
                                <ul className="Stack-Items-About w-full md:pl-[15%]"> 
                                    <p className="Stack-Item-About-Title">Desenvolvimento de Jogos:</p>
                                    <li className="Stack-Item-About">Unity</li>
                                </ul>
                                <ul className="Stack-Items-About w-full md:pl-[15%]"> 
                                    <p className="Stack-Item-About-Title">Ferramentas:</p>
                                    <li className="Stack-Item-About">Photoshop</li>
                                    <li className="Stack-Item-About">Illustrator</li>
                                    <li className="Stack-Item-About">Premiere</li>
                                    <li className="Stack-Item-About">Figma</li>
                                    <li className="Stack-Item-About">Blender</li>
                                </ul>
                            </div>
                        </>
                        :  
                        <>
                             <p className="Paragraph md:text-xl md:pl-[15%] md:pr-[15%] lg:pt- md:pt-12 md:pb-2 pt-4">
                                I have over two years of experience working in the corporative events sector using Unity and .Net, as well as working with Backend and Frontend Web in NodeJS.
                            </p>
                            <br></br>
                            <div className='hidden md:grid w-full justify-items-center'>
                                <p className="md:text-3xl text-xl font-semibold border-b-4 border-black/60 w-[70%] ">
                                    Stack:
                                </p>
                            
                                <ul className="Stack-Items-About w-full md:pl-[15%]"> 
                                    <p className="Stack-Item-About-Title">Backend:</p>
                                    <li className="Stack-Item-About">Asp.net</li>
                                    <li className="Stack-Item-About">NodeJS</li>
                                </ul>
                                <ul className="Stack-Items-About w-full md:pl-[15%]"> 
                                    <p className="Stack-Item-About-Title">Frontend:</p>
                                    <li className="Stack-Item-About">ReactJS</li>
                                    <li className="Stack-Item-About">Tailwind</li>
                                    <li className="Stack-Item-About">HTML</li>
                                    <li className="Stack-Item-About">CSS</li>
                                    <li className="Stack-Item-About">Javascript</li>
                                    <li className="Stack-Item-About">Typescript</li>
                                </ul>
                                <ul className="Stack-Items-About w-full md:pl-[15%]"> 
                                    <p className="Stack-Item-About-Title">Other:</p>
                                    <li className="Stack-Item-About">AWS</li>
                                    <li className="Stack-Item-About">Nginx</li>
                                    <li className="Stack-Item-About">RabbitMQ</li>
                                    <li className="Stack-Item-About">Docker</li>
                                </ul>
                                <ul className="Stack-Items-About w-full md:pl-[15%]"> 
                                    <p className="Stack-Item-About-Title">Game Development:</p>
                                    <li className="Stack-Item-About">Unity</li>
                                </ul>
                                <ul className="Stack-Items-About w-full md:pl-[15%]"> 
                                    <p className="Stack-Item-About-Title">Tools:</p>
                                    <li className="Stack-Item-About">Photoshop</li>
                                    <li className="Stack-Item-About">Illustrator</li>
                                    <li className="Stack-Item-About">Premiere</li>
                                    <li className="Stack-Item-About">Figma</li>
                                    <li className="Stack-Item-About">Blender</li>
                                </ul>
                            </div>
                        </>
                    }
                </div>
                {
                    Language == "Portuguese" ? 
                    <button aria-label="Baixar currículo" className='Download-Button pt-6 pb-6 align-middle grid' onClick={
                        (e) => {
                            e.preventDefault();
                            const link = document.createElement('a'); 
                            link.download = "Curriculo.pdf";
                            link.href = Curriculo;
                            link.click();
                        }
                    }>
                        <span className='Download-Button-Text text-center'> Baixe meu curriculo</span>
                    </button>
                    :
                    <button aria-label="Download resume" className='Download-Button' onClick={
                        (e) => {
                            e.preventDefault();
                            const link = document.createElement('a');
                            link.download = "Resume.pdf";
                            link.href = Resume;
                            link.click();
                        }
                    }>
                        <span className='Download-Button-Text'> Download my Resume</span>
                    </button>

                }
                
            </article>
            <div className='lg:col-span-2 rounded-xl hidden lg:block'>
                    <img src={Photo} className='rounded-full pointer-events-none'/>
            </div>
        </section>
        <div className="Arrow bg-stone-300 -translate-y-1" id="Arrow"></div>
        </>
    )
}
