/// <reference types="react" />
export declare const ListPlayerContext: import("react").Context<{
    selectedTrack: number;
    isPlaying: boolean;
    isMuted: boolean;
    setSelectedTrack: (track: number) => void;
    setIsPlaying: (isPlaying: boolean) => void;
    setIsMuted: (isMuted: boolean) => void;
}>;
