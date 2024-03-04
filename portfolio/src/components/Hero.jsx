import HeroEN from "../dynamic_components/HeroEn";
import HeroPT from "../dynamic_components/Hero";
import { LanguageContext } from '../context/languageContext';
import { useContext } from 'react';
import ProgrammingPhoto from '../assets/home/Programming.jpeg'

export default function Hero(){ 
    const {Language} = useContext(LanguageContext);

    return (
        <div className="h-auto w-auto md:grid md:grid-flow-row md:grid-cols-5 bg-stone-200 items-center flex flex-col"> 
            {
                Language == "Portuguese" ? <HeroPT/> : <HeroEN/>
            }
            <div id='heroImg2' className='md:col-span-3 md:pb-[5vh] align-top order-first md:order-last'>
                <img src={ProgrammingPhoto} className='hidden md:block'></img>
            </div>
        </div>
    )
}
