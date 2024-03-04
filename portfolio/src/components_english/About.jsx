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
                    <span className="md:text-[3vw] text-[6vw] underline-offset-4 underline font-semibold">About me</span>
                    <p className="font-thin lg:text-2xl mt-4">
                    I have over two years of experience working in the corporative events sector using Unity and .Net, as well as working with Backend and Frontend Web in NodeJS.
                    In addition to these mentioned technologies, I have experience with: C++, C#, Javascript, Python, SQL (MariaDB, MySQL), NoSQL (MongoDB), React, HTML, CSS, AWS, and Nginx.
                    I am proficient with: Blender, Photoshop, Premiere, Illustrator, and Figma.
                    </p>
                </div>
                
            </div>
        </div>
        </>
    )
}