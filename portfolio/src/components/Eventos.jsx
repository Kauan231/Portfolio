import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useState, useContext } from "react";
import { LanguageContext } from "../context/languageContext";

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
        <div style={{backgroundImage: "url('" + Image + "')"}} className='Gallery-Container' id="gallery">
            <div className='Gallery-Grid'>
                    <div className="LeftArrow">
                        <button onClick={ChangeImageLeft} >
                            <FaArrowAltCircleLeft className='Gallery-Arrow'></FaArrowAltCircleLeft>
                        </button>
                    </div>
                    
                    <div className="RightArrow">
                        <button onClick={ChangeImageRight}>
                            <FaArrowAltCircleRight className='Gallery-Arrow'/>
                        </button>
                    </div>
                </div>
        </div>
        </>
    )
}


 
export default function Eventos() {
    const { Language } = useContext(LanguageContext);
    return (
        <>
        <div className="bg-neutral-300 pb-24" id='Events'>
            <article>
                <div className='Div-Center'>
                    <h1 className='Title-Center'>{(Language == "Portuguese") ? "Eventos" : "Events"}</h1>
                </div>
                <Gallery />

                <p className='Event-Paragraph'> 
                {
                    (Language == "Portuguese") ?
                    <>
                    Há mais de dois anos, venho atuando no segmento de eventos corporativos, participando de importantes iniciativas como Apas, Febraban, ExpoEpi, 
                    ExpoMeat, entre outros. Durante esse período, tive a oportunidade de colaborar com marcas renomadas, incluindo Caterpillar, Adidas, Ypê, Tecban, e 
                    diversas outras. Minha especialidade reside no universo do brand experience e Live marketing, onde realizo interações phygital, uma abordagem inovadora 
                    que mescla experiências físicas e digitais, proporcionando uma conexão mais profunda entre o público e a marca. <br/> <br/>

                    Nessa função, é comum integrar diversos campos, como eletrônica, computação, design, e outras disciplinas, 
                    para criar experiências únicas e memoráveis. O objetivo é não apenas promover eventos corporativos, mas também cultivar um envolvimento
                    significativo com a audiência, gerando um forte apego à marca. Este percurso tem me permitido desenvolver habilidades multifacetadas e uma 
                    compreensão abrangente das dinâmicas envolvidas no campo do marketing de eventos corporativos.
                    </>
                    :
                    <>
                    For over two years, I have been working in the corporate events sector, participating in important initiatives such as Apas, Febraban, ExpoEpi, ExpoMeat,
                    among others. During this period, I have had the opportunity to collaborate with renowned brands, including Caterpillar, Adidas, Ypê, Tecban, and many others.
                    My specialty lies in the realm of brand experience and Live marketing, where I conduct phygital interactions, an innovative approach that blends physical and digital 
                    experiences, fostering a deeper connection between the audience and the brand. <br/> <br/>

                    In this role, it is common to integrate various fields such as electronics, computing, design, and other disciplines to create unique and memorable experiences. 
                    The goal is not only to promote corporate events but also to foster significant engagement with the audience, generating a strong attachment to the brand. 
                    This journey has allowed me to develop multifaceted skills and a comprehensive understanding of the dynamics involved in the field of corporate event marketing.
                    </>
                }
                
                </p>

                
            </article>
        </div>
        </>
    )
}

