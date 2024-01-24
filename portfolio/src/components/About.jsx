import Photo from "../assets/home/documentos/1.jpg"
export default function About() {
    return (
        <> 
        <div id="sobre"> 
            <div className="h-auto w-full items-center justify-center grid grid-cols-2 p-10 bg-neutral-300 ">
                <div className="col-span-1 place-self-end mr-24 ">
                    <img  src={Photo} className=" h-auto w-[30vh] rounded-full"></img>
                </div>
                <div className="col-span-1">
                    <span className="text-[3vw] underline-offset-4 underline font-semibold">Sobre</span>
                    <p className="text-[1.4vw] mt-4 font-thin ">
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