import {workProjects } from "../assets/home/projetos/projects";
import { useState } from "react";
import { VideoContext } from '../context/videoContext';
import { useContext } from 'react';

const ProfessionalProjects = () => {
    const { SetCurrentVideo, SetOpen } = useContext(VideoContext);
    const [CardLimit, SetCardLimit] = useState(3);
    
    function CardVideo({Title, Image, Link, Hidden}) {
        return (
            <div className={`p-5 h-auto  bg-white m-5 rounded-[5vh] shadow-gray-600 shadow-[10px_10px_4px_0px] ${Hidden ?  "hidden" : "flex flex-col"} `}>
                <div style={{backgroundImage: "url('" + Image + "')"}} className='h-[50vh]  w-full bg-cover rounded-[2vh] border-4 border-blck'></div>
                <div className='p-10 w-full mb-auto grid justify-center'>
                    <span className='font-bold text-3xl text-black'>{Title}</span>
                </div>
                <button onClick={ () => { SetCurrentVideo(Link); SetOpen(true); } } className='bg-gray-300 mt-5 rounded-2xl text-center p-3 w-full hover:-rotate-2 duration-500'>
                    <span className='text-black font-extrathin text-2xl'>Watch</span>
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
                <div className='lg:grid lg:grid-cols-3 mb-24 '>
                    {ItemsToShow}
                </div>
                <div className="flex justify-center align-middle w-full">
                    <button onClick={()=>{
                        SetCardLimit(CardLimit+3);
                    }} 
                    className='bg-gray-900 rounded-2xl text-center p-3 w-1/2 h-1/2 hover:-rotate-2 duration-500'>
                        <span className='text-white font-extrathin text-2xl'>Show more</span>
                    </button>
                </div>
                </>
            )
        }
    
        return (
            <div className='lg:grid lg:grid-cols-3 mb-24'>
                { ItemsToShow }
            </div>
        )
    }

    return (
        <>
        <ShowCards ArrayOfProjects={workProjects} />
        </>
    )
}

export default ProfessionalProjects;
