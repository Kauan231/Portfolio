import {personalProjects} from "../assets/home/projetos/projetos";
import {personalProjectsEN} from "../assets/home/projetos/projects";

import { useState } from "react";
import { VideoContext } from '../context/videoContext';
import { useContext } from 'react';
import { LanguageContext } from "../context/languageContext";
import './style/Projects.css';

const PersonalProjects = () => {
    const { SetCurrentVideo } = useContext(VideoContext);
    const { SetOpen } = useContext(VideoContext);
    const [CardLimit, SetCardLimit] = useState(3);
    const { Language } = useContext(LanguageContext);

    function Card({Title, Image, Item, Hidden}) {
        return (
            <div className={`Card ${Hidden ?  "hidden" : "flex flex-col"}`}>
                <picture style={{backgroundImage: "url('" + Image + "')"}} className='Card-Image'></picture>
                <article className='Card-Article'>
                    <h1 className='Card-Title'>{Title}</h1>
                </article>
                
                {
                    Item.Video ? <div className="grid grid-cols-2 gap-5">
                                <a href={Item.Link} className='Card-Button'>
                                    <span className='Card-Button-Text'>Github</span>
                                </a>
                                <button onClick={ () => { SetCurrentVideo(Item); SetOpen(true); } } className='Card-Button'>
                                    <span className='Card-Button-Text'>{(Language == "Portuguese") ? "Visualizar" : "Show"}</span>
                                </button>
                            </div> 
                            : 
                            <a href={Item.Link} className='Card-Button'>
                                <span className='Card-Button-Text'>Github</span>
                            </a>
                    
                }
            </div>
        )
    }
    
    function ShowCards({ArrayOfProjects}) { 
        let ItemsToShow = ArrayOfProjects.map((item, index) => 
            <Card Title={item.Title} Image={item.Image} Item={item} key={index} Hidden={((index + 1)  > CardLimit)}> </Card>
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

    if( Language == "Portuguese") {
        return <ShowCards ArrayOfProjects={personalProjects} />
    }
    return <ShowCards ArrayOfProjects={personalProjectsEN} />
    
}

export default PersonalProjects;