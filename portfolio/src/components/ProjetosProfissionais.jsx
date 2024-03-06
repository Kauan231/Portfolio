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
    
    function CardVideo({Title, Image, Link, Hidden}) {
        return (
            <div className={`SpecialCard ${Hidden ?  "hidden" : "flex flex-col"} `}>
                <picture style={{backgroundImage: "url('" + Image + "')"}} className='Card-Image'></picture>
                <div className='p-10 w-full mb-auto grid justify-center'>
                    <span className='font-bold text-3xl text-black'>{Title}</span>
                </div>
                <button onClick={ () => { SetCurrentVideo(Link); SetOpen(true); } } className='bg-gray-300 Card-Button'>
                    <span className='SpecialCard-Title'>{(Language == "Portuguese") ? "Assistir" : "Watch"}</span>
                </button>
            </div>
        )
    }

    function ShowCards({ArrayOfProjects}) {  
        let ItemsToShow = ArrayOfProjects.map((item, index) => 
            <CardVideo Title={item.Title} Description={item.Description} Image={item.Image} Link={item.Link} key={index} Hidden={((index + 1)  > CardLimit)}> </CardVideo>
        )
    
        if(ArrayOfProjects.length > CardLimit) {
            return (
                <>
                <div className='Card-Grid'>
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
            <div className='Card-Grid'>
                { ItemsToShow }
            </div>
        )
    }

    if(Language == "Portuguese") return <ShowCards ArrayOfProjects={workProjects} /> ;
    return <ShowCards ArrayOfProjects={workProjectsEN} /> ;
}

export default ProfessionalProjects;
