import './style/Hero.css'
import Resume from '../assets/home/documentos/Resume.pdf'
import { TypeAnimation } from 'react-type-animation';
import ProgrammingPhoto from '../assets/home/Programming.jpeg'


export default function Hero(){ 
    return (
        <>
        <div className="h-auto w-auto md:grid md:grid-flow-row md:grid-cols-5 bg-stone-200 items-center flex flex-col"> 
                <div className='md:pl-24 md:col-span-2 order-last mb-12'>
                    <h1 className="md:text-[5vw] text-[8vw] font-medium text-gray pt-12 md:pt-0"> Hi,</h1> 
                    <h1 className="md:text-[2vw] text-[3vw] font-medium text-gray opacity-30 text-left"> my name is Kauan and I am a...</h1> 
                    <div>
                        <h1 className="md:text-[2vw] font-medium text-gray text-left"> 
                        <TypeAnimation
                        sequence={[
                            'Frontend Developer',
                            1000,
                            'Backend Developer',
                            1000,
                            'Game Developer',
                            1000
                        ]}
                        wrapper="span"
                        speed={20}
                        repeat={Infinity}
                         />
                        </h1> 
                    </div>
                    <button className='pt-4 hover:translate-y-1 delay-75' onClick={
                        (e) => {
                            e.preventDefault();
                            const link = document.createElement('a');
                            link.download = "Resume.pdf";
                            link.href = Resume;
                            link.click();
                        }
                    }>
                        <span className='bg-black text-white rounded-md p-2'> Download my Resume</span>
                    </button>
                </div>
                <div id='heroImg2' className='md:col-span-3 md:pb-[5vh] align-top order-first md:order-last'>
                    <img src={ProgrammingPhoto} className='hidden md:block'></img>
                </div>
        </div>
        </>
    )
}
