import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useState } from "react";

import '../components/style/Eventos.css'
import Adidas from '../assets/home/eventos/Adidas.jpg'
import Ype from '../assets/home/eventos/Ypê.jpg'
import Ype2 from '../assets/home/eventos/Ype2.jpg'
import Heineken from '../assets/home/eventos/Heineken.jpg'
import Sebrae from '../assets/home/eventos/Sebrae.jpg'
import Sebrae2 from '../assets/home/eventos/Sebrae2.jpg'
import Sebrae3 from '../assets/home/eventos/Sebrae3.jpg'
import Sebrae4 from '../assets/home/eventos/Sebrae4.jpg'
import Medilar from '../assets/home/eventos/Medilar.jpg'
import Descartavel from '../assets/home/eventos/Descartavel.jpg'

let iterator = 0;
let ImageList = [Adidas, Ype, Ype2, Heineken, Sebrae, Sebrae2, Sebrae3, Sebrae4, Medilar, Descartavel];

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
        <div style={{backgroundImage: "url('" + Image + "')"}} className='h-[80vh] w-full bg-cover bg-center' id="gallery">
            <div className='grid grid-cols-2 h-full w-full'>
                    <div className="flex place-items-center justify-start">
                        <a onClick={ChangeImageLeft} >
                            <FaArrowAltCircleLeft className='lg:h-[20vh] h-[10vw] w-auto fill-white ml-5'></FaArrowAltCircleLeft>
                        </a>
                    </div>
                    
                    <div className="flex place-items-center justify-end">
                        <a onClick={ChangeImageRight}>
                            <FaArrowAltCircleRight className='lg:h-[20vh] h-[10vw] w-auto fill-white mr-5'/>
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
            
            <div className="bg-neutral-300  w-full h-full flex flex-1 flex-col justify-center items-center">
                <Gallery />
                
                <div className='flex justify-center align-middle'>
                    <span className='font-semibold lg:text-[3vw] text-[6vw] text-center underline underline-offset-4 pb-12 pt-5'>Events</span>
                </div>

                <p className='font-thin lg:text-2xl pl-10 pr-10 pb-24'> 
                For over two years, I have been working in the corporate events sector, participating in important initiatives such as Apas, Febraban, ExpoEpi, ExpoMeat,
                among others. During this period, I have had the opportunity to collaborate with renowned brands, including Caterpillar, Adidas, Ypê, Tecban, and many others.
                My specialty lies in the realm of brand experience and Live marketing, where I conduct phygital interactions, an innovative approach that blends physical and digital 
                experiences, fostering a deeper connection between the audience and the brand. <br/> <br/>

                In this role, it is common to integrate various fields such as electronics, computing, design, and other disciplines to create unique and memorable experiences. 
                The goal is not only to promote corporate events but also to foster significant engagement with the audience, generating a strong attachment to the brand. 
                This journey has allowed me to develop multifaceted skills and a comprehensive understanding of the dynamics involved in the field of corporate event marketing.
                </p>

                
            </div>
        </div>
        </>
    )
}

