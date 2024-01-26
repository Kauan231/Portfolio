import '../components/style/Header.css'

export default function Header(){
    return (
    <header className="h-12 bg-gray-700 ">
        <div className="lg:flex items-center h-full ">
            <div className='lg:flex items-center justify-start hidden'>
                <a href="/" className=' flex h-full items-center justify-start text-2lg font-medium p-12 text-white lg:visible visible'>Kauan Ramos</a>
            </div>
            <div className='flex w-full h-full items-center justify-center'>
                <ul className="flex h-full lg:w-auto  lg:space-x-36 lg:visible visible">
                    <li>
                        <a href="#sobre" className="flex h-full items-center lg:text-lg font-medium p-2 text-white">Sobre</a>
                    </li>
                    <li>
                        <a href="#projetos" className="flex h-full items-center lg:text-lg font-medium p-2 text-white">Projetos</a>
                    </li>
                    <li>
                        <a href="#eventos" className="flex h-full items-center lg:text-lg font-medium p-2 text-white">Eventos</a>
                    </li>
                    <li>
                        <a href="#contato" className="flex h-full items-center lg:text-lg font-medium p-2 text-white">Contato</a>
                    </li>
                </ul>
            </div>

        </div>
    </header>
    )
}
