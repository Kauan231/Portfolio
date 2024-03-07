import { useContext } from 'react';
import { LanguageContext } from "../context/languageContext";
import Photo from "../assets/home/documentos/1.jpg"
import './style/About.css';

export default function About() {
    const { Language } = useContext(LanguageContext);
    return (
        <> 
        
        <section id="About" className="About"> 
            <figure className="Figure">
                <img  src={Photo} className="Image"></img>
            </figure>
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
            </article>
        </section>
        <div className="Arrow" id="Arrow"></div>
        </>
    )
}