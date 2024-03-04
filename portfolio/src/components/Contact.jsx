import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { useContext } from 'react';
import { LanguageContext } from "../context/languageContext";

export default function Contato() {
    const { Language } = useContext(LanguageContext);
    
    return (
        <>
        <div className="bg-stone-200 pb-auto" id="contato">
            <div className='flex justify-center align-middle sm:pt-12 pt-5'>
                <span className='font-semibold lg:text-[3vw] text-[6vw] text-center underline underline-offset-8'>{(Language == "Portuguese") ? "Contatos" : "Contacts"}</span>
            </div>
            <div className="grid grid-cols-3 pb-12">
                <div className="justify-center align-middle pt-12">
                    <a href="mailto:kauanramos03@outlook.com">
                        <MdOutlineEmail className="w-full h-[12vh] hover:scale-150 transform transition duration-y"/>
                        <div className='flex justify-center align-middle pt-2'>
                            <span className='font-semibold lg:text-[1.5vw] text-2xl text-center'>E-mail</span>
                        </div>
                    </a>
                </div>

                <div className="justify-center align-middle pt-12">
                    <a href="https://wa.me/5513991492006">
                        <FaWhatsapp className="w-full h-[12vh] hover:scale-150 transform transition duration-y"/>
                        <div className='flex justify-center align-middle pt-2'>
                            <span className='font-semibold lg:text-[1.5vw] text-2xl text-center'>Whatsapp</span>
                        </div>
                    </a>
                </div>

                <div className="justify-center align-middle pt-12">
                    <a href="https://www.linkedin.com/in/kauan-ramos/">
                        <FaLinkedin className="w-full h-[12vh] hover:scale-150 transform transition duration-y"/>
                        <div className='flex justify-center align-middle pt-2'>
                            <span className='font-semibold lg:text-[1.5vw] text-2xl text-center'>LinkedIn</span>
                        </div>
                    </a>
                </div>

            </div>
            
        </div>
        </>
    )
}

