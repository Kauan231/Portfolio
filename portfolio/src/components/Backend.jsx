import { useContext } from 'react';
import { LanguageContext } from "../context/languageContext";
import '../components/style/Skills.css'

export default function Backend(){
    const { Language } = useContext(LanguageContext);
    return (
            <article className="Skills-Article"> 
                <h1 className="Skill-Title">Backend</h1>

                <aside className="Skills-Aside">
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
                    <ul className="Stack-Items"> 
                        <span className="Stack-Title">Stack:</span>
                        <span className="Stack-Item">NodeJS</span>
                        <span className="Stack-Item">ASP.NET</span>
                        <span className="Stack-Item">MySql</span>
                        <span className="Stack-Item">MongoDB</span>
                        <span className="Stack-Item">Nginx</span>
                    </ul>
                </aside>                  
            </article>
    )
}