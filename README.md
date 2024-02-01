>[!WARNING]
>This project's name was recently changed from react-playlist-player to react-list-player to distinguish it from another project that goes by the same name.

<p align="center">
  <img width="100%" src="https://github.com/bouzidanas/react-list-player/assets/25779130/5d0bdc8f-dab0-4b3d-9ddf-10f310e64246"/>
</p>

# <img src='https://raw.githubusercontent.com/bouzidanas/react-list-player/master/public/logo.svg' width='22'> react-list-player [![Static Badge](https://img.shields.io/badge/Demo-415a77?style=for-the-badge)](https://react-list-player.vercel.app/)

A flexible playlist react component

## Description
This package centers around the ListPlayer component which is a react component that provides a user interface to control playback of a list of media items. 

ListPlayer is fully responsive, and will, by default, adapt to the size of its container element. It also comes with several built-in sizes that the component can "snap" to or smoothly switched between. 

The main reason behind not including some form of media player is to avoid limiting the use cases to those attached to specific media types or sources. A playlist can be a list of videos, a list of songs, a list of sound clips, or a mix of everything. 

Another reason is that developers may prefer to use their own media player component, or may want to use a different media player component for different media types.

ListPlayer also has a headless mode where only the interactive playlist is presented; the included playback controls (play/pause, prev/next, mute/unmute) are removed. This allows developers to use their own separate playback controls. This allows for more flexibility in the design of the user interface. Many sites for example, have a fixed playback control bar at the bottom of the page, and a separate playlist component elsewhere on the page.

## Installation

This package has been [published to npm](https://www.npmjs.com/package/react-list-player) under the name `react-list-player`. 

You can install it using the following command:

```bash
npm install react-list-player
```

>[!NOTE]
>Versions up to and including Version 1.0.0 use TailwindCSS. If you are using a later version, you can skip the tailwindCSS installation and configuration instructions.

### TailwindCSS installation and configuration
Some earlier versions of this package use TailwindCSS. To get the components to appear properly, you need to have tailwind installed in the project where you will be using react-list-player components. See [tailwindCSS documentation](https://tailwindcss.com/docs/installation) for installation instructions. 

After installing tailwindCSS, you need to add the following string to the content array in your projects `tailwind.config.js` file:
```js
"./node_modules/react-list-player/**/*.{js,ts,jsx,tsx}"
```
This will allow tailwind to scan the react-list-player components for classes that you can use in your project. Your `tailwind.config.js` file should look something like this:

```diff
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
+    "./node_modules/react-list-player/**/*.{js,ts,jsx,tsx}",
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
import { ListPlayer, ListPlayerContext } from 'react-list-player';

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
import { ListPlayer, ListPlayerContext } from 'react-list-player';

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

### Example: Responding to ListPlayer via callback functions

```tsx
import { useState } from 'react';
import { ListPlayer, ListPlayerContext } from 'react-list-player';

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

Responding via callbacks (second example) is the recommended approach of the two shown above.
 
Currently, it is recommended to use callbacks when you need the parent app to respond to the ListPlayer and to use the shared state variables to have the parent app control the ListPlayer. In regards to the latter, just remember that when you change any of the state variables at the top level, the ListPlayer will respond to reflect those changes. However, the ListPlayer will not in turn call the callbacks (since that would be redundant and also because the "command" didnt come directly from the user interacting with ListPlayer elements...like clicking the play button). So you have to directly perform the actions that the callbacks would have performed (if that is desired behavior).

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

Note that there are three different playlist info types: `playlistInfo`, `albumInfo`, and `artistInfo`. This is because the playlist header can display different information depending on the type of playlist. `artistInfo` should be used for a playlist of content from same source (like a person or a studio). `albumInfo` should be used for a playlist of content from the same collection. `playlistInfo` should be used for a playlist of content from multiple sources and/or collections.

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

>[!NOTE]
>If the `listInfo` object does not have an `imageSrc` property, then the `imageSrc` property of the currently selected track will be used.
> 
>So, for example, in the case where you have a playlist of songs from different albums where each album has its own cover art, you can set the `imageSrc` property of each track to the album cover art. Then you can intentionally omit the `imageSrc` property from the `listInfo` object. This will cause the playlist header to display the cover art of the album containing the currently selected track.
>
>If the currently selected track does not have an `imageSrc` property, then the missing art image placeholder/fallback will be used.

## Additional Features

An optional feature of `<ListPlayer>` is the ability to replace the default header with a custom header. This is done by passing a component as a child of `<ListPlayer>`. The component will be rendered in place of the default header. Note that you can embed your media player component in your custom header component although it is not necessary.

Another optional feature is the ability to remove the playback controls from the header. This is done by passing the `noControls` prop to `<ListPlayer>`. This is useful if you want to use your own playback controls. 

Finally, there is a headless mode where only the playlist is rendered. This is done by passing the `noHeader` prop to `<ListPlayer>`. This is useful if you want to keep the playback controls in a separate location from the playlist.

## Demo

>[!NOTE]
>The tracks used in the demo are copyright free

[![Static Badge](https://img.shields.io/badge/Demo-415a77?style=for-the-badge)](https://react-list-player.vercel.app/)   :arrow_left: *(Click here to see a demo of the ListPlayer component)*


## Contributing

Pull requests are welcome. 
For major changes, please open an issue first to discuss what you would like to change.

>[!WARNING]
>If, for some reason, this repo is in lib-mode (it shouldnt be), you will need to make sure it is in demo-mode before you make a pull request. To do this, just run the command:
>```bash
>npm run demo
>```
>from the root directory of the repository. It is recommended that you switch to demo-mode before making changes. As a test, you can run the command `npm run dev` to launch the demo app (which will not work if in lib-mode).


## License

[![Static Badge](https://img.shields.io/badge/License-MIT-415a77?style=for-the-badge)](https://github.com/bouzidanas/react-list-player/blob/master/LICENSE)
