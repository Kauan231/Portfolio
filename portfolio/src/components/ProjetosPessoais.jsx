import {personalProjects} from "../assets/home/projetos/projetos";
import { useState } from "react";
import { VideoContext } from '../context/videoContext';
import { useContext } from 'react';

const PersonalProjects = () => {
    const { SetCurrentVideo } = useContext(VideoContext);
    const { SetOpen } = useContext(VideoContext);
    const [CardLimit, SetCardLimit] = useState(3);

    function Card({Title, Description, Image, Link, Hidden, Video}) {
        return (
            <div className={`p-5 h-auto bg-gray-300 m-5 rounded-[5vh] shadow-gray-400 shadow-[10px_10px_4px_0px] ${Hidden ?  "hidden" : "flex flex-col"}`}>
                <div style={{backgroundImage: "url('" + Image + "')"}} className='h-[50vh]  w-full bg-cover rounded-[2vh]'></div>
                <div className='p-10 w-full mb-auto'>
                    <span className='font-semibold text-2xl underline underline-offset-2'>{Title}</span>
                    <p className='mt-5 text-lg font-medium'>{Description}</p>
                    
                </div>
                
                {
                    Video ? <div className="grid grid-cols-2 gap-5">
                                <a href={Link} className='bg-gray-900 mt-5 rounded-2xl text-center p-3 w-full hover:-rotate-2 duration-500'>
                                    <span className='text-white font-extrathin text-2xl'>Ver no Github</span>
                                </a>
                                <button onClick={ () => { SetCurrentVideo(Video); SetOpen(true); } } className='bg-gray-900 mt-5 rounded-2xl text-center p-3 w-full hover:-rotate-2 duration-500'>
                                    <span className='text-white font-extrathin text-2xl'>Assistir</span>
                                </button>
                            </div> : 
                            <a href={Link} className='bg-gray-900 mt-5 rounded-2xl text-center p-3 w-full hover:-rotate-2 duration-500'>
                                <span className='text-white font-extrathin text-2xl'>Ver no Github</span>
                            </a>
                    
                }
                
                
            </div>
        )
    }
    
    function ShowCards({ArrayOfProjects}) { 
        let ItemsToShow = ArrayOfProjects.map((item, index) => 
            <Card Title={item.Title} Description={item.Description} Image={item.Image} Link={item.Link} key={index} Hidden={((index + 1)  > CardLimit)} Video={item.Video}> </Card>
        )
    
        if(ArrayOfProjects.length > CardLimit) {
            return (
                <>
                <div className='lg:grid lg:grid-cols-3 bg-stone-100 mb-24'>
                    {ItemsToShow}
                </div>
                <div className="flex justify-center align-middle w-full mb-24">
                    <button onClick={()=>{
                        SetCardLimit(CardLimit+3);
                    }} 
                    className='bg-gray-900 rounded-2xl text-center p-3 w-1/2 h-1/2 hover:-rotate-2 duration-500'>
                        <span className='text-white font-extrathin text-2xl'>Mostrar mais</span>
                    </button>
                </div>
                </>
            )
        }
    
        return (
            <div className='lg:grid lg:grid-cols-3 bg-stone-100 mb-24'>
                { ItemsToShow }
            </div>
        )
    }

    return <ShowCards ArrayOfProjects={personalProjects} />
}

export default PersonalProjects;