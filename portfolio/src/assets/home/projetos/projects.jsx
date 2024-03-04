import thumbCurriculum from '../projetos/Curriculo.png'
import thumbStore from '../projetos/Store.jpg'
import thumbBurguer from '../projetos/BurgerIcon.png'
import thumbSnake from '../projetos/Snake.png'

const PersonalProjects = [
    {
        "Title": "Simple-Curriculum",
        "Description": 
        <>
        Simple-Curriculum is a personal project to enhance my skills in ASP.NET using the QuestPDF library, as well as explore frontend tools like ReactJS, Typescript, and Tailwind. The project's goal is to provide an API for automatically formatting resumes, which can be used as an individual tool or as an example in a job vacancy website tool.
        </>,
        "Image": thumbCurriculum,
        "Link": "https://github.com/Kauan231/Simple-Curriculum"
    },
    {
        "Title": "Store-Management",
        "Description": 
        <>
        This project was developed using C++, Mysql connector, and Boost Libraries. The Store Management system operates with a structured division of responsibilities between the Manager and the Seller, each equipped with specific options tailored to their roles.
        </>,
        "Image": thumbStore,
        "Link": "https://github.com/Kauan231/Store-Management"
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
        "Link": "https://github.com/Kauan231/Burguer-Game"
    },
    {
        "Title": "Snake game - Win32 API - C++",
        "Description": 
        <>
        Snake game developed with Windows native API (Win32 - Windows.h).
        </>,
        "Image": thumbSnake,
        "Link": "https://github.com/Kauan231/Snake-game"
    },
]


export default PersonalProjects;