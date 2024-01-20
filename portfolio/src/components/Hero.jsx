import GithubLogo from '../../src/assets/home/github-mark.svg'
export default function Hero(){ 
    return (
        <>
            <div className="h-[50vh] w-full bg-neutral-200 px-24" > 
                <h1 className="items-center text-[3.052rem] font-medium text-gray pt-24"> Meu nome é Kauan,</h1> 
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
        </>
    )
}