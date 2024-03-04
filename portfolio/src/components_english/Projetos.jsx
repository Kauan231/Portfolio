/*
import thumbCurriculum from '../assets/home/projetos/Curriculo.png'
import thumbStore from '../assets/home/projetos/Store.jpg'
import thumbBurguer from '../assets/home/projetos/BurgerIcon.png'
import thumbSnake from '../assets/home/projetos/Snake.png'
*/

import PersonalProjects from "../assets/home/projetos/projects";
import { useState } from "react";

function Card({Title, Description, Image, Link, Hidden}) {
    return (
        <div className={`p-5 h-auto bg-gray-300 m-5 rounded-[5vh] shadow-gray-400 shadow-[10px_10px_4px_0px] ${Hidden ?  "hidden" : "flex flex-col"}`}>
            <div style={{backgroundImage: "url('" + Image + "')"}} className='h-[50vh]  w-full bg-cover rounded-[2vh]'></div>
            <div className='p-10 w-full mb-auto'>
                <span className='font-semibold text-2xl underline underline-offset-2'>{Title}</span>
                <p className='mt-5 text-lg font-medium'>{Description}</p>
                
            </div>
            <a href={Link} className='bg-gray-900 mt-5 rounded-2xl text-center p-3 w-full hover:-rotate-2 duration-500'>
                <span className='text-white font-extrathin text-2xl'>Access on Github</span>
            </a>
        </div>
    )
}

function ShowCards({ArrayOfProjects}) { 
    const [CardLimit, SetCardLimit] = useState(3);

    let ItemsToShow = ArrayOfProjects.map((item, index) => 
        <Card Title={item.Title} Description={item.Description} Image={item.Image} Link={item.Link} key={index} Hidden={((index + 1)  > CardLimit)}> </Card>
    )

    if(ArrayOfProjects.length > CardLimit) {
        return (
            <>
            <div className='lg:grid lg:grid-cols-3 bg-stone-100 mb-24'>
                {ItemsToShow}
            </div>
            <div className="flex justify-center align-middle w-full">
                <button onClick={()=>{
                    SetCardLimit(CardLimit+3);
                }} 
                className='bg-gray-900 rounded-2xl text-center p-3 w-1/2 h-1/2 hover:-rotate-2 duration-500'>
                    <span className='text-white font-extrathin text-2xl'>Show More</span>
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

export default function Projetos() {
    return (
        <>
        
        <div className='flex justify-center align-middle bg-stone-100'>
                <span className='font-semibold lg:text-[3vw] text-[8vw] text-center lg:underline underline-offset-1'>Personal Projects</span>
        </div>
        
        <div className='pb-12 bg-stone-100'>
        <ShowCards ArrayOfProjects={PersonalProjects}/>
        </div>
        </>
    )
}
