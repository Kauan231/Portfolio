import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Contato() {
    return (
        <>
        <div className="bg-stone-200" id="contato">
            <div className='flex justify-center align-middle pt-12'>
                <span className='font-semibold lg:text-[3vw] text-[6vw] text-center underline underline-offset-8'>Contato</span>
            </div>
            <div className="grid grid-cols-3 pb-12">
                <div className="justify-center align-middle pt-12">
                    <a href="mailto:kauanramos03@outlook.com">
                        <MdOutlineEmail className="w-full h-[12vh]"/>
                        <div className='flex justify-center align-middle pt-2'>
                            <span className='font-semibold lg:text-[1.5vw] text-2xl text-center'>E-mail</span>
                        </div>
                    </a>
                </div>

                <div className="justify-center align-middle pt-12">
                    <a href="https://wa.me/5513991492006">
                        <FaWhatsapp className="w-full h-[12vh]"/>
                        <div className='flex justify-center align-middle pt-2'>
                            <span className='font-semibold lg:text-[1.5vw] text-2xl text-center'>Whatsapp</span>
                        </div>
                    </a>
                </div>

                <div className="justify-center align-middle pt-12">
                    <a href="https://www.linkedin.com/in/kauan-ramos/">
                        <FaLinkedin className="w-full h-[12vh]"/>
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

