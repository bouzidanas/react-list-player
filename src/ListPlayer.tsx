import React, { CSSProperties, useContext, useEffect, useRef, useState } from "react";
import { HiMiniPlay, HiMiniPause, HiPlayCircle, HiMiniSpeakerWave, HiMiniSpeakerXMark, HiOutlinePauseCircle } from "react-icons/hi2";
import { RiSkipForwardMiniFill, RiSkipBackMiniFill } from "react-icons/ri";
import { CgMusicNote } from "react-icons/cg";
import { ListPlayerContext } from "./ListPlayerContext";

import './ListPlayer.css'

const testListInfo: listInfo = {
    type: 'playlist',
    name: 'Liked Songs',
    creationDate: "12/12/2020",
    numTracks: 10,
    duration: "30 min",
    imageSrc: "https://res.cloudinary.com/dqriqmsdk/image/upload/v1704626899/bird-berry.%7E.e1a90b8aa388f4da20db23617643eda5.jpg"

}

const placeholderListInfo: listInfo = {
    type: 'playlist',
    name: 'Playlist Name',
    numTracks: -1,
    duration: "[duration]"
}

const testTracks: track[] = [
    {
        title: [
            {
                type: 'text',
                content: 'Sos',
                className: 'title'
            },
            {
                type: 'badge',
                content: 'New',
                className: 'new'
            }
        ],
        artist: [
            {
                type: 'text',
                content: 'Timothy Fleet',
                className: 'artist',
                link: 'https://music.youtube.com/channel/UCmGqnW6VmhOV4KW67vhzPCA'
            },
            {
                type: 'text',
                content: '&',
                className: 'artist'
            },
            {
                type: 'text',
                content: 'Wayne Murray and company',
                className: 'artist',
                link: 'https://music.youtube.com/channel/UCkZXltuX3Rta9OiD-O505xg'
            }
        ],
        album: [
            {
                type: 'text',
                content: 'Vintage Radio: 1980s',
                className: 'album'
            },
            {
                type: 'badge',
                content: 'Explicit',
                className: 'explicit'
            }
        ],
        duration: "2:37"
    },
    {
        title: [
            {
                type: 'text',
                content: 'Fields of Blue',
                className: 'title'
            }
        ],
        artist: [
            {
                type: 'text',
                content: 'Tennis',
                className: 'artist'
            }
        ],
        album: [
            {
                type: 'text',
                content: 'Yours Conditionally',
                className: 'album'
            }
        ],
        duration: "3:29"
    },
    {
        title: [
            {
                type: 'text',
                content: 'Forbidden Doors',
                className: 'title'
            }
        ],
        artist: [
            {
                type: 'text',
                content: 'Tennis',
                className: 'artist'
            }
        ],
        album: [
            {
                type: 'text',
                content: 'Forbidden Doors',
                className: 'album'
            },
            {
                type: 'badge',
                content: 'Explicit',
                className: 'explicit'
            }
        ],
        duration: "3:54"
    },
    {
        title: [
            {
                type: 'text',
                content: 'Show Me How',
                className: 'title'
            },
            {
                type: 'badge',
                content: 'New',
                className: 'new'
            }
        ],
        artist: [
            {
                type: 'text',
                content: 'Men I Trust',
                className: 'artist'
            }
        ],
        album: [
            {
                type: 'text',
                content: 'Show Me How',
                className: 'album'
            }
        ],
        duration: "3:36"
    },
    {
        title: [
            {
                type: 'text',
                content: 'I Dont know You',
                className: 'title'
            }
        ],
        artist: [
            {
                type: 'text',
                content: 'The Marías',
                className: 'artist',
                link: 'https://music.youtube.com/channel/UCVV5M4OEFsKnB9HBhwOhHbA',
                externalLink: true
            }
        ],
        album: [
            {
                type: 'text',
                content: 'Superclean, Vol. I',
                className: 'album'
            }
        ],
        duration: "3:30"
    },
    {
        title: [
            {
                type: 'text',
                content: 'Lady Luck',
                className: 'title'
            }
        ],
        artist: [

            {
                type: 'badge',
                content: 'New',
                className: 'new'
            },
            {
                type: 'text',
                content: 'Nature TV',
                className: 'artist'
            }
        ],
        album: [
            {
                type: 'text',
                content: 'Lady Luck EP',
                className: 'album'
            }
        ],
        duration: "3:33"
    },
    {
        title: [
            {
                type: 'text',
                content: 'Alrighty Aphrodite',
                className: 'title'
            }
        ],
        artist: [
            {
                type: 'text',
                content: 'Peach Pit',
                className: 'artist'
            }
        ],
        album: [
            {
                type: 'text',
                content: 'Being So Normal',
                className: 'album'
            }
        ],
        duration: "3:28"
    },
    {
        title: [
            {
                type: 'text',
                content: 'The Less I Know The Better',
                className: 'title'
            }
        ],
        artist: [
            {
                type: 'text',
                content: 'Tame Impala',
                className: 'artist'
            }
        ],
        album: [
            {
                type: 'text',
                content: 'Currents',
                className: 'album'
            }
        ],
        duration: "3:39"
    },
    {
        title: [
            {
                type: 'text',
                content: 'Save a Prayer (2009 Remaster)',
                className: 'title'
            }
        ],
        artist: [
            {
                type: 'text',
                content: 'Duran Duran',
                className: 'artist'
            }
        ],
        album: [
            {
                type: 'text',
                content: "Rio (Collector's Edition)",
                className: 'album'
            },
            {
                type: 'badge',
                content: 'Explicit',
                className: 'explicit'
            }
        ],
        duration: "12:00:37"
    },
    {
        title: [
            {
                type: 'text',
                content: "Ladies Don't Play Guitar",
                className: 'title'
            }
        ],
        artist: [
            {
                type: 'text',
                content: 'Tennis',
                className: 'artist'
            }
        ],
        album: [
            {
                type: 'text',
                content: 'Yours Conditionally',
                className: 'album'
            }
        ],
        duration: "13:29"
    }
]

type playlistInfo = {
    type: 'playlist'
    name: string;
    numTracks: number;
    duration: string;
    creationDate?: string;
    imageSrc?: string;
}

type albumInfo = {
    type: 'album';
    name: string;
    numTracks: number;
    duration: string;
    releaseDate?: string;
    genre?: string;
    imageSrc?: string;
}

type artistInfo = {
    type: 'artist';
    name: string;
    numTracks: number;
    numAlbums: number;
    genre?: string;
    imageSrc?: string;
}

export type listInfo = playlistInfo | albumInfo | artistInfo;

type trackInfo = {
    alternateTitle?: string;
    releaseDate?: string;
    genre?: string;
    imageSrc?: string;
    videoSrc?: string;
}

type text = {
    type: 'text';
    content: string;            //text to display
    link?: string;              //link to open on click
    externalLink?: boolean;     //open link in new tab
    className?: string;         //classes to apply to the span that contains the text
    style?: CSSProperties;      //styles to apply to the span that contains the text
}

type badge = {
    type: 'badge';
    content: string;            //text to display
    className?: string;         //classes to apply to the span that contains the text
    style?: CSSProperties;      //styles to apply to the span that contains the text
}

export type track = {
    title: playerText[];
    artist: playerText[];
    album: playerText[];
    duration: string;
    src?: string;
    imageSrc?: string;
    meta?: trackInfo;
}

type playerText = text | badge;

const Text = ({ textArray }: { textArray: playerText[] }) => {
    return (
        <>
            {
                textArray.map((text, index) =>
                    text.type === 'badge'
                    ?   <span key={"badge-" + index} className={"text badge " + text.className} style={text.style}>{text.content}</span>
                    :   <span key={"text-" + index} className={"text pure " + text.className} style={text.style}>
                            {
                                text.link
                                ?   <a href={text.link} target={text.externalLink ? "_blank" : "_self"} rel={text.externalLink ? "noopener noreferrer" : ""}>{text.content}</a>
                                :   text.content
                            }
                        </span>)
            }
        </>
    )
}

export const ListInfoCard = ({ track, info }: { track: track, info: listInfo }) => {
    return (
        <div className="lt-info-card">
            <div className="lt-info-panel">
                <div className="lt-info-title">
                    <h1 className="text lt-info-title-h1">
                        {
                            info.type === "playlist"
                            ?   <span className="text pure">{info.name}</span>
                            :   info.type === "album"
                                ?   <Text textArray={track.album} />
                                :   <Text textArray={track.artist} />
                        }
                    </h1>
                </div>
                {
                    info.type === "playlist"
                    ?   info.creationDate
                        ?   <div className="lt-info-stats">
                                <span className="text pure">Created on {info.creationDate}</span>
                            </div>
                        :   null
                    :   info.type === "artist"
                        ?   <div className="lt-info-stats">
                                <span className="text pure">{info.genre}</span>
                            </div>
                        :   <div className="lt-info-stats">
                                <span className="text pure">{info.releaseDate}</span>
                                <span className="cdot">·</span>
                                <span className="text pure">{info.genre}</span>
                            </div>
                }
                <div className="lt-info-stats">
                    <span className="text number">{info.numTracks} tracks</span>
                    <span className="cdot number">·</span>
                    <span className="text pure number">{info.type === "artist" ? info.numAlbums : info.duration}</span>
                </div>
            </div>
            {
                info?.imageSrc || track?.imageSrc
                ?   <div className="lt-info-img-cont">
                        <img className="lt-info-img" src={info.imageSrc??track.imageSrc} alt="list image" />
                    </div>
                :   <div className="lt-info-art-placeholder-cont">
                        <div className="lt-info-placeholder">
                            <span>
                                <CgMusicNote className="lt-info-placeholder-icon" />
                            </span>
                        </div>
                    </div>
            }       
        </div>
    )
}

export const ListControls = ({ muted = false, playing = false, nextCallback, prevCallback, playCallback, muteCallback }: { track: track, muted?: boolean, playing?: boolean, noControls?: boolean, nextCallback?: () => void, prevCallback?: () => void, playCallback?: (play: boolean) => void, muteCallback?: (mute: boolean) => void }) => {
    return (
        <div className="controller-panel">
            <button className="btn mute-btn btn-primary" onClick={() => muteCallback && muteCallback(!muted)}>
                {
                    muted 
                    ?   <HiMiniSpeakerXMark className="action-icon mute-icon" />
                    :   <HiMiniSpeakerWave className="action-icon unmute-icon" />
                }   
            </button>
            <button className="btn back-btn btn-primary" onClick={prevCallback}>
                <RiSkipBackMiniFill className="action-icon prev-icon" />
            </button>
            <button className="btn forward-btn btn-primary" onClick={nextCallback}>
                <RiSkipForwardMiniFill className="action-icon next-icon" />
            </button>
            <button className="btn play-btn" onClick={() => playCallback && playCallback(!playing)}>
                {
                    playing 
                    ?   <HiOutlinePauseCircle className="action-icon pause-icon" />
                    :   <HiPlayCircle className="action-icon play-icon" />
                }
            </button>
        </div>
    )
}

export const ListHeader = ({ info = placeholderListInfo, track, muted = false, playing = false, noControls = false, snapTo = "large", nextCallback, prevCallback, playCallback, muteCallback, children }: { info: listInfo, track: track, muted?: boolean, playing?: boolean, noControls?: boolean, snapTo?: string, nextCallback?: () => void, prevCallback?: () => void, playCallback?: (play: boolean) => void, muteCallback?: (mute: boolean) => void, children?: React.ReactNode }) => {
    const height = snapTo === "tiny" ? "92px" : (snapTo === "small" ? "11.65rem" : (snapTo === "medium" ? "16rem" : (snapTo === "large" ? "21.35rem" : snapTo)));
    return (
        <div className="list-header" style={{ maxHeight: height, height: height }}>
            {
                children 
                ?   <div className="lh-children-cont">
                        {children}
                    </div>
                :   <div className="lh-children-cont lh-listinfocard-cont">
                        <ListInfoCard track={track} info={info} />
                    </div>
            }
            {
                noControls
                ?   null
                :   <ListControls track={track} muted={muted} playing={playing} nextCallback={nextCallback} prevCallback={prevCallback} playCallback={playCallback} muteCallback={muteCallback} />
            }
        </div>
    );
}

const Track = ({ track, trackNumber, selected = false, playIcon = true, onClick }: { track: track, trackNumber?: number, selected?: boolean, playIcon?: boolean, onClick?: () => void }) => {
    return (
        <div className={"track " + (selected ? "selected" : "")} onClick={onClick}>
            <div className="track-number">
                {
                    selected
                    ?   playIcon
                        ?   <HiMiniPlay className="action-icon sel" />
                        :   <HiMiniPause className="action-icon sel" />
                    :   trackNumber
                        ?   <>
                                <span className="text number list-number">{trackNumber}</span>
                                <HiMiniPlay className="action-icon" />
                            </>
                        :   <HiMiniPlay className="action-icon" />
                }
            </div>
            <div className="info-cont">
                <div className="main-info-cont">
                    <div className="title-cont">
                        <Text textArray={track.title} />
                    </div>
                    <div className="meta-cont">
                        <Text textArray={track.artist} />
                        <span className="cdot">·</span>
                        <Text textArray={track.album} />
                    </div>
                </div>
                <div className="lg-meta-cont">
                    <div className="meta-artist">
                        <Text textArray={track.artist} />
                    </div>
                </div>
                <div className="lg-meta-cont">
                    <div className="meta-album">
                        <Text textArray={track.album} />
                    </div>
                </div>
            </div>
            <div className="duration-cont">
                <span className="text pure number">{track.duration}</span>
            </div>
        </div>
    )
}

// TODO: Make tracks and listInfo mandatory props
export const ListPlayer = ({ tracks = testTracks, listInfo = testListInfo, prevBufferTime = 1500, playerMode, noControls = false, noHeader = false, loop = false, continueOn=false, kbdShortcuts=false, playCallback, pauseCallback, muteCallback, children }: { tracks?: track[], listInfo?: listInfo, prevBufferTime?: number, playerMode?: string, noControls?: boolean, noHeader?: boolean, loop?: boolean, continueOn?: boolean, kbdShortcuts?: boolean, playCallback?: (trackNumber: number, resume: boolean) => void, pauseCallback?: () => void, muteCallback?: (mute: boolean) => void, children?: React.ReactNode }) => {
    const [timerTriggerFlag, setTimerTriggerFlag] = useState(false);

    const { selectedTrack, setSelectedTrack, isPlaying, setIsPlaying, isMuted, setIsMuted } = useContext(ListPlayerContext);

    const listBodyRef = useRef<HTMLDivElement>(null);
    const allowPrevious = useRef(true);
    const allowScrollIntoView = useRef(true);

    console.log("selectedTrack: ", selectedTrack)

    const play = (resume = true) => {
        setIsPlaying(true);
        playCallback && playCallback(selectedTrack, resume);

        if (!resume) {
            allowPrevious.current = true;
            setTimerTriggerFlag(!timerTriggerFlag);
        }
    }

    const pause = () => {
        setIsPlaying(false);
        pauseCallback && pauseCallback();
    }

    const mute = (mute: boolean) => {
        setIsMuted(mute);
        muteCallback && muteCallback(mute);
    }

    const playPause = (triggerPlay: boolean) => {
        if (selectedTrack === -1) {
            triggerPlay ? setSelectedTrack(0) : null;
        }
        else {
            triggerPlay ? play() : pause();
        }
    }

    const handleTrackClick = (index: number) => {
        index === selectedTrack 
        ?   playPause(!isPlaying) 
        :   allowScrollIntoView.current = false, setSelectedTrack(index);
    }

    const handlePreviousClick = () => {
        allowPrevious.current || !isPlaying 
        ?   (!loop)
            ?   selectedTrack === 0 
                ?   null
                :   setSelectedTrack(selectedTrack - 1)
            :   setSelectedTrack((selectedTrack - 1 + tracks.length) % tracks.length) 
        :   play(false)
    }

    const handleNextClick = () => {
        (!loop) && selectedTrack >= tracks.length - 1
        ?   continueOn
            ?   setSelectedTrack((selectedTrack + 1))
            :   null
        :   setSelectedTrack((selectedTrack + 1) % tracks.length)
    }

    const scrollTrackIntoView = (index: number) => {
        const track = listBodyRef.current?.children[index] as HTMLDivElement | null;
        track?.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    useEffect(() => {
        if (kbdShortcuts === false) return;
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === " ") {
                event.preventDefault();
                playPause(!isPlaying);
            }
            else if (event.key === "ArrowLeft") {
                event.preventDefault();
                handlePreviousClick();
            }
            else if (event.key === "ArrowRight") {
                event.preventDefault();
                handleNextClick();
            }
        }

        document.addEventListener("keydown", handleKeyDown);

        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isPlaying, selectedTrack, kbdShortcuts]);

    useEffect(() => {
        if (selectedTrack === -1) return;
        allowScrollIntoView.current && !(playerMode === "tinyplayer" || playerMode === "miniplayer") && scrollTrackIntoView(selectedTrack);
        allowScrollIntoView.current = true;
        play(false);
    }, [selectedTrack]);

    useEffect(() => {
        if (isPlaying) {
            const timer = setTimeout(() => {
                allowPrevious.current = false;
            }, prevBufferTime);

            return () => clearTimeout(timer);
        }
    }, [timerTriggerFlag, prevBufferTime]);

    return (
        <>
            <div className="list-player" style={playerMode === "tinyplayer" ? {maxHeight: "92px", maxWidth: "315px"} : (playerMode === "miniplayer" ? {maxHeight: "92px", maxWidth: "100%"} : {maxHeight: "100%", maxWidth: "100%"}) }>
                {
                    noHeader
                        ?   null
                        :   <ListHeader info={listInfo} track={tracks[selectedTrack === -1 ? 0 : selectedTrack]} snapTo={playerMode === "tiny" ? "tiny" : (playerMode === "small" ? "small" : (playerMode === "medium" ? "medium" : (playerMode === "large" ? "large" : (playerMode === undefined ? undefined : playerMode)))) } noControls={noControls} muted={isMuted} playing={isPlaying} muteCallback={mute} playCallback={playPause} nextCallback={handleNextClick} prevCallback={handlePreviousClick}>
                                {children}
                            </ListHeader>
                }
                <div ref={listBodyRef} className="list-body">
                    {
                        tracks.map((track, index) => <Track key={"track-" + index} track={track} trackNumber={index + 1} onClick={() => handleTrackClick(index)} selected={index === selectedTrack} playIcon={!isPlaying || index !== selectedTrack} />)
                    }
                </div>
            </div>
        </>
    )
}