import { createContext } from "react";

export const ListPlayerContext = createContext<{selectedTrack: number, isPlaying: boolean, isMuted: boolean, currentTime: number, duration: number, setSelectedTrack: (track: number) => void, setIsPlaying: (isPlaying: boolean) => void, setIsMuted: (isMuted: boolean) => void, setCurrentTime: (time: number) => void}>(
    {
        selectedTrack: -1, 
        isPlaying: false,
        isMuted: false,
        currentTime: 0,
        duration: 0,
        setSelectedTrack: () => {},
        setIsPlaying: () => {},
        setIsMuted: () => {},
        setCurrentTime: () => {}
    }
);
