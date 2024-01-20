export default function Header(){
    return (
    <header className="h-24 bg-gray-700">
        <div className="flex items-center h-full">
            <div className='flex items-center justify-start'>
                <a href="/" className=' flex h-full items-center justify-start text-2xl font-medium p-12 text-white'>Kauan Ramos</a>
            </div>
            <div className='flex w-full h-full items-center justify-center'>
                <ul className="flex h-full space-x-36">
                    <li>
                        <a href="/sobre" className="flex h-full items-center text-2xl font-medium p-2 text-white">Sobre</a>
                    </li>
                    <li>
                        <a href="/projetos" className="flex h-full items-center text-2xl font-medium p-2 text-white">Projetos</a>
                    </li>
                    <li>
                        <a href="/eventos" className="flex h-full items-center text-2xl font-medium p-2 text-white">Eventos</a>
                    </li>
                    <li>
                        <a href="/contato" className="flex h-full items-center text-2xl font-medium p-2 text-white">Contato</a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
    )
}
