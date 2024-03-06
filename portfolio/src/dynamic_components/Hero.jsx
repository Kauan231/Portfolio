import '../components/style/Hero.css'
import Curriculo from '../assets/home/documentos/Curriculo.pdf'
import { TypeAnimation } from 'react-type-animation';

export default function HeroPT(){ 
    return (
        <div className='Animation-Container'>
            <h1 className="Hero-H1"> Olá,</h1> 
            <h2 className="Hero-H2"> meu nome é Kauan e sou um...</h2> 
            <div>
                <h1 className="Animation-Text"> 
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
            <button className='Download-Button' onClick={
                (e) => {
                    e.preventDefault();
                    const link = document.createElement('a');
                    link.download = "Curriculo.pdf";
                    link.href = Curriculo;
                    link.click();
                }
            }>
                <span className='Download-Button-Text'> Baixe meu curriculo</span>
            </button>
        </div>
    )
}
