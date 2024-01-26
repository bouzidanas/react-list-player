import { useEffect, useRef, useState } from 'react';
import { ListPlayer, track, listInfo } from './ListPlayer'
import { ListPlayerContext } from './ListPlayerContext';

import './Demo.css'

// This is just a sample listInfo object, you can use your own
const testListInfo: listInfo = {
  type: 'playlist',
  name: 'Royalty Free Playlist',
  creationDate: "1/16/2024",
  numTracks: 10,
  duration: "24 min"
}

// This is just a sample track array, you can use your own
const testTracks: track[] = [
  {
    title: [
        {
            type: 'text',
            content: 'Smoke',
            className: 'title'
        }
    ],
    artist: [
        {
            type: 'text',
            content: 'Oleg Fedak',
            className: 'artist',
            link: 'https://pixabay.com/users/soulprodmusic-30064790/'
        }
    ],
    album: [
        {
            type: 'text',
            content: 'SoulProdMusic',
            className: 'album'
        }
    ],
    duration: "1:58",
    imageSrc: "https://cdn.pixabay.com/audio/2023/03/19/12-27-22-207_200x200.jpg"
  },
  {
      title: [
          {
              type: 'text',
              content: 'My Universe',
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
              content: 'Peter Nesterouk',
              className: 'artist',
              link: 'https://pixabay.com/users/nesterouk-34392616/'
          }
      ],
      album: [
          {
              type: 'text',
              content: 'Nesterouk',
              className: 'album'
          }
      ],
      duration: "2:27",
      imageSrc: "https://cdn.pixabay.com/audio/2023/04/24/09-30-22-297_200x200.jpg"
  },
  {
      title: [
          {
              type: 'text',
              content: 'Good Night',
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
              content: 'FASS',
              className: 'artist',
              link: 'https://pixabay.com/users/fassounds-3433550/',
          }
      ],
      album: [
          {
              type: 'text',
              content: 'FASSounds',
              className: 'album'
          }
      ],
      duration: "2:27",
      imageSrc: "https://cdn.pixabay.com/audio/2023/07/30/13-02-32-179_200x200.jpg"
  },
  {
    title: [
        {
            type: 'text',
            content: 'Tokyo Cafe',
            className: 'title'
        }
    ],
    artist: [
        {
            type: 'text',
            content: 'TVARI',
            className: 'artist'
        }
    ],
    album: [
        {
            type: 'text',
            content: 'TVARI',
            className: 'album'
        },
        {
            type: 'badge',
            content: 'E',
            className: 'explicit'
        }
    ],
    duration: "2:33",
    imageSrc: "https://cdn.pixabay.com/audio/2023/07/22/02-53-18-138_200x200.jpg"
  },
  {
      title: [
          {
              type: 'text',
              content: 'Hear Me',
              className: 'title'
          }
      ],
      artist: [
          {
              type: 'text',
              content: 'Keyframe Audio ',
              className: 'artist',
              link: 'https://pixabay.com/users/keyframe_audio-32058364/',
              externalLink: true
          }
      ],
      album: [
          {
              type: 'text',
              content: 'Seductive Chill Hip Hop Instrumental',
              className: 'album'
          }
      ],
      duration: "2:46",
      imageSrc: "https://cdn.pixabay.com/audio/2023/01/15/23-41-58-198_200x200.jpg"
  },
  {
      title: [
          {
              type: 'text',
              content: 'Baby Mandala',
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
              content: 'Praz Khanal',
              className: 'artist',
              link: 'https://pixabay.com/users/prazkhanal-24653570/'
          }
      ],
      album: [
          {
              type: 'text',
              content: 'prazkhanal',
              className: 'album'
          }
      ],
      duration: "3:11",
      imageSrc: "https://cdn.pixabay.com/audio/2023/10/03/03-34-18-650_200x200.jpg"
  },
  {
      title: [
          {
              type: 'text',
              content: 'Midnight Forest',
              className: 'title'
          }
      ],
      artist: [
          {
              type: 'text',
              content: 'Syouki Takahashi',
              className: 'artist',
              link: 'https://pixabay.com/users/syouki_takahashi-3820204/'
          }
      ],
      album: [
          {
              type: 'text',
              content: 'Royalty Free Collection',
              className: 'album'
          }
      ],
      duration: "2:48",
      imageSrc: "https://cdn.pixabay.com/audio/2024/01/05/01-14-43-61_200x200.jpg"
  },
  {
      title: [
          {
              type: 'text',
              content: 'Separation',
              className: 'title'
          }
      ],
      artist: [
          {
              type: 'text',
              content: 'William King',
              className: 'artist',
              link: 'https://pixabay.com/users/william_king-33448498/'
          }
      ],
      album: [
          {
              type: 'text',
              content: 'Royalty Free Music',
              className: 'album'
          }
      ],
      duration: "2:19",
      imageSrc: "https://cdn.pixabay.com/audio/2024/01/10/15-04-26-897_200x200.jpg"
  },
  {
      title: [
          {
              type: 'text',
              content: 'Drive Breakbeat',
              className: 'title'
          }
      ],
      artist: [
          {
              type: 'text',
              content: 'Zakhar Dziubenko',
              className: 'artist',
              link: 'https://pixabay.com/users/rockot-1947599/'
          }
      ],
      album: [
          {
              type: 'text',
              content: "Rockot",
              className: 'album'
          }
      ],
      duration: "1:49",
      imageSrc: "https://cdn.pixabay.com/audio/2023/10/24/15-08-22-671_200x200.jpg"
  },
  {
      title: [
          {
              type: 'text',
              content: "Glossy",
              className: 'title'
          }
      ],
      artist: [
          {
              type: 'text',
              content: 'Yrii Semchyshyn',
              className: 'artist',
              link: 'https://pixabay.com/users/coma-media-24399569/'
          }
      ],
      album: [
          {
              type: 'text',
              content: 'Coma Media',
              className: 'album'
          }
      ],
      duration: "1:33",
      imageSrc: "https://cdn.pixabay.com/photo/2018/07/14/22/53/currants-3538617_1280.jpg"
  }
]

const skipIntroduction = false;

export const Demo = () => {
  const [selectedTrack, setSelectedTrack] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [explanitoryText, setExplanitoryText] = useState("react-list-player");
  const [playerMode, setPlayerMode] = useState("large");
  const [forceSmallWidth, setForceSmallWidth] = useState(false);
  const [replaceHeader, setReplaceHeader] = useState(false);
  const [headLess, setHeadLess] = useState(false);
  const [intro, setIntro] = useState(!skipIntroduction);

  const audioRef = useRef<HTMLAudioElement>(null);

  const durationIncrement = 1000;
  const audioSrcs = ["/free-audio/tokyo cafe.mp3", "/free-audio/my universe.mp3", "/free-audio/smoke.mp3", "/free-audio/good night.mp3", "/free-audio/hear me.mp3", "/free-audio/baby mandala.mp3", "/free-audio/midnight forest.mp3", "/free-audio/separation.mp3", "/free-audio/drive breakbeat.mp3", "/free-audio/glossy.mp3"];

  const handleOnPlay = (index:number, resume:boolean) => {
    if(index === selectedTrack && !resume) {
      audioRef.current?.load();
      audioRef.current?.play();
    } else {
      audioRef.current?.play();
    }
  }

  const handleOnPause = () => {
    audioRef.current?.pause();
  }

  useEffect(() => {
    if(skipIntroduction || !intro ) return;

    const timer = setTimeout(() => {
      setExplanitoryText("a flexible react playlist controller");
    }, 3*durationIncrement);

    const timer1 = setTimeout(() => {
      setExplanitoryText("that is fully controllable via context ... playing track 4 now ...");
    }, 7*durationIncrement);

    const timer2 = setTimeout(() => {
      setSelectedTrack(3);
    }, 8*durationIncrement);

    const timer3 = setTimeout(() => {
      setExplanitoryText("stopping playback ...");
    }, 12*durationIncrement);

    const timer4 = setTimeout(() => {
      setIsPlaying(false);
      audioRef.current?.pause();
    }, 13*durationIncrement);

    const timer5 = setTimeout(() => {
      setExplanitoryText("ListPlayer is fully responsive, and will adapt to the size of its container");
    }, 15*durationIncrement);

    const timer5a = setTimeout(() => {
      setForceSmallWidth(true);
    }, 19*durationIncrement);

    const timer6 = setTimeout(() => {
      setExplanitoryText("but it also comes with several built-in sizes, such as this one called 'miniplayer'");
    }, 23*durationIncrement);

    const timer7 = setTimeout(() => {
      setPlayerMode("miniplayer");
    }, 25*durationIncrement);
    
    const timer7a = setTimeout(() => {
      setExplanitoryText("and an even smaller one called 'tinyplayer'");
    }, 30*durationIncrement);
    
    const timer7b = setTimeout(() => {
      setPlayerMode("tinyplayer");
    }, 31*durationIncrement);
    
    const timer8 = setTimeout(() => {
      setExplanitoryText("The player does not play media, it just provides a user interface to control playback.");
    }, 35*durationIncrement);
    
    const timer9 = setTimeout(() => {
      setForceSmallWidth(false);
      setIsPlaying(true);
      audioRef.current?.play();
      setIsMuted(true);
      setExplanitoryText("This means that you can combine it with any media player you like, such as react-player.");
    }, 40*durationIncrement);

    const timer10 = setTimeout(() => {
      setIsPlaying(false);
      audioRef.current?.pause();
      setIsMuted(false);
      setExplanitoryText("Since ListPlayer accepts a child component, you can use it to wrap your media player");
    }, 45*durationIncrement);

    const timer11 = setTimeout(() => {
      setExplanitoryText("or you can provide your own full header component to replace the default one.");
    }, 51*durationIncrement);

    const timer12 = setTimeout(() => {
      setPlayerMode("medium");
    }, 54*durationIncrement);

    const timer13 = setTimeout(() => {
      setReplaceHeader(true);
    }, 57*durationIncrement);

    const timer14 = setTimeout(() => {
      setExplanitoryText("But what if you want to put your header/controls somewhere away from the playlist?");
    }, 62*durationIncrement);

    const timer15 = setTimeout(() => {
      setExplanitoryText("You can do that too. To make the ListPlayer headless, just set the noHeader prop to true.");
    }, 68*durationIncrement);

    const timer16 = setTimeout(() => {
      setHeadLess(true);
    }, 72*durationIncrement);

    const timer17 = setTimeout(() => {
      setExplanitoryText("That's it! Feel free to play around with the ListPlayer below.");
      setReplaceHeader(false);
    }, 78*durationIncrement);

    const timer18 = setTimeout(() => {
      setExplanitoryText("react-list-player");
      setHeadLess(false);
    }, 82*durationIncrement);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer5a);
      clearTimeout(timer6);
      clearTimeout(timer7);
      clearTimeout(timer7a);
      clearTimeout(timer7b);
      clearTimeout(timer8);
      clearTimeout(timer9);
      clearTimeout(timer10);
      clearTimeout(timer11);
      clearTimeout(timer12);
      clearTimeout(timer13);
      clearTimeout(timer14);
      clearTimeout(timer15);
      clearTimeout(timer16);
      clearTimeout(timer17);
      clearTimeout(timer18);
    }
  }, [intro]);

  return (
    <ListPlayerContext.Provider value={{selectedTrack, setSelectedTrack, isPlaying, setIsPlaying, isMuted, setIsMuted}}>
      <div className="app">
        <div key={explanitoryText} className="explanitory-text" style={{animation: "fadeIn 1s ease-in-out"}}>
          {explanitoryText}
        </div>
        <div className='listplayer-cont' style={forceSmallWidth ? {paddingLeft: "20%", paddingRight: "20%"} : undefined}>
          <ListPlayer 
            tracks={testTracks} 
            listInfo={testListInfo} 
            playerMode={playerMode} 
            noControls={replaceHeader} 
            noHeader={headLess} 
            playCallback={handleOnPlay} 
            pauseCallback={handleOnPause}
            loop
            kbdShortcuts
          >
            {
              replaceHeader 
              ? <div className="custom-hdr-placeholder" style={{animation: "fadeIn 1s ease-in-out", background: "repeating-linear-gradient( 45deg, #22222255, #22222255 10px, #22222200 10px, #22222200 20px)"}}>
                  [your custom header here]
                </div>
              : undefined
            }
          </ListPlayer>
        </div>
      </div>
      <audio ref={audioRef} 
        src={selectedTrack < audioSrcs.length ? audioSrcs[selectedTrack%audioSrcs.length] : undefined}
        muted={isMuted} 
        onEnded={() => {setSelectedTrack(selectedTrack + 1)}}
      />
      <button 
        className="skip-intro" 
        onClick={() => { setExplanitoryText("react-list-player"); setPlayerMode("large"); setHeadLess(false); setReplaceHeader(false); setForceSmallWidth(false); setIntro(false);}}
        style={intro ? {animation: "fadeInUnfocused 1s ease-in-out"} : {display: "none"}}
      >
      SKIP INTRO
      </button>
    </ListPlayerContext.Provider>
  )
}
