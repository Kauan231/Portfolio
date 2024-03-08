import {personalProjects} from "../assets/home/projetos/projetos";
import {personalProjectsEN} from "../assets/home/projetos/projects";

import { useEffect, useState } from "react";
import { VideoContext } from '../context/videoContext';
import { useContext } from 'react';
import { LanguageContext } from "../context/languageContext";
import './style/Projects.css';

const PersonalProjects = () => {
    const { SetCurrentVideo } = useContext(VideoContext);
    const { SetOpen } = useContext(VideoContext);
    const [CardLimit, SetCardLimit] = useState(3);
    const { Language } = useContext(LanguageContext);
    const [Filter, SetFilter] = useState("All");

    function Card({Title, Image, Item, Hidden}) {
        return (
            <div className={`Card ${Hidden ?  "hidden" : "flex flex-col "}` }> 
                <article className='Card-Article'>
                    <h1 className='Card-Title'>{Title}</h1>
                </article>
                <picture style={{backgroundImage: "url('" + Image + "')"}} className='Card-Image'></picture>
                
                
                {
                    Item.Video ? <div className="grid grid-cols-2 gap-0">
                                <a href={Item.Link} className='Card-Button'>
                                    <span className='Card-Button-Text'>Github</span>
                                </a>
                                <button onClick={ () => { SetCurrentVideo(Item); SetOpen(true); } } className='Card-Button bg-gray-700'>
                                    <span className='Card-Button-Text'>{(Language == "Portuguese") ? "Visualizar" : "Show"}</span>
                                </button>
                            </div> 
                            : 
                            <a href={Item.Link} className='Card-Button Clip-1'>
                                <span className='Card-Button-Text'>Github</span>
                            </a>
                    
                }
            </div>
        )
    }

    useEffect(() => {
        SetCardLimit(3);
    }, [Filter]);
    
    function ShowCards({ArrayOfProjects}) { 
        let filtered = ArrayOfProjects;
        if(Filter != "All") {
            filtered = ArrayOfProjects.filter((item) => item.Tag == Filter);
        }   
    

        let ItemsToShow = filtered.map((item, index) => {
            return <Card Title={item.Title} Image={item.Image} Item={item} key={index} Hidden={(((index + 1)  > CardLimit))}> </Card>
        }
            
        )
    

        return (
            <>
            
            <ul className="w-full flex flex-wrap gap-8 justify-center pb-10">
                <li><button className={`${Filter == "All" ? "font-semibold text-xl" : "font-thin text-lg"}`}   onClick={() => { SetFilter("All") }}>{(Language == "Portuguese") ? "Todos" : "All"}</button></li>
                <li><button className={`${Filter == "Web" ? "font-semibold text-xl" : "font-thin text-lg"}`}   onClick={() => { SetFilter("Web") }}>{(Language == "Portuguese") ? "Sites" : "Web"}</button></li>
                <li><button className={`${Filter == "Game" ? "font-semibold text-xl" : "font-thin text-lg"}`}  onClick={() => { SetFilter("Game") }}>{(Language == "Portuguese") ? "Desenvolvimento de Jogos" : "Game Development"}</button></li>
                <li><button className={`${Filter == "Other" ? "font-semibold text-xl" : "font-thin text-lg"}`} onClick={() => { SetFilter("Other") }}>{(Language == "Portuguese") ? "Outros" : "Other"}</button></li>
            </ul>
            <div className='Card-Grid'>
                {ItemsToShow}
            </div>

            {
                filtered.length > CardLimit &&
                <div className="ShowMore-Center">
                    <button onClick={()=>{
                        SetCardLimit(CardLimit+3);
                    }} 
                    className='ShowMore-Button'>
                        <span className='Card-Button-Text'>{(Language == "Portuguese") ? "Mostrar mais" : "Show More"}</span>
                    </button>
                </div>
            }
            
            </>
        )
    }

    if( Language == "Portuguese") {
        return <ShowCards ArrayOfProjects={personalProjects} />
    }
    return <ShowCards ArrayOfProjects={personalProjectsEN} />
    
}

export default PersonalProjects;