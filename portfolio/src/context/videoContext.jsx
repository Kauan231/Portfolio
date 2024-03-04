import { createContext, useState } from "react";

export const VideoContext = createContext();
VideoContext.displayName = "Video";

export const VideoProvider = ({ children }) => {
    const [Video, SetVideo] = useState("");
    const [currentVideo, SetCurrentVideo] = useState("");
    const [Open, SetOpen] = useState(false);

    return (
      <VideoContext.Provider value={{Video, SetVideo, currentVideo, SetCurrentVideo, Open, SetOpen}}>
        {children}
      </VideoContext.Provider>
    );
  };