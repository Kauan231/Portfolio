import { useContext, useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { VideoContext } from '../context/videoContext';
import { LanguageContext } from '../context/languageContext';
import {workProjects } from "../assets/home/projetos/projetos";
import {workProjectsEN} from "../assets/home/projetos/projects";

const ProfessionalProjects = () => {
    const { SetCurrentVideo, SetOpen } = useContext(VideoContext);
    const { Language } = useContext(LanguageContext);
    const [index, setIndex] = useState(0);

    const arrayOfProjects = Language === "Portuguese" ? workProjects : workProjectsEN;

    const CardVideo = ({ title, image, item }) => (
        <>
            <div className="hidden sm:flex">
                <div
                    className="SpecialCard relative z-0 flex flex-col cursor-pointer"
                    onClick={() => { SetCurrentVideo(item); SetOpen(true); }}
                >
                    <div className="bg-black/70 w-full h-full absolute z-10 justify-center items-center hidden sm:flex opacity-0 hover:opacity-100 duration-500">
                        <h1 className='absolute top-[50%] text-lg font-bold text-white'>
                            {Language === "Portuguese" ? "Visualizar" : "Show"}
                        </h1>
                        <h1 className='absolute top-[40%] text-2xl font-bold text-white'>
                            {title}
                        </h1>
                    </div>
                    <img src={image} alt={title} className='Card-Image object-cover' />
                </div>
            </div>
            <div className="block sm:hidden pt-6">
                <div className="border-2 flex flex-col h-auto  rounded-xl">
                    <div className="w-full">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-[35vh] object-cover rounded-xl"
                        />
                    </div>
                    <div className="p-4 flex flex-col items-center justify-between gap-3">
                        <span className="text-lg font-semibold text-center text-gray-800 text-white">
                            {title}
                        </span>
                        <button
                            onClick={() => { SetCurrentVideo(item); SetOpen(true); }}
                            className="px-4 py-2 text-sm font-medium bg-gray-300 text-black rounded-md hover:bg-gray-400 transition"
                        >
                            {Language === "Portuguese" ? "Visualizar" : "Show"}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );

    const FakeCard = () => (
        <>
            <div className="hidden sm:flex opacity-0">
                <div className="SpecialCard relative z-0 flex flex-col">
                    <img className='Card-Image object-cover' alt="Placeholder" />
                </div>
            </div>
            <div className="block sm:hidden opacity-0">
                <div className="SpecialCard-SM flex flex-col">
                    <img className='Card-Image-SM object-cover' alt="Placeholder" />
                </div>
            </div>
        </>
    );

    return (
        <>
            <div className='SpecialCard-Grid hidden xl:flex'>
                <FaArrowAltCircleLeft
                    onClick={() => setIndex(Math.max(index - 2, 0))}
                    className={`${(index - 2) >= 0 ? "flex" : "hidden"} w-auto h-12 m-2 text-white cursor-pointer`}
                />
                {arrayOfProjects[index] ? (
                    <CardVideo title={arrayOfProjects[index].Title} image={arrayOfProjects[index].Image} item={arrayOfProjects[index]} />
                ) : <FakeCard />}

                {arrayOfProjects[index + 1] ? (
                    <CardVideo title={arrayOfProjects[index + 1].Title} image={arrayOfProjects[index + 1].Image} item={arrayOfProjects[index + 1]} />
                ) : <FakeCard />}
                <FaArrowAltCircleRight
                    onClick={() => setIndex(index + 2)}
                    className={`${(index + 2) < arrayOfProjects.length ? "flex" : "hidden"} w-auto h-12 m-2 text-white cursor-pointer`}
                />
            </div>

            <div className="xl:hidden overflow-x-scroll flex gap-4 px-4 snap-x snap-mandatory scroll-smooth">
                {arrayOfProjects.map((project, i) => (
                    <div
                        key={i}
                        className="flex-shrink-0 w-[80vw] snap-center"
                    >
                        <CardVideo
                            title={project.Title}
                            image={project.Image}
                            item={project}
                        />
                    </div>
                ))}
            </div>
        </>
    );
};

export default ProfessionalProjects;
