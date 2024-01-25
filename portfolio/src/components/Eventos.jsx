import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useState } from "react";

import '../components/style/Eventos.css'
import Ype from '../assets/home/eventos/Ypê.jpg'
import Adidas from '../assets/home/eventos/Adidas.jpg'

let iterator = 0;
let ImageList = [Ype, Adidas];

function Gallery() {
    const [Image, setImage] = useState(ImageList[0])

    function ChangeImageLeft() {
        iterator--;
        if(iterator < 0) {
            iterator = ImageList.length - 1;
        }
        setImage(ImageList[iterator]);
    }
    
    function ChangeImageRight() {
        iterator++;
        if(iterator > (ImageList.length - 1) ) {
            iterator = 0;
        }
        setImage(ImageList[iterator]);
    }

    return (
        <>
        <div style={{backgroundImage: "url('" + Image + "')"}} className='h-[80vh]  w-full bg-cover' id="gallery">
            <div className='grid grid-cols-2 h-full w-full'>
                    <div className="flex place-items-center justify-start">
                        <a onClick={ChangeImageLeft} >
                            <FaArrowAltCircleLeft className='h-[20vh] w-auto fill-white ml-5'></FaArrowAltCircleLeft>
                        </a>
                    </div>
                    
                    <div className="flex place-items-center justify-end">
                        <a onClick={ChangeImageRight}>
                            <FaArrowAltCircleRight className='h-[20vh] w-auto fill-white mr-5'/>
                        </a>
                    </div>
                </div>
        </div>
        </>
    )
}


 
export default function Eventos() {
    return (
        <>
        <div className='bg-stone-100' id='eventos'>
            <div className='w-full pb-24'></div>
            <div className="bg-neutral-300  h-[5vh] w-full"></div>
            <div className="bg-neutral-300  w-full h-full flex flex-1 flex-col justify-center items-center">
                <Gallery />
                
                <div className='flex justify-center align-middle'>
                    <span className='font-semibold text-[3vw] text-center underline underline-offset-4 pb-12 pt-5'>Eventos</span>
                </div>

                <p className='font-semibold text-2xl pl-5 pr-5'> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quo id eius magnam odit, accusamus aut eaque delectus voluptatibus repudiandae commodi ea temporibus, nemo exercitationem officiis dignissimos quam nostrum perferendis.
                </p>

                <a className='bg-gray-900 mt-5 rounded-2xl text-center p-3 mb-12'>
                    <span className='text-white font-extrathin text-2xl'>Ver mais sobre...</span>
                </a>
            </div>
        </div>
        </>
    )
}

//<img className='h-[50vh] mt-12 mb-12' src={Ype}></img>

/*
<div style={{backgroundImage: "url('" + Image + "')"}} className='h-[80vh]  w-full bg-cover' id="gallery">
                    <div className='grid grid-cols-2 h-full w-full'>
                        <button className='flex place-items-center' onClick={ChangeImageLeft}>
                        <FaArrowAltCircleLeft className='h-[20vh] w-auto fill-white ml-5'/>
                        </button>

                        <button className='flex place-items-center place-content-end' onClick={ChangeImageRight}>
                        <FaArrowAltCircleRight className='h-[20vh] w-auto fill-white mr-5'/>
                        </button>
                    </div>
                    
                </div>
*/