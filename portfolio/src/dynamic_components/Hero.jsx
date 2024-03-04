import '../components/style/Hero.css'
import Curriculo from '../assets/home/documentos/Curriculo.pdf'
import { TypeAnimation } from 'react-type-animation';
import ProgrammingPhoto from '../assets/home/Programming.jpeg'

export default function HeroPT(){ 
    return (
        <>
            <div className='md:pl-24 md:col-span-2 order-last mb-12'>
                <h1 className="md:text-[5vw] text-[8vw] font-medium text-gray pt-12 md:pt-0"> Olá,</h1> 
                <h1 className="md:text-[2vw] text-[3vw] font-medium text-gray opacity-30 text-left"> meu nome é Kauan e sou um...</h1> 
                <div>
                    <h1 className="md:text-[2vw] font-medium text-gray text-left"> 
                    <TypeAnimation
                    sequence={[
                        'Desenvolvedor Frontend',
                        1000,
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
        </>
    )
}
