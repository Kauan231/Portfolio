import {workProjects } from "../assets/home/projetos/projetos";
import {workProjectsEN} from "../assets/home/projetos/projects";

import { useState } from "react";
import { VideoContext } from '../context/videoContext';
import { useContext } from 'react';
import { LanguageContext } from "../context/languageContext";
import './style/Projects.css';

const ProfessionalProjects = () => {
    const { SetCurrentVideo, SetOpen } = useContext(VideoContext);
    const [CardLimit, SetCardLimit] = useState(3);
    const { Language } = useContext(LanguageContext);
    
    function CardVideo({Title, Image, Item, Hidden}) {
        return (
            <>
            <div className="hidden sm:block">
                <div className={`SpecialCard relative z-0 ${Hidden ?  "hidden" : "flex flex-col"} `} onClick={ () => { SetCurrentVideo(Item); SetOpen(true); } }>
                    <div className="bg-black/70 w-full h-full absolute z-10  justify-center items-center hidden sm:flex opacity-0 hover:opacity-100 duration-500 ">
                        <h1 className='text-2xl font-bold text-white'>{(Language == "Portuguese") ? "Visualizar" : "Show"}</h1>
                    </div>
                    <picture style={{backgroundImage: "url('" + Image + "')"}} className='Card-Image'></picture>
                    <div className='p-2 w-full mb-auto grid justify-center'>
                        <span className='font-bold text-3xl text-black'>{Title}</span>
                    </div>
                </div>
            </div>
            <div className="block sm:hidden">
                <div className={`SpecialCard-SM ${Hidden ?  "hidden" : "flex flex-col"} `}>
                    <picture style={{backgroundImage: "url('" + Image + "')"}} className='Card-Image-SM'></picture>
                    <div className='p-10 w-full mb-auto grid justify-center'>
                        <span className='font-bold text-3xl text-black'>{Title}</span>
                    </div>
                    <button onClick={ () => { SetCurrentVideo(Item); SetOpen(true); } } className='bg-gray-300 Card-Button'>
                        <span className='SpecialCard-Title-SM'>{(Language == "Portuguese") ? "Visualizar" : "Show"}</span>
                    </button>
                </div>
            </div>
            
            </>
            
        )
    }

    function ShowCards({ArrayOfProjects}) {  
        let ItemsToShow = ArrayOfProjects.map((item, index) => 
            <CardVideo Title={item.Title} Image={item.Image} Item={item} key={index} Hidden={((index + 1)  > CardLimit)}> </CardVideo>
        )
    
        if(ArrayOfProjects.length > CardLimit) {
            return (
                <>
                <div className='SpecialCard-Grid'>
                    {ItemsToShow}
                </div>
                <div className="ShowMore-Center">
                    <button onClick={()=>{
                        SetCardLimit(CardLimit+3);
                    }} 
                    className='ShowMore-Button'>
                        <span className='Card-Button-Text'>{(Language == "Portuguese") ? "Mostrar mais" : "Show More"}</span>
                    </button>
                </div>
                </>
            )
        }
    
        return (
            <div className='SpecialCard-Grid'>
                { ItemsToShow }
            </div>
        )
    }

    if(Language == "Portuguese") return <ShowCards ArrayOfProjects={workProjects} /> ;
    return <ShowCards ArrayOfProjects={workProjectsEN} /> ;
}

export default ProfessionalProjects;


/*
<button onClick={ () => { SetCurrentVideo(Item); SetOpen(true); } } className='bg-gray-300 Card-Button'>
    <span className='SpecialCard-Title'>{(Language == "Portuguese") ? "Visualizar" : "Show"}</span>
</button>
*/