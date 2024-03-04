import { useContext } from "react";
import { LanguageContext } from "../context/languageContext";

export default function Frontend(){
    const { Language } = useContext(LanguageContext);
    return (
        <> 
            <div className="h-auto w-full justify-center items-center lg:grid lg:grid-cols-4 sm:mt-12 mt-5 Hero" id="Hero" > 
                <span className="lg:text-4xl text-xl col-span-1 p-10 underline underline-offset-4 lg:no-underline lg:text-right">Frontend </span>
                <div className="col-span-3 lg:ml-5 ">
                    <aside className="lg:text-xl text-justify lg:pr-24 lg:border-black border-l-4 lg:pl-2 sm:p-4 p-2">
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
                    
                    </aside>
                    <br></br>
                    <div className="spacing gap-2 flex flex-wrap justify-center sm:justify-normal"> 
                        <span className="lg:text-xl text-justify font-semibold p-1 ">Stack:</span>
                        <span className="lg:text-xl text-justify font-semibold p-1 bg-slate-300 border rounded-lg hover:bg-opacity-50 duration-500">ReactJS</span>
                        <span className="lg:text-xl text-justify font-semibold p-1 bg-slate-300 border rounded-lg hover:bg-opacity-50 duration-500">Tailwind</span>
                        <span className="lg:text-xl text-justify font-semibold p-1 bg-slate-300 border rounded-lg hover:bg-opacity-50 duration-500">HTML</span>
                        <span className="lg:text-xl text-justify font-semibold p-1 bg-slate-300 border rounded-lg hover:bg-opacity-50 duration-500">CSS</span>
                        <span className="lg:text-xl text-justify font-semibold p-1 bg-slate-300 border rounded-lg hover:bg-opacity-50 duration-500">Javascript</span>
                        <span className="lg:text-xl text-justify font-semibold p-1 bg-slate-300 border rounded-lg hover:bg-opacity-50 duration-500">Typescript</span>
                    </div>
                </div>
            </div>
        </>
    )
}