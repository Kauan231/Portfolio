import { useContext } from "react";
import { LanguageContext } from "../context/languageContext";

export default function Gamedev(){
    const { Language } = useContext(LanguageContext);
    return (
        <>
            <div className="h-auto w-full justify-center items-center lg:grid lg:grid-cols-4 sm:mt-12 mt-5"> 
                <span className="lg:text-4xl text-xl col-span-1 p-10 underline underline-offset-4 lg:no-underline lg:text-right">GameDev </span>
                <div className="col-span-3 lg:ml-5">
                    <aside className="lg:text-xl text-justify lg:pr-24 lg:border-black border-l-4 lg:pl-2 sm:p-4 p-2">
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
                    
                    </aside>
                    <br></br>
                    <div className="spacing gap-2 flex flex-wrap sm:justify-normal justify-center"> 
                        <span className="lg:text-xl text-justify font-semibold p-1 ">Stack:</span>
                        <span className="lg:text-xl text-justify font-semibold p-1 bg-slate-300 border rounded-lg hover:bg-opacity-50">Unity</span>
                        <span className="lg:text-xl text-justify font-semibold p-1 bg-slate-300 border rounded-lg hover:bg-opacity-50">C++(Windows.h)</span>
                        <span className="lg:text-xl text-justify font-semibold p-1 bg-slate-300 border rounded-lg hover:bg-opacity-50">Blender</span>
                        <span className="lg:text-xl text-justify font-semibold p-1 bg-slate-300 border rounded-lg hover:bg-opacity-50">Photoshop</span>
                        <span className="lg:text-xl text-justify font-semibold p-1 bg-slate-300 border rounded-lg hover:bg-opacity-50">Illustrator</span>
                    </div>
                </div>
                
            </div>
        </>
    )
}