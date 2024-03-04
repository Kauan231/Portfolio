import { useContext } from 'react';
import { LanguageContext } from "../context/languageContext";

export default function Backend(){
    const { Language } = useContext(LanguageContext);
    return (
        <> 
            <div className="h-auto w-full justify-center items-center lg:grid lg:grid-cols-4 sm:mt-12 mt-5"> 
                <span className="lg:text-4xl text-xl col-span-1 p-10 underline underline-offset-4 lg:no-underline lg:text-right">Backend</span>
                <div className="col-span-3 lg:ml-5">
                    <aside className="lg:text-xl text-justify lg:pr-24 lg:border-black border-l-4 lg:pl-2 sm:p-4 p-2">
                    {
                        (Language == "Portuguese") ?

                        <>
                        Possuo uma sólida experiência na administração de diversos Bancos de Dados, tais como <b>MariaDB</b>, <b>MySQL</b> e  <b>MongoDB</b>, além do uso de Buckets na <b>AWS</b>.
                        <br/><br/>
                        Minha proficiência em <b>Node.js</b> abrange o domínio de bibliotecas e frameworks como  <b>Express</b>, <b>Sequelize</b> e <b>Mongoose</b> permitindo-me desenvolver
                        aplicativos robustos, além de desenvolver testes unitários e de integração utilizando <b>Jest</b> e <b>Supertest</b>. Comprometo-me sempre com a implementação de práticas de segurança,
                        incluindo criptografia, <b>JWT</b> e aderência às melhores práticas de desenvolvimento.
                        <br/><br/>
                        Na área <b>.Net</b>, destaco minha habilidade no <b>ASP.NET Core</b>, utilizando o <b>Entity Framework</b>, <b>Identity</b>, <b>Linq</b> e outras bibliotecas para usos especificos, como a manipulação de arquivos PDF. 
                        Além disso, possuo experiência com proxy, notadamente no uso do Nginx. 
                        </>
                        :
                        <>
                        I have solid experience in working with various databases, such as <b>MariaDB</b>, <b>MySQL</b> and  <b>MongoDB</b>, I have also worked with <b>AWS</b> buckets.
                        <br/><br/>
                        I am proficient in <b>Node.js</b> which encompasses utilizing many frameworks, such as <b>Express</b>, <b>Sequelize</b> and <b>Mongoose</b> allowing me to develop
                        robust applications, I also develop keeping in mind Unit and Integration tests, by utilizing <b>Jest</b> and <b>Supertest</b>. I am committed to always implement security best practices, including encryption, 
                        use of <b>JWT</b> and always sticking to the best development practices.
                        <br/><br/>
                        In the <b>.Net</b> field, I highlight my skills in <b>ASP.NET Core</b>, utilizing <b>Entity Framework</b>, <b>Identity</b>, <b>Linq</b> and other libraries for specific necessities, such as PDF manipulation. 
                        Furthermore, I have experience with proxies, notably in the use of Nginx.
                        </>
                    }
                    

                    </aside>
                    <br></br>
                    <div className="spacing gap-2 flex flex-wrap sm:justify-normal justify-center"> 
                        <span className="lg:text-xl text-justify font-semibold p-1 ">Stack:</span>
                        <span className="lg:text-xl text-justify font-semibold p-1 bg-slate-300 border rounded-lg hover:bg-opacity-50">NodeJS</span>
                        <span className="lg:text-xl text-justify font-semibold p-1 bg-slate-300 border rounded-lg hover:bg-opacity-50">ASP.NET</span>
                        <span className="lg:text-xl text-justify font-semibold p-1 bg-slate-300 border rounded-lg hover:bg-opacity-50">MySql</span>
                        <span className="lg:text-xl text-justify font-semibold p-1 bg-slate-300 border rounded-lg hover:bg-opacity-50">MongoDB</span>
                        <span className="lg:text-xl text-justify font-semibold p-1 bg-slate-300 border rounded-lg hover:bg-opacity-50">Nginx</span>
                    </div>
                </div>
                
                
            </div>
        </>
    )
}