import { useEffect, useState } from 'react';
import { ListPlayer } from './ListPlayer'
import { ListPlayerContext } from './ListPlayerContext';

function App() {
  const [selectedTrack, setSelectedTrack] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [explanitoryText, setExplanitoryText] = useState("React List Player");
  const [playerMode, setPlayerMode] = useState("large");
  const [forceSmallWidth, setForceSmallWidth] = useState(false);
  const [replaceHeader, setReplaceHeader] = useState(false);
  const [headLess, setHeadLess] = useState(false);

  const durationIncrement = 1000;

  useEffect(() => {
    const timer = setTimeout(() => {
      setExplanitoryText("a flexible react playlist controller");
    }, 3*durationIncrement);

    const timer1 = setTimeout(() => {
      setExplanitoryText("that is fully controllable via context ... playing track 4 now ...");
    }, 7*durationIncrement);

    const timer2 = setTimeout(() => {
      setSelectedTrack(9);
    }, 8*durationIncrement);

    const timer3 = setTimeout(() => {
      setExplanitoryText("stopping playback ...");
    }, 12*durationIncrement);

    const timer4 = setTimeout(() => {
      setIsPlaying(false);
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
    }, 33*durationIncrement);
    
    const timer9 = setTimeout(() => {
      setForceSmallWidth(false);
      setIsPlaying(true);
      setIsMuted(true);
      setExplanitoryText("This means that you can combine it with any media player you like, such as react-player.");
    }, 39*durationIncrement);

    const timer10 = setTimeout(() => {
      setIsPlaying(false);
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
      setExplanitoryText("React List Player");
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
  }, []);

  return (
    <ListPlayerContext.Provider value={{selectedTrack, setSelectedTrack, isPlaying, setIsPlaying, isMuted, setIsMuted}}>
      <div className="App w-full h-full max-h-[90vh] flex flex-col justify-center items-center p-8">
        <div key={explanitoryText} className="text-4xl text-center p-12 px-32 h-[12rem] max-w-[60%]" style={{animation: "fadeIn 1s ease-in-out"}}>
          {explanitoryText}
        </div>
        <div className='w-full h-[70%] flex justify-center items-start px-[22rem] transition-all duration-500 ease-in-out' style={forceSmallWidth ? {paddingLeft: "32rem", paddingRight: "32rem"} : undefined}>
          <ListPlayer playerMode={playerMode} noControls={replaceHeader} noHeader={headLess}>
            {
              replaceHeader 
              ? <div className="absolute w-full h-full flex justify-center items-center text-4xl text-center p-12" style={{animation: "fadeIn 1s ease-in-out", background: "repeating-linear-gradient( 45deg, #22222255, #22222255 10px, #22222200 10px, #22222200 20px)"}}>
                  [your custom header here]
                </div>
              : undefined
            }
          </ListPlayer>
        </div>
      </div>
    </ListPlayerContext.Provider>
  )
}

export default App
