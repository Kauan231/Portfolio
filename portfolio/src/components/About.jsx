import Photo from "../assets/home/documentos/1.jpg"
import { useContext } from 'react';
import { LanguageContext } from "../context/languageContext";

export default function About() {
    const { Language } = useContext(LanguageContext);
    return (
        <> 
        <div id="sobre"> 
            <div className="h-auto w-full items-center justify-center lg:grid lg:grid-cols-2 flex flex-col sm:p-10 p-5  bg-neutral-300 ">
                <div className="col-span-1 lg:place-self-end lg:mr-24 ">
                    <img  src={Photo} className=" h-auto md:w-[30vh] w-[30vw] align-middle rounded-full"></img>
                </div>
                <div className="col-span-1 mt-8 md:mt-0">
                    <span className="md:text-[3vw] text-[6vw] underline-offset-4 underline font-semibold">{(Language == "Portuguese") ?  "Sobre" : "About me"}</span>
                    <p className="font-thin lg:text-2xl mt-4">
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
                </div>
                
            </div>
        </div>
        </>
    )
}