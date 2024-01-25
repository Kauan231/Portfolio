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
            <div className="bg-neutral-300  w-full h-full flex flex-1 flex-col justify-center items-center">
                <Gallery />
                
                <div className='flex justify-center align-middle'>
                    <span className='font-semibold text-[3vw] text-center underline underline-offset-4 pb-12 pt-5'>Eventos</span>
                </div>

                <p className='font-thin text-2xl pl-10 pr-10 pb-24'> 
                Há mais de dois anos, venho atuando no segmento de eventos corporativos, participando de importantes iniciativas como Apas, Febraban, ExpoEpi, 
                ExpoMeat, entre outros. Durante esse período, tive a oportunidade de colaborar com marcas renomadas, incluindo Caterpillar, Adidas, Ypê, Tecban, e 
                diversas outras. Minha especialidade reside no universo do brand experience e Live marketing, onde realizo interações phygital, uma abordagem inovadora 
                que mescla experiências físicas e digitais, proporcionando uma conexão mais profunda entre o público e a marca. <br/> <br/>

                Nessa função, é comum integrar diversos campos, como eletrônica, computação, design, e outras disciplinas, 
                para criar experiências únicas e memoráveis. O objetivo é não apenas promover eventos corporativos, mas também cultivar um envolvimento
                 significativo com a audiência, gerando um forte apego à marca. Este percurso tem me permitido desenvolver habilidades multifacetadas e uma 
                 compreensão abrangente das dinâmicas envolvidas no campo do marketing de eventos corporativos.
                </p>

                
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

                <a className='bg-gray-900 mt-5 rounded-2xl text-center p-3 mb-12'>
                    <span className='text-white font-extrathin text-2xl'>Ver mais sobre...</span>
                </a>
*/