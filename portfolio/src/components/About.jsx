import { useContext } from 'react';
import { LanguageContext } from "../context/languageContext";
//import Photo from "../assets/home/documentos/1.jpg"
import Resume from '../assets/home/documentos/Resume.pdf'
import Curriculo from '../assets/home/documentos/Curriculo.pdf'
import './style/About.css';

export default function About() {
    const { Language } = useContext(LanguageContext);
    return (
        <> 
        
        <section id="About" className="About pb-6"> 
            
            <article className="Article">
                <h1 className="H1">{(Language == "Portuguese") ?  "Sobre" : "About me"}</h1>
                <p className="Paragraph">
                    {
                        (Language == "Portuguese") ? 
                        <>
                        Tenho mais de dois anos de experiência atuando no ramo de interatividade para eventos utilizando Unity e .Net porém também trabalhando com Backend e Frontend Web em NodeJS.
                        Além dessas tecnologias citadas, tenho experiência com: C++, C#, Javascript, Python, SQL(MariaDB, MySql), NoSQL(MongoDB), React, HTML, CSS, AWS e Nginx.
                        Trabalho bem com: Blender, Photoshop, Premiere, Illustrator e Figma. 
                        </>
                        : 
                        <>
                        I have over two years of experience working in the corporative events sector using Unity and .Net, as well as working with Backend and Frontend Web in NodeJS.
                        In addition to these mentioned technologies, I have experience with: C++, C#, Javascript, Python, SQL (MariaDB, MySQL), NoSQL (MongoDB), React, HTML, CSS, AWS, and Nginx.
                        I am proficient with: Blender, Photoshop, Premiere, Illustrator, and Figma.
                        </>
                    }
                
                </p>
                {
                    Language == "Portuguese" ? 
                    <button aria-label="Baixar currículo" className='Download-Button' onClick={
                        (e) => {
                            e.preventDefault();
                            const link = document.createElement('a');
                            link.download = "Curriculo.pdf";
                            link.href = Curriculo;
                            link.click();
                        }
                    }>
                        <span className='Download-Button-Text'> Baixe meu curriculo</span>
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
        </section>
        <div className="Arrow bg-stone-300" id="Arrow"></div>
        </>
    )
}
