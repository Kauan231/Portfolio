import thumbCurriculum from '../assets/home/projetos/Curriculo.png'
import thumbStore from '../assets/home/projetos/Store.png'
import thumbBurguer from '../assets/home/projetos/BurgerIcon.png'
import thumbSnake from '../assets/home/projetos/Snake.png'
import thumbEventos from '../assets/home/eventos/Ypê.jpg'

function Card({Title, Description, Image, Link}) {
    return (
        <div className='flex flex-col p-5 h-auto bg-blue-300 m-5 rounded-[5vh]'>
            <div style={{backgroundImage: "url('" + Image + "')"}} className='h-[50vh]  w-full bg-cover rounded-[2vh]'></div>
            <div className='p-10 w-full mb-auto'>
                <span className='font-semibold text-2xl underline underline-offset-2'>{Title}</span>
                <p className='mt-5 text-lg'>{Description}</p>
                
            </div>
            <a href={Link} className='bg-gray-900 mt-5 rounded-2xl text-center p-3 w-full'>
                <span className='text-white font-extrathin text-2xl'>Ver no Github</span>
            </a>
        </div>
    )
}

export default function Projetos() {
    return (
        <>
        <div className='pb-24 bg-stone-100'/>
        <div className='flex justify-center align-middle bg-stone-100'>
                <span className='font-semibold text-[3vw] text-center underline underline-offset-1'>Projetos</span>
        </div>
        
        <div className='pb-24 bg-stone-100'></div>
        <div className='grid grid-cols-3 bg-stone-100'>
            <Card 
            Title={"Simple-Curriculum"} 
            Description={ 
            <>
            Simple-Curriculum é um projeto pessoal para aprimorar minhas habilidades em ASP.NET com o uso da Biblioteca QuestPDF, além de explorar 
            ferramentas do frontend como ReactJS, Typescript e Tailwind. O objetivo do projeto é disponibilizar uma API para a criação de curriculos
            formatados automaticamente, assim podendo ser utilizado como ferramenta individual ou utilizado como exemplo em uma ferramenta de um site de 
            vagas de trabalho. 
            </>
            } 
            Image={thumbCurriculum}
            Link={"https://github.com/Kauan231/Simple-Curriculum"}>
            </Card>
            <Card 
            Title={"Store-Management"} 
            Description={ 
            <>
            Este projeto foi desenvolvido usando C++, Mysql connector e Boost Libraries. O sistema de Gerenciamento de Loja opera 
            com uma divisão estruturada de responsabilidades entre o Gerente e o Vendedor, cada um equipado com opções específicas 
            adaptadas aos seus papéis. 
            </>
            } 
            Image={thumbStore}
            Link={"https://github.com/Kauan231/Store-Management"}>
            </Card>
            <Card 
            Title={"Burguer-Game"} 
            Description={ 
            <>
            Burguer Rush é um jogo teste com a proposta de montar a maior quantia de hamburgueres em 2 minutos.<br/>
            - Mecânicas: <br/>
            - Arraste e solte os ingredientes na bandeja para adiciona-los ao hamburguer. <br/>
            - Arraste para fora do hamburguer os ingredientes que deseja remover. <br/>
            - O jogo terminará quando todos os pedidos forem atendido ou caso o tempo acabe.  <br/>
            - Cada pedido é um ScriptableObject com uma lista de três ingredientes necessários para montar o hamburguer. caso o hamburguer montado esteja de acordo com o pedido ganhará 10 pontos, porém caso o pedido não estiver de acordo com o pedido perderá 20 pontos."} 
            </>
            }
            Image={thumbBurguer}
            Link={"https://github.com/Kauan231/Burguer-Game"}>
            </Card>

            <Card 
            Title={"Snake game - Win32 API - C++"} 
            Description={
            <>
            Snake game developed with Windows native API ( Win32 - Windows.h ).
            </>
            } 
            Image={thumbSnake}
            Link={"https://github.com/Kauan231/Snake-game"}>
            </Card>            
        </div>
        </>
    )
}

/*
<div className='border bg-blue-300 rounded p-10 m-5 rounded-[5vh]'>
            <div style={{backgroundImage: "url('" + Image + "')"}} className='h-[50vh] w-auto bg-cover mb-5'></div>
            <div className='grid justify-items-center'>
                <span className='font-semibold text-2xl underline underline-offset-2'>{Title}</span>
                <p className='mt-5 text-lg'>{Description}</p>
                <a href={Link} className='bg-gray-900 w-1/2 p-2 mt-5 rounded-2xl text-center self-baseline'>
                    <span className='text-white font-extrathin text-2xl'>Ver no Github</span>
                </a>
            </div>
            
        </div>
*/