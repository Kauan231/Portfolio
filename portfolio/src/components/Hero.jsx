import HeroEN from "../dynamic_components/HeroEn";
import HeroPT from "../dynamic_components/Hero";
import { LanguageContext } from '../context/languageContext';
import { useContext } from 'react';
import ProgrammingPhoto from '../assets/home/Programming.jpeg'
import './style/Hero.css';

export default function Hero(){ 
    const {Language} = useContext(LanguageContext);

    return (
        <section id="Hero" className="Hero"> 
            {
                Language == "Portuguese" ? <HeroPT/> : <HeroEN/>
            }
            <div id='heroImg' className='Image-Container'>
                <img src={ProgrammingPhoto} alt="Programming Background" className='hidden md:block'></img>
            </div>
        </section>
    )
}
