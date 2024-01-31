import './style/Hero.css'
import Curriculo from '../assets/home/documentos/Curriculo.pdf'
import { TypeAnimation } from 'react-type-animation';
import ProgrammingPhoto from '../assets/home/Programming.jpeg'


export default function Hero(){ 
    return (
        <>
        <div className="h-auto w-auto md:grid md:grid-flow-row md:grid-cols-5 bg-stone-200 items-center flex flex-col"> 
                <div className='md:pl-24 md:col-span-2 order-last mb-12'>
                    <h1 className="md:text-[5vw] text-[8vw] font-medium text-gray pt-12 md:pt-0"> Olá,</h1> 
                    <h1 className="md:text-[2vw] text-[3vw] font-medium text-gray opacity-30 text-left"> meu nome é Kauan e sou um...</h1> 
                    <div>
                        <h1 className="md:text-[2vw] font-medium text-gray text-left"> 
                        <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Desenvolvedor Frontend',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Desenvolvedor Backend',
                            1000,
                            'Desenvolvedor De Jogos',
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
                            link.download = "Curriculo.pdf";
                            link.href = Curriculo;
                            link.click();
                        }
                    }>
                        <span className='bg-black text-white rounded-md p-2'> Baixe meu curriculo</span>
                    </button>
                </div>
                <div id='heroImg2' className='md:col-span-3 md:pb-[5vh] align-top order-first md:order-last'>
                    <img src={ProgrammingPhoto} className='hidden md:block'></img>
                </div>
        </div>
        </>
    )
}

/*
BACKUP
<div className="h-auto w-full bg-neutral-200 grid grid-flow-row grid-cols-5" > 
                <div className='pt-24 pl-24 col-span-1'>
                    <h1 className="items-center text-[5vw] font-medium text-gray"> Olá,</h1> 
                    <span className="items-center text-2xl font-medium  text-gray pt-5"> Um Desenvolvedor focado em ...</span> 
                    <span className="flex items-center text-2xl font-medium  text-gray pt-5"> Confira meus projetos em</span>
                    <button onClick={
                        (e) => {
                            e.preventDefault();
                            window.location.href='https://github.com/Kauan231';
                        }
                    }>
                        <img src={GithubLogo} className='scale-50'/>
                    </button>
                    
                </div>
                <div className='col-span-3'>
                    <img src={Ype} className=' justify-center items-center'></img>
                </div>
            </div>
*/
