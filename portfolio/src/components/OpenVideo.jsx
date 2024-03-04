import ReactPlayer from 'react-player';
import { IoIosCloseCircle } from "react-icons/io";
import { VideoContext } from '../context/videoContext'
import { useContext } from 'react';

const OpenVideo = () => {
    const { currentVideo, Open, SetOpen } = useContext(VideoContext);
    return (
        <>
        {
            Open && 
            <div className="fixed right-0 top-0 left-0 bottom-0 z-10 bg-black/80 " onClick={() => SetOpen(false) }>
                <div className="fixed right-0 sm:top-20 top-40 sm:left-[20vw] sm:w-[60vw] sm:h-[80vh] w-full h-[40vh] grid  rounded-2xl  border-8 border-slate-800 z-10 bg-white">
                    <IoIosCloseCircle onClick={() => SetOpen(false) } className=" w-full h-16 fixed right-0 sm:top-2 top-14  text-white"></IoIosCloseCircle>
                    <div className="w-full h-full">
                        <ReactPlayer url={currentVideo}  width='100%'height='100%' />
                    </div>
                </div>
            </div>
        }
        </>
    )
}

export default OpenVideo;