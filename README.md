>[!WARNING]
>This package is still in development and is not yet ready for production use.

<p align="center">
  <img width="100%" src="https://github.com/bouzidanas/react-playlist-player/assets/25779130/5d0bdc8f-dab0-4b3d-9ddf-10f310e64246"/>
</p>

# <img src='https://raw.githubusercontent.com/bouzidanas/react-playlist-player/master/public/logo.svg' width='22'> react-playlist-player [![Static Badge](https://img.shields.io/badge/Demo-415a77?style=for-the-badge)](https://react-playlist-player.vercel.app/)

A flexible playlist react component

## Description
This package centers around the ListPlayer component which is a react component that provides a user interface to control playback of a list of media items. 

ListPlayer is fully responsive, and will, by default, adapt to the size of its container element. It also comes with several built-in sizes that the component can "snap" to or smoothly switched between. 

The main reason behind not including some form of media player is to avoid limiting the use cases to those attached to specific media types or sources. A playlist can be a list of videos, a list of songs, a list of sound clips, or a mix of everything, for example. 

Another reason is that developers may prefer to use their own media player component, or may want to use a different media player component for different media types.

ListPlayer also has a headless mode where only the interactive playlist is presented; the included playback controls (play/pause, prev/next, mute/unmute) are removed. This allows developers to use their own separate playback controls. This allows for more flexibility in the design of the user interface. Many sites for example, have a fixed playback control bar at the bottom of the page, and a separate playlist component elsewhere on the page.

## Installation

This package is not yet published to npm. You can install it directly from GitHub using the following command:

```bash
npm install bouzidanas/react-playlist-player
```
>[!NOTE]
>I am currently in the process of transitioning from using tailwindcss to pure css. 

The current version of the package uses tailwindcss. To get the components to appear properly, you need to have tailwind installed in the project where you will be using react-playlist-player components. See [tailwindCSS documentation](https://tailwindcss.com/docs/installation) for installation instructions. 

After installing tailwindCSS, you need to add the following string to the content array in your projects `tailwind.config.js` file:
```js
"./node_modules/react-playlist-player/**/*.{js,ts,jsx,tsx}"
```
This will allow tailwind to scan the react-playlist-player components for classes that you can use in your project. Your `tailwind.config.js` file should look something like this:

```diff
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
+    "./node_modules/react-playlist-player/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Usage

Below is a basic skeleton of how to use the ListPlayer component. 

```tsx
import { useState } from 'react';
import { ListPlayer } from './ListPlayer'
import { ListPlayerContext } from './ListPlayerContext';

// The following test object has type ListInfo which is defined in the ListPlayer file
const testListInfo = {}; // object needed to populate the playlist header with

// The following test array has type Track which is defined in the ListPlayer file
const testTracks = [...]; // array of track objects needed populate the playlist rows with

function App() {
  const [selectedTrack, setSelectedTrack] = useState(-1);   // -1 means no track is selected
  const [isPlaying, setIsPlaying] = useState(false);        // play/pause
  const [isMuted, setIsMuted] = useState(false);            // mute/unmute

  return (
    <ListPlayerContext.Provider value={{selectedTrack, setSelectedTrack, isPlaying, setIsPlaying, isMuted, setIsMuted}}>
      <div className='container-for-sizing-player'>
        <ListPlayer 
          tracks={testTracks} 
          listInfo={testListInfo}
        />
      </div>
    </ListPlayerContext.Provider>
  )
}
```
In the example above, `<ListPlayer>` is wrapped in a `<ListPlayerContext.Provider>` component. This is necessary for the `<ListPlayer>` component to work properly. The `<ListPlayer>` component is designed to share context with components external to it. This allows the developer to synchronize the state of the `<ListPlayer>` component with other components such as a media player component. In general, it allows the application to control and respond to changes in the `<ListPlayer>` component and vice versa.

The `<ListPlayer>` component responds to changes in the three shared context variables: `selectedTrack`, `isPlaying`, and `isMuted`. If the value of selectedTrack is `-1`, this means no track is selected. This is usually the case when the playlist is first rendered. If you change the value of selectedTrack to a valid index, the playlist will automatically scroll to that track and change the `isPlaying` state. Thus, the `isPlaying` state variable can be used to trigger pausing and playing of the media item. 


### Example: Responding to ListPlayer via changes in shared context variables

```tsx
import { useState } from 'react';
import { ListPlayer } from './ListPlayer'
import { ListPlayerContext } from './ListPlayerContext';

const testListInfo = {/*...*/};

const testTracks = [/*...*/]; 

function App() {
  const [selectedTrack, setSelectedTrack] = useState(-1);   // -1 means no track is selected
  const [isPlaying, setIsPlaying] = useState(false);        // play/pause
  const [isMuted, setIsMuted] = useState(false);            // mute/unmute

  const audioRef = useRef<HTMLAudioElement>(null);

  const audioSrcs = ["/audio/Sos.mp3", "/audio/Fields of Blue.mp3", "/audio/Forbidden Doors.mp3", "/audio/Show Me How.mp3", "/audio/I Dont Know You.mp3"];

  // The following handler is needed only for the case where the
  // ListPlayer is requesting the current track to be restarted
  const handleOnPlay = (index:number, resume:boolean) => {
    if(index === selectedTrack && !resume) {
      audioRef.current?.load();
      audioRef.current?.play();
    }
  }

  useEffect(() => {
    if(audioRef.current) {
      if(isPlaying) {
        audioRef.current?.play();
      } else {
        audioRef.current?.pause();
      }
    }
  }, [isPlaying, selectedTrack]);

  return (
    <ListPlayerContext.Provider value={{selectedTrack, setSelectedTrack, isPlaying, setIsPlaying, isMuted, setIsMuted}}>
      <div className='container-for-sizing-player'>
        <ListPlayer  
          tracks={testTracks} 
          listInfo={testListInfo} 
          playCallback={handleOnPlay} 
        />
      </div>
      <audio 
        ref={audioRef} 
        src={audioSrcs[selectedTrack]}
        muted={isMuted} 
        onEnded={() => {setSelectedTrack(selectedTrack + 1)}}
      />
    </ListPlayerContext.Provider>
  )
}

```

Alternatively, if `<ListPlayer>` is given a `playCallback` function, it will call that function with the index of the selected track and a flag indicating whether to resume playback or start playback from the beginning. You can also give `<ListPlayer>` a `pauseCallback` function that will be called when playback should be paused. Finally, there is also a `muteCallback` function that is called when the mute/unmute button is clicked.

### Example: Responding to ListPlayer via callbacks

```tsx
import { useState } from 'react';
import { ListPlayer } from './ListPlayer'
import { ListPlayerContext } from './ListPlayerContext';

const testListInfo = {/*...*/};

const testTracks = [/*...*/]; 

function App() {
  const [selectedTrack, setSelectedTrack] = useState(-1);   // -1 means no track is selected
  const [isPlaying, setIsPlaying] = useState(false);        // play/pause
  const [isMuted, setIsMuted] = useState(false);            // mute/unmute

  const audioRef = useRef<HTMLAudioElement>(null);

  const audioSrcs = ["/audio/Sos.mp3", "/audio/Fields of Blue.mp3", "/audio/Forbidden Doors.mp3", "/audio/Show Me How.mp3", "/audio/I Dont Know You.mp3"];

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

  return (
    <ListPlayerContext.Provider value={{selectedTrack, setSelectedTrack, isPlaying, setIsPlaying, isMuted, setIsMuted}}>
      <div className='container-for-sizing-player'>
        <ListPlayer  
          tracks={testTracks} 
          listInfo={testListInfo} 
          playCallback={handleOnPlay} 
          pauseCallback={handleOnPause}
        />
      </div>
      <audio 
        ref={audioRef} 
        src={audioSrcs[selectedTrack]}
        muted={isMuted} 
        onEnded={() => {setSelectedTrack(selectedTrack + 1)}}
      />
    </ListPlayerContext.Provider>
  )
}

```

The current recommended approach is to have the parent app respond to the ListPlayer using the callbacks and to use the shared state variables to control the ListPlayer. In regards to the latter, just remember that when you change any of the state variables at the top level, the ListPlayer will respond to reflect those changes. However, the ListPlayer will not in turn call the callbacks (since that would be redundant and also because the "command" didnt come directly from the user interacting with ListPlayer elements...like clicking the play button). So you have to directly perform the actions that the callbacks would have performed (if that is desired behavior).

### Data props
ListPlayer has two props that are used to populate the playlist: `tracks` and `listInfo`. The `tracks` prop is an array of objects that contain information about each track. The `listInfo` prop is an object that contains information about the playlist as a whole. Both of these props are optional only to allow easier testing (if not provided, then test data is used). In practice, you will need to provide both props.

#### `tracks` prop

The `tracks` prop is an array of objects that contain information about each track. The `track` type is defined (in `ListPlayer.tsx`) as follows:

```ts
type track = {
    title: playerText[];       // title of track
    artist: playerText[];      // artist of track
    album: playerText[];       // album of track
    duration: string;          // duration of track
    src?: string;              // audio url or path
    imageSrc?: string;         // album cover image url or path
    meta?: trackInfo;          // additional track info
}
```
The `title`, `artist`, and `album` properties are arrays of `playerText` objects (to differentiate regular text from text that will be treated as badges). The `playerText` type is defined as follows:

```ts
type playerText = text | badge;

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
```

##### Example: Track array containing one track
  
```ts
[
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
        content: '&'
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
  }
]
```

#### `listInfo` prop

The `listInfo` prop is an object that contains information about the playlist as a whole. This information will be displayed in the header of the playlist.
The `ListInfo` type is defined (in `ListPlayer.tsx`) as follows:

```ts
type listInfo = playlistInfo | albumInfo | artistInfo;

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
```

##### Example: Playlist info object

```ts
{
  type: 'playlist',
  name: 'My Playlist',
  numTracks: 1,
  duration: '3:37',
  creationDate: '2021-08-01',
  imageSrc: '/images/playlist.jpg'
}
```

## Additional Features

An optional feature of `<ListPlayer>` is the ability to replace the default header with a custom header. This is done by passing a component as a child of `<ListPlayer>`. The component will be rendered in place of the default header. Note that you can embed your media player component in your custom header component although it is not necessary.

Another optional feature is the ability to remove the playback controls from the header. This is done by passing the `noControls` prop to `<ListPlayer>`. This is useful if you want to use your own playback controls. 

Finally, there is a headless mode where only the playlist is rendered. This is done by passing the `noHeader` prop to `<ListPlayer>`. This is useful if you want to keep the playback controls in a separate location from the playlist.

## Demo

>[!NOTE]
>The tracks used in the demo are protected by copywrite. The audio files are omitted from the repository and the demo site. You can run the demo locally by cloning the repository and adding your own audio files to the `public/audio` folder. Make sure to also add the file names to the `audioSrcs` array if you are using the example code from the previous section.

[![Static Badge](https://img.shields.io/badge/Demo-415a77?style=for-the-badge)](https://react-playlist-player.vercel.app/)   :arrow_left: *(Click here to see a demo of the ListPlayer component)*


## License

[![Static Badge](https://img.shields.io/badge/License-MIT-415a77?style=for-the-badge)](https://github.com/bouzidanas/react-playlist-player/blob/master/LICENSE)
