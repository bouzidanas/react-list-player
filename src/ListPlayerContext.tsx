import { createContext } from "react";

export const ListPlayerContext = createContext<{selectedTrack: number, isPlaying: boolean, isMuted: boolean, setSelectedTrack: (track: number) => void, setIsPlaying: (isPlaying: boolean) => void, setIsMuted: (isMuted: boolean) => void}>(
    {
        selectedTrack: -1, 
        isPlaying: false,
        isMuted: false,
        setSelectedTrack: () => {},
        setIsPlaying: () => {},
        setIsMuted: () => {}
    }
);
