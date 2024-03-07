import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { useContext } from 'react';
import { LanguageContext } from "../context/languageContext";
import './style/Contact.css';

export default function Contato() {
    const { Language } = useContext(LanguageContext);
    
    return (
        <>
        <div className="bg-stone-200 pb-6">
            <div className="bg-black Arrow"></div>
        </div>
        <div className="bg-stone-200 pb-auto" id="Contacts">
            <div className='Contacts-Title'>
                <h1 className='Title-Center no-underline m-0 p-0 pb-5'>{(Language == "Portuguese") ? "Contatos" : "Contacts"}</h1>
            </div>
            <div className="Align-Icons">
                <div className="SocialMedia-Container">
                    <address>
                    <a href="mailto:kauanramos03@outlook.com">
                        <MdOutlineEmail className="SocialMedia-Icon"/>
                        <div className='Align-Title'>
                            <span className='SocialMedia-Title'>E-mail</span>
                        </div>
                    </a>
                    </address>
                </div>

                <div className="SocialMedia-Container">
                    <address>
                    <a href="https://wa.me/5513991492006">
                        <FaWhatsapp className="SocialMedia-Icon"/>
                        <div className='Align-Title'>
                            <span className='SocialMedia-Title'>Whatsapp</span>
                        </div>
                    </a>
                    </address>
                </div>

                <div className="SocialMedia-Container">
                    <address>
                    <a href="https://www.linkedin.com/in/kauan-ramos/">
                        <FaLinkedin className="SocialMedia-Icon"/>
                        <div className='Align-Title'>
                            <span className='SocialMedia-Title'>LinkedIn</span>
                        </div>
                    </a>
                    </address>
                </div>

            </div>
            
        </div>
        </>
    )
}

