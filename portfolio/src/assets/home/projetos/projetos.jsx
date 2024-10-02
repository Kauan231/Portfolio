import thumbCurriculum from './images/Curriculo.png'
import thumbStore from './images/Store.jpg'
import thumbBurguer from './images/BurgerIcon.png'
import thumbSnake from './images/Snake.png'
import thumbCourse from './images/course.png'

import thumbNave from './images/NAVE.jpg'
import thumbRoche from './images/Roche.jpg'
import thumbDragon from './images/Dragon.jpg'
import thumbYpe from './images/Ype.jpg'
import thumbTetris from './images/Tetris.jfif'

export const personalProjects = [
    {
        "Title": "Course-Platform",
        "Description": 
        <>
        Este projeto foi desenvolvido para aprimorar minhas habilidades em desenvolvimento web full-stack.
        <br/>
        <br/>
        Na parte frontend, utilizei React.js junto com Context API e React Router Dom para gerenciamento de estado e roteamento,
        respectivamente. Para estilização, empreguei Tailwind CSS juntamente com CSS personalizado. Utilizei armazenamento local 
        para salvar o progresso do usuário e cookies para gerenciar tokens JWT. A verificação de entrada foi realizada usando Yup.
        <br/>
        <br/>
        Para o backend, empreguei Node.js com Express.js, utilizando Sequelize com SQLite para gerenciamento de banco de dados.
        Senhas foram seguramente criptografadas usando a biblioteca Crypto, enquanto a validação de dados foi implementada usando Joi.
        <br/>
        <br/>
        Em termos de testes, utilizei Jest junto com Supertest para uma cobertura de testes abrangente.
        </>,
        "Image": thumbCourse,
        "Link": "https://github.com/Kauan231/Course-Platform",
        "Video": "https://www.youtube.com/watch?v=EI1mtukspjs",
        "Tag": "Web"
    },
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
        "Link": "https://github.com/Kauan231/Simple-Curriculum",
        "Tag": "Web"
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
        "Link": "https://github.com/Kauan231/Store-Management",
        "Video": "https://youtu.be/XIBUFGX-Q0g",
        "Tag": "Other"
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
        "Link": "https://github.com/Kauan231/Burguer-Game",
        "Video": "https://youtu.be/d9-kVnSytXM",
        "Tag": "Game"
    },
    {
        "Title": "Snake game - Win32 API - C++",
        "Description": 
        <>
        Snake game developed with Windows native API ( Win32 - Windows.h ).
        </>,
        "Image": thumbSnake,
        "Link": "https://github.com/Kauan231/Snake-game",
        "Video" : "https://youtu.be/DRRxDrfRI1c",
        "Tag": "Game"
    },
]


export const workProjects = [
    {
        "Title": "Laboratório Roche",
        "Description": 
        <>
        Participei de um projeto empolgante para a Roche, onde criamos um laboratório virtual com detalhes técnicos de produtos. 
        Desenvolvi uma interface drag & drop intuitiva, permitindo aos usuários montarem seus próprios laboratórios e compartilharem
         via e-mail ou QR. Usamos .NET, integramos com Node.js e implementamos FTP para transferência de arquivos. O objetivo é oferecer 
         uma experiência envolvente e informativa aos profissionais da área médica
        </>,
        "Image": thumbRoche,
        "Video": "https://youtu.be/x5Gbx0zI4VY",
        "Tag": "Game"
    },
    {
        "Title": "Kinea Racer",
        "Description": 
        <>
        Neste projeto, fui responsável pelo desenvolvimento de um jogo de corrida espacial para a marca Kinea. O objetivo principal deste jogo é a 
        coleta da maior quantidade de pontos e a conclusão do percurso no menor tempo possível. O participante que obtiver a melhor posição no ranking
        será premiado com um brinde especial.
        Dentro do jogo, cada moeda especial coletada representa um dos produtos de alta qualidade da Kinea,
        proporcionando aos jogadores uma experiência imersiva da marca e um maior conhecimento sobre seus produtos.
        </>,
        "Image": thumbNave,
        "Video": "https://youtu.be/L-m8cqTo44o",
        "Tag": "Game"
    },
    {
        "Title": "Dragão Kinect",
        "Description": 
        <>
        Neste emocionante projeto, assumi a responsabilidade de criar uma experiência interativa única, onde os participantes puderam se sentir como verdadeiros senhores dos dragões.
        A ação promocional foi desenvolvida para celebrar a série House of the Dragon da HBO, e o local escolhido para essa aventura foi um shopping em São Paulo.
        <br></br>
        <br></br>
        A movimentação do Dragão foi feita utilizando um sensor Kinect 2.0.
        </>,
        "Image": thumbDragon,
        "Video": "https://youtu.be/iLbuda_haoM",
        "Tag": "Game"
    },
    {
        "Title": "Ypê Jogo da Memória",
        "Description": <>
        Desenvolvi um divertido jogo da memória com os produtos icônicos da Ypê. Os Jogadores no evento Apas de 2023 puderam testar suas habilidades de 
        memória enquanto exploravam a variedade de produtos da marca, e ao final do desafio tinham uma surpresa: brindes exclusivos da Ypê! 
        A entrega personalizada tornou esse momento ainda mais especial para cada participante.
        </>,
        "Image": thumbYpe,
        "Video": "https://youtu.be/aMt2eM6y1eA",
        "Tag": "Game"
    },
    {
        "Title": "Tetris",
        "Description": <>
        Esse foi um projeto emocionante que trouxe a nostalgia dos jogos retrô, para um shopping no Rio de Janeiro. Minha contribuição envolveu a criação de um 
        ambiente interativo que combina a simplicidade cativante dos clássicos com a inovação tecnológica. A instalação desses jogos tradicionais em um 
        contexto moderno proporciona uma experiência envolvente para visitantes de todas as idades, celebrando a união entre o passado e a tecnologia contemporânea.
        </>,
        "Image": thumbTetris,
        "Video": "https://youtube.com/shorts/f_X0RoumFmg",
        "Tag": "Game"
    },
]
