import thumbCurriculum from '../projetos/Curriculo.png'
import thumbStore from '../projetos/Store.jpg'
import thumbBurguer from '../projetos/BurgerIcon.png'
import thumbSnake from '../projetos/Snake.png'

const PersonalProjects = [
    {
        "Title": "Simple-Curriculum",
        "Description": 
        <>
        Simple-Curriculum é um projeto pessoal para aprimorar minhas habilidades em ASP.NET com o uso da Biblioteca QuestPDF, além de explorar 
        ferramentas do frontend como ReactJS, Typescript e Tailwind. O objetivo do projeto é disponibilizar uma API para a criação de curriculos
        formatados automaticamente, assim podendo ser utilizado como ferramenta individual ou utilizado como exemplo em uma ferramenta de um site de 
        vagas de trabalho.
        </>,
        "Image": thumbCurriculum,
        "Link": "https://github.com/Kauan231/Simple-Curriculum"
    },
    {
        "Title": "Store-Management",
        "Description": 
        <>
        Este projeto foi desenvolvido usando C++, Mysql connector e Boost Libraries. O sistema de Gerenciamento de Loja opera 
        com uma divisão estruturada de responsabilidades entre o Gerente e o Vendedor, cada um equipado com opções específicas 
        adaptadas aos seus papéis. 
        </>,
        "Image": thumbStore,
        "Link": "https://github.com/Kauan231/Store-Management"
    },
    {
        "Title": "Burguer-Game",
        "Description": 
        <>
        Burguer Rush é um jogo teste com a proposta de montar a maior quantia de hamburgueres em 2 minutos.<br/>
        Mecânicas: <br/>
        - Arraste e solte os ingredientes na bandeja para adiciona-los ao hamburguer. <br/>
        - Arraste para fora do hamburguer os ingredientes que deseja remover. <br/>
        - O jogo terminará quando todos os pedidos forem atendido ou caso o tempo acabe.  <br/>
        </>,
        "Image": thumbBurguer,
        "Link": "https://github.com/Kauan231/Burguer-Game"
    },
    {
        "Title": "Snake game - Win32 API - C++",
        "Description": 
        <>
        Snake game developed with Windows native API ( Win32 - Windows.h ).
        </>,
        "Image": thumbSnake,
        "Link": "https://github.com/Kauan231/Snake-game"
    },
]

export default PersonalProjects;