import ProfessionalProjects from './ProjetosProfissionais';
import PersonalProjects from './ProjetosPessoais';
import OpenVideo from './OpenVideo';
import '../components/style/Areas.css'

export default function Projetos() {
    return (
        <>
        <div className='flex justify-center align-middle bg-stone-100  pb-12'>
                <span className='font-semibold lg:text-[3vw] text-[8vw] text-center lg:underline underline-offset-1 pb-12'>Projetos Pessoais</span>
        </div>
        
        <div className='pb-12 bg-stone-100'>
            <PersonalProjects/>

            <div className="w-full h-full bg-gradient-to-b from-slate-200 to-sky-200 pb-12 pt-20">
                <div className='flex justify-center align-middle '>
                        <span className='font-semibold lg:text-[3vw] text-[8vw] text-center lg:underline underline-offset-1 pb-12'>Projetos Profissionais</span>
                </div>
                <ProfessionalProjects/>
            </div>
            <div className="bg-sky-200 h-[20vh] w-auto mb-24" id="background"></div>
            <OpenVideo/>
        </div>
        </>
    )
}
