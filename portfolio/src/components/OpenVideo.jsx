import ReactPlayer from 'react-player';
import { IoIosCloseCircle } from "react-icons/io";
import { VideoContext } from '../context/videoContext'
import { useContext } from 'react';
import './style/Video.css'

const OpenVideo = () => {
    const { currentVideo, Open, SetOpen } = useContext(VideoContext);
    return (
        <>
        {
            Open && 
            <div>
                <div className="Backdrop" onClick={() => SetOpen(false) }></div>
                <div className="Overlay-Container">
                    <div className="md:grid md:grid-cols-6">
                        <div className="Video-Container">
                            <IoIosCloseCircle onClick={() => SetOpen(false) } className="Video-Close-Icon"></IoIosCloseCircle>
                            <ReactPlayer url={currentVideo.Video}  width='100%'height='100%' controls/>
                        </div>
                        <div className="Project-Container">
                                <IoIosCloseCircle onClick={() => SetOpen(false) } className="Project-Close-Icon"></IoIosCloseCircle>
                                <div className="Description-Container">
                                    <h1 className="Description-Title">{currentVideo.Title}</h1>
                                    <p className="text-lg">
                                    {currentVideo.Description}
                                    </p>
                                    {
                                        currentVideo.Link &&
                                        <a href={currentVideo.Link} className="Card-Button mb-6"> 
                                            <h1 className="Card-Button-Text">Github</h1>
                                        </a> 
                                    }
                            </div>
                            
                            
                        </div>
                    </div>
                    </div>
                    
            </div>
        }
        </>
    )
}

export default OpenVideo;