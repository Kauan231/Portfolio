import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useState } from "react";

import '../components/style/Eventos.css'

let iterator = 0;
let ImageList = [
    'http://localhost:5173/src/assets/home/eventos/Adidas.jpg',
    'http://localhost:5173/src/assets/home/eventos/Yp%C3%AA.jpg',
    'http://localhost:5173/src/assets/home/eventos/Ype2.jpg',
    'http://localhost:5173/src/assets/home/eventos/Heineken.jpg',
    'http://localhost:5173/src/assets/home/eventos/Sebrae.jpg',
    'http://localhost:5173/src/assets/home/eventos/Sebrae2.jpg',
    'http://localhost:5173/src/assets/home/eventos/Sebrae3.jpg',
    'http://localhost:5173/src/assets/home/eventos/Sebrae4.jpg',
    'http://localhost:5173/src/assets/home/eventos/Medilar.jpg',
    'http://localhost:5173/src/assets/home/eventos/Descartavel.jpg'
];

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
        <div style={{backgroundImage: "url(" + Image + ")"}} className='h-[80vh] w-full bg-cover bg-center' id="gallery">
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
                    <span className='font-semibold lg:text-[3vw] text-[6vw] text-center underline underline-offset-4 pb-12 pt-5'>Eventos</span>
                </div>

                <p className='font-thin lg:text-2xl pl-10 pr-10 pb-24'> 
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
