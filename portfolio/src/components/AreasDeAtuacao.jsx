import Backend  from "./Backend"
import Gamedev from "./Gamedev"
import Frontend from "./Frontend"
import '../components/style/Areas.css'

export default function AreasDeAtuacao(){
    return (
        <>
        <div className="bg-stone-100">
            <div className="bg-neutral-300 h-[20vh] w-auto mb-24" id="background"></div>
            <div className='flex justify-center align-middle'>
                <span className='font-semibold text-[3vw] text-center underline underline-offset-1'>Áreas de Atuação</span>
            </div>
            <Frontend/>
            <Backend></Backend>
            <Gamedev></Gamedev>
        </div>
        </>
    )
}