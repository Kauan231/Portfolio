import { useContext, useRef } from "react";
import { LanguageContext } from "../context/languageContext";
import '../components/style/Skills.css'
import useIsVisible from "../utils/Observer";

export default function Gamedev(){
    const ref1 = useRef();
    const isVisible1 = useIsVisible(ref1);
    const { Language } = useContext(LanguageContext);
    return (
        <article ref={ref1} className={`mb-20 Skills-Article transition-opacity ease-in duration-500 ${isVisible1 ? "opacity-100" : "opacity-0"}`}> 
            <h1 className="Skill-Title">GameDev </h1>
            <aside className="Skills-Aside">
                {
                    (Language == "Portuguese") ? 
                    <>
                    <b>Com mais de dois anos de experiência como desenvolvedor de jogos, </b> 
                    atuo no desenvolvimento de aplicativos interativos e jogos para eventos corporativos. <br/> <br/>
                    Minha expertise inclui:<br/>

                    - Integração de <b>Realidade Aumentada (AR)</b> com frameworks como WebAR, ThreeJS e A-Frame.<br/> 
                    - Desenvolvimento de jogos 3D, 2D para Computadores e dispositivos móveis.<br/> 
                    - Utilização de diversos métodos de input, como Kinect, Leap Motion, VR, Touch, Scanners, Câmeras e Sensores.<br/>
                    - Integração de sensores eletrônicos físicos, como Botões, Sensores de Presença, Infravermelho, utilizando <b>Arduino</b>  para comunicação bilateral com aplicativos <b>Unity</b>.<br/> 
                    - Criação de interações físicas com componentes eletrônicos, como Vending Machines, Mesas para Quiz e Pinball.<br/> 
                    - Utilização de Leitores RFID, QR Code e Código de Barras.<br/> <br/>
                    
                    Dentro da minha experiencia criei diversos tipos de jogos, como <b>Jogos de Corrida, Pinball, Quiz, VR, Jogo da Memoria, Jogos Ritmicos (Como Guitar Hero), Tetris </b>, entre outros.<br/> <br/>

                    Também possuo experiencia com modelagem e modificação de modelos 3D com o uso do <b>Blender</b>, criação de assets 2D (Sprites e UI), design de interfaces utilizando Illustrator e Photoshop, 
                    e o desenvolvimento de aplicativos conforme as especificações dos clientes.

                    Além da experiência profissional, já trabalhei com <b>C++</b> e a API nativa do Windows(Windows.h), criando o jogo Snake.
                    </>
                    :
                    <>
                    <b>With over two years of experience as a game developer,</b> I specialize in developing interactive applications and games for corporate events. <br/> <br/>
                    My expertise includes: <br/>

                    - Integration of <b>Augmented Reality (AR)</b> with frameworks like WebAR, ThreeJS, and A-Frame. <br/>
                    - Development of 3D, 2D games for computers and mobile devices. <br/>
                    - Utilization of various input methods such as Kinect, Leap Motion, VR, Touch, Scanners, Cameras, and Sensors. <br/>
                    - Integration of physical electronic sensors such as Buttons, Presence Sensors, Infrared, using <b>Arduino</b> for bilateral communication with <b>Unity</b> applications. <br/>
                    - Creation of physical interactions with electronic components such as Vending Machines, Quiz Tables, and Pinball. <br/>
                    - Use of RFID Readers, QR Codes, and Barcodes. <br/> <br/>

                    Within my experience, I have created various types of games, such as <b>Racing Games, Pinball, Quiz, VR, Memory Games, Rhythm Games (like Guitar Hero), Tetris</b>, among others. <br/> <br/>

                    I also have experience with 3D modeling and modification using <b>Blender</b>, creation of 2D assets (Sprites and UI), interface design using Illustrator and Photoshop, and application development according to client specifications. <br/> <br/>

                    In addition to professional experience, I have worked with <b>C++</b> and the native Windows API (Windows.h), creating the game Snake.
                    </>
                }
                <ul className="Stack-Items"> 
                    <li className="Stack-Title">Stack:</li>
                    <li className="Stack-Item">Unity</li>
                    <li className="Stack-Item">C++(Windows.h)</li>
                    <li className="Stack-Item">Blender</li>
                    <li className="Stack-Item">Photoshop</li>
                    <li className="Stack-Item">Illustrator</li>
                </ul>
            </aside>  
        </article>
    )
}