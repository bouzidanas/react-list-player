import { useEffect, useRef, useState } from 'react';
import { ListPlayer } from './ListPlayer'
import { ListPlayerContext } from './ListPlayerContext';
import './App.css'

function App() {
  const [selectedTrack, setSelectedTrack] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const mode = useRef<string | undefined>("tiny");

  useEffect(() => {
    const timer = setTimeout(() => {
      setSelectedTrack(4);
    }, 4000);

    const timer2 = setTimeout(() => {
      setIsPlaying(false);
      mode.current = 'large';
    }
    , 6000);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    }
  }, []);

  return (
    <ListPlayerContext.Provider value={{selectedTrack, setSelectedTrack, isPlaying, setIsPlaying, isMuted, setIsMuted}}>
      <div className="App w-full h-full max-h-[90vh] flex justify-center items-center p-8">
        <ListPlayer playerMode={mode.current} />
      </div>
    </ListPlayerContext.Provider>
  )
}

export default App
