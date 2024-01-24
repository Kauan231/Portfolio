import thumbCurriculum from '../assets/home/projetos/Curriculo.png'

function Card({Title, Description, Image, Link}) {
    return (
        <div className='border bg-blue-300 rounded p-10 m-5 rounded-[5vh]'>
            <div style={{backgroundImage: "url('" + thumbCurriculum + "')"}} className='h-[50vh] w-auto bg-cover mb-5'></div>
            <div className='grid justify-items-center'>
                <span className='font-semibold text-2xl underline underline-offset-2'>{Title}</span>
                <p className='mt-5 text-lg'>{Description}</p>
                <a href={Link} className='bg-gray-900 w-1/2 p-2 mt-5 rounded-2xl text-center'>
                    <span className='text-white font-extrathin text-2xl'>Ver no Github</span>
                </a>
            </div>
            
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
            Description={"Simple-Curriculum é um projeto pessoal para aprimorar minhas habilidades em ASP.NET com o uso da Biblioteca QuestPDF, além de explorar ferramentas do frontend como ReactJS, Typescript e Tailwind. O objetivo do projeto é disponibilizar uma API para a criação de curriculos formatados automaticamente, assim podendo ser utilizado como ferramenta individual ou utilizado como exemplo em uma ferramenta de um site de vagas de trabalho."} 
            Image={thumbCurriculum}
            Link={"https://github.com/Kauan231/Simple-Curriculum"}>
            </Card>
            <Card 
            Title={"Simple-Curriculum"} 
            Description={"Simple-Curriculum é um projeto pessoal para aprimorar minhas habilidades em ASP.NET com o uso da Biblioteca QuestPDF, além de explorar ferramentas do frontend como ReactJS, Typescript e Tailwind. O objetivo do projeto é disponibilizar uma API para a criação de curriculos formatados automaticamente, assim podendo ser utilizado como ferramenta individual ou utilizado como exemplo em uma ferramenta de um site de vagas de trabalho."} 
            Image={thumbCurriculum}
            Link={"https://github.com/Kauan231/Simple-Curriculum"}>
            </Card>
            <Card 
            Title={"Simple-Curriculum"} 
            Description={"Simple-Curriculum é um projeto pessoal para aprimorar minhas habilidades em ASP.NET com o uso da Biblioteca QuestPDF, além de explorar ferramentas do frontend como ReactJS, Typescript e Tailwind. O objetivo do projeto é disponibilizar uma API para a criação de curriculos formatados automaticamente, assim podendo ser utilizado como ferramenta individual ou utilizado como exemplo em uma ferramenta de um site de vagas de trabalho."} 
            Image={thumbCurriculum}
            Link={"https://github.com/Kauan231/Simple-Curriculum"}>
            </Card>
            
        </div>
        </>
    )
}