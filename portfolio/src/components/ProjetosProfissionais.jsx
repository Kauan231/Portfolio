import {workProjects } from "../assets/home/projetos/projetos";
import {workProjectsEN} from "../assets/home/projetos/projects";

import { useState } from "react";
import { VideoContext } from '../context/videoContext';
import { useContext } from 'react';
import { LanguageContext } from "../context/languageContext";
import './style/Projects.css';

import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

const ProfessionalProjects = () => {
    const { SetCurrentVideo, SetOpen } = useContext(VideoContext);
    const { Language } = useContext(LanguageContext);
    const [index, SetIndex] = useState(0);

    function CardVideo({Title, Image, Item, Hidden}) {
        return (
            <>
            <div className="flex ">
                <div className={`SpecialCard relative z-0 flex flex-col`} onClick={ () => { SetCurrentVideo(Item); SetOpen(true); } }>
                    <div className="bg-black/70 w-full h-full absolute z-10 justify-center items-center hidden sm:flex opacity-0 hover:opacity-100 duration-500 ">
                        <h1 className='absolute top-[50%] text-lg font-bold text-white'>{(Language == "Portuguese") ? "Visualizar" : "Show"}</h1>

                        <h1 className='absolute top-[40%] text-2xl font-bold text-white'>{Title}</h1>
                    </div>
                    <picture style={{backgroundImage: "url('" + Image + "')"}} className='Card-Image'></picture>

                </div>
            </div>
            <div className="hidden sm:hidden">
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

    function FakeCard() {
        return (
            <>
            <div className="hidden sm:flex">
                <div className={`SpecialCard relative z-0 flex flex-col`}>
                    <div className="bg-black w-full h-full absolute z-10 justify-center items-center hidden sm:flex">
                    </div>
                    <picture className='Card-Image'></picture>

                </div>
            </div>
            <div className="block sm:hidden">
                <div className={`SpecialCard-SM flex flex-col `}>
                    <picture className='Card-Image-SM'></picture>
                    <div className='p-10 w-full mb-auto grid justify-center'>
                    </div>
                </div>
            </div>

            </>

        )
    }

    function ShowCards() {
        let ArrayOfProjects = workProjectsEN;
        if(Language == "Portuguese")
        {
            ArrayOfProjects = workProjects;
        }
        let ItemsToShow = ArrayOfProjects.map((item, index) =>
            <CardVideo Title={item.Title} Image={item.Image} Item={item} key={index}> </CardVideo>
        )
        let items = ItemsToShow;

        return (
            <>
            <div className='SpecialCard-Grid hidden xl:flex'>
                <FaArrowAltCircleLeft  onClick={ () => {SetIndex(index-2) }} className={`${(index - 2) >= 0 ? "flex" :  "hidden"} w-auto h-12 m-2 text-white`}/>
                { items[index] ?
                items[index] :
                <FakeCard/>
                }

                { items[index+1] ?
                items[index+1] :
                <FakeCard/>
                }

                <FaArrowAltCircleRight onClick={ () => {SetIndex(index+2) }} className={`${(index + 2) > items.length ? "hidden" : "flex"} w-auto h-12 m-2 text-white`}/>
            </div>

            <div className='SpecialCard-Grid xl:hidden'>
                <FaArrowAltCircleLeft  onClick={ () => {SetIndex(index-1) }} className={`${(index - 1) < 0 ? "hidden" : "flex"} w-auto h-8 sm:h-[12] sm:pr-0 pr-2 m-2 text-white`}/>
                { items[index]
                }

                <FaArrowAltCircleRight onClick={ () => {SetIndex(index+1) }} className={`${(index + 2) >items.length ? "hidden" : "flex"} w-auto h-8 pl-2 m-2 text-white`}/>
            </div>
            </>
        )
    }

    return <ShowCards />
}

export default ProfessionalProjects;
