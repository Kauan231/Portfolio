import './style/Hero.css'
import Curriculo from '../assets/home/documentos/Curriculo_KauanRamos.pdf'
import GithubLogo from '../assets/home/github-mark.svg'

export default function Hero(){ 
    return (
        <>
        <div className="h-auto w-full grid grid-flow-row grid-cols-5 bg-stone-200 items-center"> 
                <div className='pl-24 col-span-2'>
                    <h1 className="text-[5vw] font-medium text-gray"> Olá,</h1> 
                    <span className="text-[2vw] font-medium  text-gray pt-5"> Um Desenvolvedor experiente em ...</span> 
                    
                    <button className='pt-12' onClick={
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
                <div id='heroImg' className='col-span-3 pb-[5vh]'>
                    <img src='http://localhost:5173/src/assets/home/eventos/Yp%C3%AA.jpg'></img>
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
