import React, { CSSProperties } from "react";
type playlistInfo = {
    type: 'playlist';
    name: string;
    numTracks: number;
    duration: string;
    creationDate?: string;
    imageSrc?: string;
};
type albumInfo = {
    type: 'album';
    name: string;
    numTracks: number;
    duration: string;
    releaseDate?: string;
    genre?: string;
    imageSrc?: string;
};
type artistInfo = {
    type: 'artist';
    name: string;
    numTracks: number;
    numAlbums: number;
    genre?: string;
    imageSrc?: string;
};
export type listInfo = playlistInfo | albumInfo | artistInfo;
type trackInfo = {
    alternateTitle?: string;
    releaseDate?: string;
    genre?: string;
    imageSrc?: string;
    videoSrc?: string;
};
type text = {
    type: 'text';
    content: string;
    link?: string;
    externalLink?: boolean;
    className?: string;
    style?: CSSProperties;
};
type badge = {
    type: 'badge';
    content: string;
    className?: string;
    style?: CSSProperties;
};
export type track = {
    title: playerText[];
    artist: playerText[];
    album: playerText[];
    duration: string;
    src?: string;
    imageSrc?: string;
    meta?: trackInfo;
};
type playerText = text | badge;
export declare const ListInfoCard: ({ track, info }: {
    track: track;
    info: listInfo;
}) => import("react/jsx-runtime").JSX.Element;
export declare const ListControls: ({ muted, playing, nextCallback, prevCallback, playCallback, muteCallback }: {
    track: track;
    muted?: boolean | undefined;
    playing?: boolean | undefined;
    noControls?: boolean | undefined;
    nextCallback?: (() => void) | undefined;
    prevCallback?: (() => void) | undefined;
    playCallback?: ((play: boolean) => void) | undefined;
    muteCallback?: ((mute: boolean) => void) | undefined;
}) => import("react/jsx-runtime").JSX.Element;
export declare const ListHeader: ({ info, track, muted, playing, noControls, snapTo, nextCallback, prevCallback, playCallback, muteCallback, children }: {
    info: listInfo;
    track: track;
    muted?: boolean | undefined;
    playing?: boolean | undefined;
    noControls?: boolean | undefined;
    snapTo?: string | undefined;
    nextCallback?: (() => void) | undefined;
    prevCallback?: (() => void) | undefined;
    playCallback?: ((play: boolean) => void) | undefined;
    muteCallback?: ((mute: boolean) => void) | undefined;
    children?: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export declare const ListPlayer: ({ tracks, listInfo, prevBufferTime, playerMode, noControls, noHeader, loop, continueOn, playCallback, pauseCallback, muteCallback, children }: {
    tracks?: track[] | undefined;
    listInfo?: listInfo | undefined;
    prevBufferTime?: number | undefined;
    playerMode?: string | undefined;
    noControls?: boolean | undefined;
    noHeader?: boolean | undefined;
    loop?: boolean | undefined;
    continueOn?: boolean | undefined;
    playCallback?: ((trackNumber: number, resume: boolean) => void) | undefined;
    pauseCallback?: (() => void) | undefined;
    muteCallback?: ((mute: boolean) => void) | undefined;
    children?: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export {};
