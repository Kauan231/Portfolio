import HeroEN from "../dynamic_components/HeroEn";
import HeroPT from "../dynamic_components/Hero";
import { LanguageContext } from '../context/languageContext';
import { useContext } from 'react';
import ProgrammingPhoto from '../assets/home/Programming-optimized.jpeg'
import './style/Hero.css';

import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Hero(){ 
    const {Language} = useContext(LanguageContext);

    return (
        <section id="Hero" className="Hero"> 
            <div className="md:col-span-2 flex flex-wrap-reverse justify-center">
            {
                Language == "Portuguese" ? <HeroPT/> : <HeroEN/>
            }
            <div className="Align-Icons">
                <div className="SocialMedia-Container">
                    <address>
                    <a aria-label="E-mail" href="mailto:kauanramos03@outlook.com">
                        <MdOutlineEmail className="SocialMedia-Icon"/>
                        <div className='Align-Title'>
                            <span className='SocialMedia-Title'>E-mail</span>
                        </div>
                    </a>
                    </address>
                </div>

                <div className="SocialMedia-Container">
                    <address>
                    <a aria-label="Whatsapp" href="https://wa.me/5513991492006">
                        <FaWhatsapp className="SocialMedia-Icon"/>
                        <div className='Align-Title'>
                            <span className='SocialMedia-Title'>Whatsapp</span>
                        </div>
                    </a>
                    </address>
                </div>

                <div className="SocialMedia-Container">
                    <address>
                    <a aria-label="Linkedin" href="https://www.linkedin.com/in/kauan-ramos/">
                        <FaLinkedin className="SocialMedia-Icon"/>
                        <div className='Align-Title'>
                            <span className='SocialMedia-Title'>LinkedIn</span>
                        </div>
                    </a>
                    </address>
                </div>
                <div className="SocialMedia-Container">
                    <address>
                    <a aria-label="Github" href="https://github.com/Kauan231">
                        <FaGithub className="SocialMedia-Icon"/>
                        <div className='Align-Title'>
                            <span className='SocialMedia-Title'>Github</span>
                        </div>
                    </a>
                    </address>
                </div>

            </div>
            
            </div>
            <div id='heroImg' className='Image-Container'>
                <img src={ProgrammingPhoto} alt="Programming Background" className='hidden md:block'></img>
            </div>
        </section>
    )
}
