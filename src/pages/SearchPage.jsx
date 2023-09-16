import { useEffect, useState } from "react";
import { Search } from "../components/Search";
import {Songs} from "../components/Songs";
import { getSongs } from "../services/api-client";
import { Player } from "../components/Player";
export const SearchPage = ()=>{
  const [allSongs,setSongs]=useState([]);
  const [flag,setFlag] = useState(false);
  const [song, setPlayerSong] = useState(null);
  
 // Component life Cycle
  useEffect(()=>{
    loadSongs();
  },[]);
  // []=> Component Mount
  // __=> Component Update
  // [], Fn Return => Component Unmount
const loadSongs = async()=>{
 setSongs (await getSongs('bollywood trending'));
}

const togglePlayer =(flag,songarg)=>{

     setPlayerSong(songarg);
     setFlag(flag);
}
  const getArtistName =async (artistName)=>{
      console.log('Rec Artist Name',artistName);
      setSongs (await getSongs(artistName));
  }
  const jsx = <>
     <Search fn={getArtistName} />
       <Songs fn={togglePlayer} allSongs ={allSongs}/>
  </>
   return (
     <div className="container">
        <h1 className="alert alert-info text-center">Music Hub</h1>
      
        {flag ? <Player fn={togglePlayer} song={song}/> :jsx }
      
     </div>
   ); 
}