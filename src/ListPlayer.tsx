import React, { CSSProperties, useContext, useEffect, useRef, useState } from "react";
import { HiMiniPlay, HiMiniPause, HiPlayCircle, HiMiniSpeakerWave, HiMiniSpeakerXMark, HiOutlinePauseCircle } from "react-icons/hi2";
import { RiSkipForwardMiniFill, RiSkipBackMiniFill } from "react-icons/ri";
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
                        ? <span key={"badge-" + index} className={"text badge " + text.className} style={text.style}>{text.content}</span>
                        : <span key={"text-" + index} className={"text pure " + text.className} style={text.style}>
                            {
                                text.link
                                    ? <a href={text.link} target={text.externalLink ? "_blank" : "_self"} rel={text.externalLink ? "noopener noreferrer" : ""}>{text.content}</a>
                                    : text.content
                            }
                        </span>)
            }
        </>
    )
}

export const ListInfoCard = ({ track, info }: { track: track, info: listInfo }) => {
    return (
        <div className="lt-info-card flex justify-between h-full min-h-fit flex-row-reverse p-4">
            <div className="lt-info-panel flex flex-col w-full min-w-[13.9rem] max-h-[30rem] flex-1 pb-20 px-3 pt-2 transition-all duration-500 ease-in-out">
                <div className="lt-info-title">
                    <h1 className="text lt-info-title-h1 text-[2rem]">
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
                        ?   <div className="lt-info-stats gap-1 flex flex-nowrap [&>span]:whitespace-nowrap">
                                <span className="text pure">Created on {info.creationDate}</span>
                            </div>
                        :   null
                    :   info.type === "artist"
                        ?   <div className="lt-info-stats gap-1 flex flex-nowrap [&>span]:whitespace-nowrap">
                                <span className="text pure">{info.genre}</span>
                            </div>
                        :   <div className="lt-info-stats gap-1 flex flex-nowrap [&>span]:whitespace-nowrap">
                                <span className="text pure">{info.releaseDate}</span>
                                <span className="cdot" style={{ fontWeight: "bold", margin: "1px" }}>·</span>
                                <span className="text pure">{info.genre}</span>
                            </div>
                }
                <div className="lt-info-stats gap-1 flex flex-nowrap [&>span]:whitespace-nowrap">
                    <span className="text number">{info.numTracks} tracks</span>
                    <span className="cdot number" style={{ fontWeight: "bold", margin: "1px" }}>·</span>
                    <span className="text pure number">{info.type === "artist" ? info.numAlbums : info.duration}</span>
                </div>
            </div>
            {
                info?.imageSrc || track?.imageSrc
                ?   <div className="lt-info-img-cont h-fit max-h-full rounded-lg overflow-hidden shadow-md aspect-square">
                        <img className="lt-info-img object-cover h-full w-[14rem]" src={info.imageSrc??track.imageSrc} alt="list image" />
                    </div>
                :   <div className="lt-info-art-placeholder-cont h-fit max-h-full rounded-lg overflow-hidden shadow-md aspect-square border-2 border-gray-300 opacity-80">
                        <div className="lt-info-placeholder h-full w-[14rem] max-w-full flex justify-center items-center text-3xl text-center p-4" style={{animation: "fadeIn 1s ease-in-out", background: "repeating-linear-gradient( 45deg, #22222266, #22222266 6px, #22222200 6px, #22222200 12px)"}}>
                            <span>
                            no cover
                            </span>
                        </div>
                    </div>
            }       
        </div>
    )
}

export const Header = ({ info = placeholderListInfo, track, muted = false, playing = false, noControls = false, snapTo = "large", nextCallback, prevCallback, playCallback, muteCallback, children }: { info: listInfo, track: track, muted?: boolean, playing?: boolean, noControls?: boolean, snapTo?: string, nextCallback?: () => void, prevCallback?: () => void, playCallback?: (play: boolean) => void, muteCallback?: (mute: boolean) => void, children?: React.ReactNode }) => {
    const height = snapTo === "tiny" ? "92px" : (snapTo === "small" ? "11.65rem" : (snapTo === "medium" ? "16rem" : (snapTo === "large" ? "21.35rem" : snapTo)));
    return (
        <div className="list-header shadow-lg relative w-full min-h-[5.75rem] overflow-hidden " style={{ maxHeight: height, height: height }}>
            {
                children 
                ?   <div className="lh-children-cont absolute w-full h-full">
                        {children}
                    </div>
                :   <div className="lh-children-cont lh-listinfocard-cont absolute w-full h-full p-[0.64rem]">
                        <ListInfoCard track={track} info={info} />
                    </div>
            }
            {
                noControls
                ?   null
                :   <div className="controller-panel absolute bottom-0 left-auto right-0 m-[0.6rem] w-fit h-fit p-2 flex justify-center items-center rounded-lg backdrop-blur-xl bg-black/10 transition-all duration-700 ease-in-out">
                        <button className="btn back-btn btn-primary mr-3 ml-2 opacity-75 hover:opacity-100 order-4" onClick={() => muteCallback && muteCallback(!muted)}>
                            {
                                muted 
                                ?   <HiMiniSpeakerXMark className="play-icon h-7 w-7" />
                                :   <HiMiniSpeakerWave className="play-icon h-7 w-7" />
                            }   
                        </button>
                        <button className="btn back-btn btn-primary opacity-75 hover:opacity-100 order-2" onClick={prevCallback}>
                            <RiSkipBackMiniFill className="play-icon h-9 w-9" />
                        </button>
                        <button className="btn forward-btn btn-primary mr-3 opacity-75 hover:opacity-100 order-3" onClick={nextCallback}>
                            <RiSkipForwardMiniFill className="play-icon h-9 w-9" />
                        </button>
                        <button className="btn play-btn mx-1 opacity-75 hover:opacity-100 order-1 " onClick={() => playCallback && playCallback(!playing)}>
                            {
                                playing 
                                ?   <HiOutlinePauseCircle className="play-icon h-14 w-14" />
                                :   <HiPlayCircle className="play-icon h-14 w-14" />
                            }
                        </button>
                    </div>
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
                        ?   <HiMiniPlay className="play-icon" style={{ display: "unset" }} />
                        :   <HiMiniPause className="play-icon" style={{ display: "unset" }} />
                    :   trackNumber
                        ?   <>
                                <span className="text number list-number">{trackNumber}</span>
                                <HiMiniPlay className="play-icon" />
                            </>
                        :   <HiMiniPlay className="play-icon" />
                }
            </div>
            <div className="info-cont">
                <div className="main-info-cont">
                    <div className="title-cont">
                        <Text textArray={track.title} />
                    </div>
                    <div className="meta-cont">
                        <Text textArray={track.artist} />
                        <span className="cdot" style={{ fontWeight: "bold", margin: "1px" }}>·</span>
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
export const ListPlayer = ({ tracks = testTracks, listInfo = testListInfo, prevBufferTime = 1500, playerMode, noControls = false, noHeader = false, playCallback, pauseCallback, muteCallback, children }: { tracks?: track[], listInfo?: listInfo, prevBufferTime?: number, playerMode?: string, noControls?: boolean, noHeader?: boolean, playCallback?: (trackNumber: number, resume: boolean) => void, pauseCallback?: () => void, muteCallback?: (mute: boolean) => void, children?: React.ReactNode }) => {
    const [timerTriggerFlag, setTimerTriggerFlag] = useState(false);

    const { selectedTrack, setSelectedTrack, isPlaying, setIsPlaying, isMuted, setIsMuted } = useContext(ListPlayerContext);

    const listBodyRef = useRef<HTMLDivElement>(null);

    const allowPrevious = useRef(true);
    const allowScrollIntoView = useRef(true);

    console.log("rendering");

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
        index === selectedTrack ? playPause(!isPlaying) : allowScrollIntoView.current = false, setSelectedTrack(index);
    }

    const handlePreviousClick = () => {
        allowPrevious.current || !isPlaying ? setSelectedTrack((selectedTrack - 1 + tracks.length) % tracks.length) : play(false)
    }

    const scrollTrackIntoView = (index: number) => {
        const track = listBodyRef.current?.children[index] as HTMLDivElement;
        track.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    useEffect(() => {
        if (selectedTrack === -1) return;
        // console.log("playing track after change in selectedTrack");
        allowScrollIntoView.current && !(playerMode === "tinyplayer" || playerMode === "miniplayer") && scrollTrackIntoView(selectedTrack);
        allowScrollIntoView.current = true;
        play(false);
    }, [selectedTrack]);

    useEffect(() => {
        // console.log("entered timer useEffect");
        if (isPlaying) {
            // console.log("useEffect: new timer");
            const timer = setTimeout(() => {
                allowPrevious.current = false;
            }, prevBufferTime);

            return () => clearTimeout(timer);
        }
    }, [timerTriggerFlag, prevBufferTime]);

    // const classNamePr = "list-player" + (playerMode === " tinyplayer" || playerMode === " miniplayer") ? playerMode : "";

    return (
        <>
            <div className="list-player" style={playerMode === "tinyplayer" ? {maxHeight: "92px", maxWidth: "315px"} : (playerMode === "miniplayer" ? {maxHeight: "92px", maxWidth: "100%"} : {maxHeight: "100%", maxWidth: "100%"}) }>
                {
                    noHeader
                        ?   null
                        :   <Header info={listInfo} track={tracks[selectedTrack === -1 ? 0 : selectedTrack]} snapTo={playerMode === "tiny" ? "tiny" : (playerMode === "small" ? "small" : (playerMode === "medium" ? "medium" : (playerMode === "large" ? "large" : (playerMode === undefined ? undefined : playerMode)))) } noControls={noControls} muted={isMuted} playing={isPlaying} muteCallback={mute} playCallback={playPause} nextCallback={() => setSelectedTrack((selectedTrack + 1) % tracks.length)} prevCallback={() => handlePreviousClick()}>
                                {children}
                            </Header>
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