import Adidas from '../../assets/home/eventos/Adidas.jpg'
import Ype from '../../assets/home/eventos/Ypê.jpg'
import Ype2 from '../../assets/home/eventos/Ype2.jpg'
import Heineken from '../../assets/home/eventos/Heineken.jpg'
import Sebrae from '../../assets/home/eventos/Sebrae.jpg'
import Sebrae2 from '../../assets/home/eventos/Sebrae2.jpg'
import Sebrae3 from '../../assets/home/eventos/Sebrae3.jpg'
import Sebrae4 from '../../assets/home/eventos/Sebrae4.jpg'
import Medilar from '../../assets/home/eventos/Medilar.jpg'
import Descartavel from '../../assets/home/eventos/Descartavel.jpg'
import MobicityEquipe from '../../assets/home/mobiEquipe.jpeg'

let ImageList = [Adidas, Ype, Ype2, Heineken, Sebrae, Sebrae2, Sebrae3, Sebrae4, Medilar, Descartavel];

import Ubergeek from '../../assets/home/ubergeek_interativa_logo.png'
import Mobicity from '../../assets/home/logoMobicity.png'


let CareerInfo = {
    title: {
        Portuguese: "Experiência",
        English: "Career"
    },
    companies: [
        {
            companyName: "Mobicity",
            website:"https://www.mobicity.com.br/",
            companyLogo: Mobicity,
            images: [MobicityEquipe],
            Portuguese: {
                description: {
                    stack: "Stack utilizada: React com Flux/Redux no frontend; Node.js no backend, com implementação de filas, rotinas em background e integração com bases de dados.",
                    main: "Atuei no desenvolvimento de aplicações web fullstack, com foco na manutenção, evolução e escalabilidade de sistemas. No frontend, utilizei React com gerenciamento de estado via Flux/Redux. No backend, desenvolvi rotinas em Node.js para processamento massivo de dados, filas de tarefas assíncronas e integração com bancos de dados. Também fui responsável por ativdades como deploy, análise de logs, correção de bugs, revisão de código, refatorações e desenho de soluções (system design).",
                    highlightTitle: "Conquistas",
                    firstHighlight: "Refatorei o fluxo de cadastro em massa de usuários vinculados a prestadores de mobilidade, melhorando a performance e a manutenibilidade do sistema.",
                    secondHighlight: "Realizei a integração com o Databricks para integrar os dados usuários, entidades e outros ao nosso sistema, atendendo à uma demanda específica da Petrobras."
                },
                time: "(Outubro 2024 -> Atualmente)",
            },
            English: {
                description: {
                    stack: "Stack used: React with Flux/Redux on the frontend; Node.js on the backend, implementing queues, background routines, and database integration.",
                    main: "I worked on the development of fullstack web applications, focusing on system maintenance, evolution, and scalability. On the frontend, I used React with state management via Flux/Redux. On the backend, I developed routines in Node.js for large-scale data processing, asynchronous task queues, and database integration. I was also responsible for activities such as deployment, log analysis, bug fixing, code review, refactoring, and solution design (system design).",
                    highlightTitle: "Highlights",
                    firstHighlight: "Refactored the bulk user registration flow linked to transportation service providers, improving system performance and maintainability.",
                    secondHighlight: "Implemented data integration using Databricks to sync users, entities, and other data into our system, in response to a specific request from Petrobras."
                },
                time: "(October 2024 -> Present)"
            }
        },
        {
            companyName: "Ubergeek",
            website:"https://www.ubergeek.com.br/",
            companyLogo: Ubergeek,
            images: ImageList,
            Portuguese: {
                description: "Atuei como desenvolvedor .NET em projetos que abrangeram desde aplicativos interativos e jogos até sites dinâmicos e seguros. Na Ubergeek, participei do desenvolvimento de soluções para eventos corporativos como Apas e Febraban, unindo software, eletrônica e interatividade. Mantive contato direto com clientes como Coca-Cola, Caterpillar, Ypê e Adidas, realizando a elicitação de requisitos para entregas personalizadas. No frontend desenvolvi aplicações conforme especificações, adaptei UIs (Figma/Illustrator) e criei formulários com integração ao backend. No backend realizei projetos que incorporavam cadastros, autenticação, integrações com APIs, serviços AWS, envio de arquivos, FTP, e fiz deploy desses apps Node.js. No ramo de jogos, utilizei a engine Unity e trabalhei com diversos dispositivos e métodos de input (Kinect, VR, RFID, etc.).",
                time: "(Novembro 2021 -> Outubro 2024)"
            },
            English: {
                description: "I worked as a .NET developer on projects ranging from interactive applications and games to dynamic and secure websites. At Ubergeek, I contributed to the development of solutions for corporate events such as Apas and Febraban, combining software, electronics, and interactivity. I maintained direct communication with clients like Coca-Cola, Caterpillar, Ypê, and Adidas, gathering requirements for tailored deliveries. On the frontend, I developed applications according to specifications, adapted UIs (Figma/Illustrator), and created forms integrated with the backend. On the backend, I worked on projects involving user registration, authentication, API integrations, AWS services, file sending, FTP, and deployed Node.js applications. In the game development field, I used the Unity engine and worked with various devices and input methods (Kinect, VR, RFID, etc.).",
                time: "(November 2021 -> October 2024)"
            }
        }
    ]
}

export default CareerInfo;