import thumbCurriculum from '../projetos/Curriculo.png'
import thumbStore from '../projetos/Store.jpg'
import thumbBurguer from '../projetos/BurgerIcon.png'
import thumbSnake from '../projetos/Snake.png'
import thumbCourse from '../projetos/course.png'

import thumbNave from '../projetos/NAVE.jpg'
import thumbRoche from '../projetos/Roche.jpg'
import thumbDragon from '../projetos/Dragon.jpg'
import thumbYpe from '../projetos/Ype.jpg'
import thumbTetris from '../projetos/Tetris.jfif'

export const personalProjectsEN = [
    {
        "Title": "Course-Platform",
        "Description": 
        <>
        This project was developed to enhance my skills in full-stack web development. 
        <br/>
        <br/>
        On the frontend, I utilized React.js along with Context API 
        and React Router Dom for state management and routing respectively. For styling, I employed Tailwind CSS along with custom CSS. I utilized local
        storage to store user progress and cookies for managing JWT tokens. Input verification was handled using Yup.
        <br/>
        <br/>
        For the backend, I employed Node.js with Express.js, leveraging Sequelize with SQLite for database management. Passwords were securely hashed using the Crypto library, while data validation was implemented using Joi.
        <br/>
        <br/>
        In terms of testing, I utilized Jest along with Supertest for comprehensive testing coverage.
        This revision clarifies the technologies and tools used in the project, making the description more coherent and easier to understand.
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
        Simple-Curriculum is a personal project to enhance my skills in ASP.NET using the QuestPDF library, as well as explore frontend tools like ReactJS, Typescript, and Tailwind. The project's goal is to provide an API for automatically formatting resumes, which can be used as an individual tool or as an example in a job vacancy website tool.
        </>,
        "Image": thumbCurriculum,
        "Link": "https://github.com/Kauan231/Simple-Curriculum",
        "Tag": "Web"
    },
    {
        "Title": "Store-Management",
        "Description": 
        <>
        This project was developed using C++, Mysql connector, and Boost Libraries. The Store Management system operates with a structured division of responsibilities between the Manager and the Seller, each equipped with specific options tailored to their roles.
        </>,
        "Image": thumbStore,
        "Link": "https://github.com/Kauan231/Store-Management",
        "Video": "https://youtu.be/Z-ZmqmdiBaM",
        "Tag": "Other"
    },
    {
        "Title": "Burguer-Game",
        "Description": 
        <>
        Burguer Rush is a test game with the proposal of assembling the highest number of hamburgers in 2 minutes. <br/>
        Mechanics: <br/>
        - Drag and drop ingredients onto the tray to add them to the burger. <br/>
        - Drag ingredients out of the burger that you want to remove. <br/>
        - The game will end when all orders are fulfilled or when time runs out. <br/>
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
        Snake game developed with Windows native API (Win32 - Windows.h).
        </>,
        "Image": thumbSnake,
        "Link": "https://github.com/Kauan231/Snake-game",
        "Video" : "https://youtu.be/DRRxDrfRI1c",
        "Tag": "Game"
    },
]

export const workProjectsEN = [
    {
        "Title": "Roche Lab Builder",
        "Image": thumbRoche,
        "Description": <>
        I participated in an exciting project for Roche, where we created a virtual laboratory with technical details of products. 
        I developed an intuitive drag & drop interface, allowing users to build their own laboratories and share them 
        via email or QR code. We used .NET, integrated with Node.js, and implemented FTP for file transfer. The goal is to offer 
        an engaging and informative experience to medical professionals.
        </>,
        "Video": "https://youtu.be/x5Gbx0zI4VY"
    },
    {
        "Title": "Kinea Racer",
        "Description": <>
        In this project, I was responsible for developing a space racing game for the Kinea brand. The main objective of this 
        game is to collect the highest amount of points and complete the course in the shortest time possible. The participant
         who achieves the best position in the ranking will be awarded a special prize.
        Within the game, each special coin collected represents one of Kinea's high-quality products, 
        providing players with an immersive brand experience and greater knowledge about its products.
        </>,
        "Image": thumbNave,
        "Video": "https://youtu.be/L-m8cqTo44o"
    },
    {
        "Title": "Dragon Kinect",
        "Description": <>
        In this exciting project, I took on the responsibility of creating a unique interactive experience, where participants could feel like true dragon lords. 
        The promotional action was developed to celebrate HBO's House of the Dragon series, and the location chosen for this adventure was a shopping mall in São Paulo.
        <br></br>
        <br></br>
        The movement of the dragon was done using a Kinect 2.0 sensor.
        </>,
        "Image": thumbDragon,
        "Video": "https://youtu.be/iLbuda_haoM"
    },
    {
        "Title": "Ypê - Memory Game",
        "Image": thumbYpe,
        "Description": <>
        I developed a fun memory game featuring Ypê's iconic products. At the Apas event in 2023, players were able to test their memory skills
        while exploring the brand's range of products, and at the end of the challenge, they had a surprise: exclusive Ypê gifts! The personalized
        delivery made this moment even more special for each participant.
        </>,
        "Video": "https://youtu.be/aMt2eM6y1eA"
    },
    {
        "Title": "Tetris",
        "Description": <>
        This was an exciting project that brought back the nostalgia of retro games to a shopping mall in Rio de Janeiro. 
        My contribution involved creating an interactive environment that combines the captivating simplicity of classics with technological innovation. 
        The installation of these traditional games in a modern context provides an engaging experience for visitors of all ages, celebrating the 
        union between the past and contemporary technology.
        </>,
        "Image": thumbTetris,
        "Video": "https://youtube.com/shorts/f_X0RoumFmg"
    },
]
