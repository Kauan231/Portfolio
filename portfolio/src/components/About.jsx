import Photo from "../assets/home/documentos/1.jpg"
export default function About() {
    return (
        <> 
        <div id="sobre"> 
            <div className="h-auto w-full items-center justify-center lg:grid lg:grid-cols-2 flex flex-col p-10 bg-neutral-300 ">
                <div className="col-span-1 lg:place-self-end lg:mr-24 ">
                    <img  src={Photo} className=" h-auto md:w-[30vh] w-[30vw] align-middle rounded-full"></img>
                </div>
                <div className="col-span-1 mt-8 md:mt-0">
                    <span className="md:text-[3vw] text-[6vw] underline-offset-4 underline font-semibold">Sobre</span>
                    <p className="lg:text-[1.4vw] mt-4 md:font-thin ">
                    Tenho mais de dois anos de experiência atuando no ramo de interatividade para eventos utilizando Unity e .Net porém também trabalhando com Backend e Frontend Web em NodeJS.
                Além dessas tecnologias citadas, tenho experiência com: C++, C#, Javascript, Python, SQL(MariaDB, MySql), NoSQL(MongoDB), React, HTML, CSS, AWS e Nginx.
                Trabalho bem com: Blender, Photoshop, Premiere, Illustrator e Figma.
                    </p>
                </div>
                
            </div>
        </div>
        </>
    )
}