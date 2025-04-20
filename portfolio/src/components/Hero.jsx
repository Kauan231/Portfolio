import HeroEN from "../dynamic_components/HeroEn";
import HeroPT from "../dynamic_components/Hero";
import { LanguageContext } from '../context/languageContext';
import { useContext, useEffect, useRef } from 'react';
import video from '../assets/background.mp4'
import './style/Hero.css';
import useIsVisible from "../utils/Observer";

import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Hero(){
    const {Language} = useContext(LanguageContext);

    useEffect(() => {
        var video = document.getElementById("myVideo");
        if (video.paused) {
            video.play();
        }
    }, [])

    const ref1 = useRef();
    const isVisible1 = useIsVisible(ref1);

    return (
        <div ref={ref1} className={`transition-opacity ease-in duration-500 ${isVisible1 ? "opacity-100" : "opacity-80"} `}>
            <section id="Hero" className="Hero">
                <div className="md:col-span-3 ">
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
                <div id='heroImg' className='Image-Container col-span-5 pointer-events-none'>
                    <video muted autoPlay loop id="myVideo" className="hidden md:block">
                        <source src={video} type="video/mp4"></source>
                    </video>
                </div>
            </section>
        </div>
    )
}
