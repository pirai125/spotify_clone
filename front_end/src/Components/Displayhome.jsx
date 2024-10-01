import AlbumItem from "./AlbumItem";
import Navbar from "./Navbar";
import React from "react";
import SongItem from "./SongItem";
import { useContext } from "react";
import { PlayerContext } from "../Context/PlayerContext";
export default function Displayhome() {
  const { albumsData, songsData } = useContext(PlayerContext);
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="font-bold text-2xl my-5">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((items, index) => (
            <AlbumItem
              key={index}
              image={items.image}
              name={items.name}
              desc={items.desc}
              id={items._id}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="font-bold text-2xl my-5">Today's Biggest hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((items, index) => (
            <SongItem
              key={index}
              image={items.image}
              name={items.name}
              desc={items.desc}
              id={items._id}
            />
          ))}
        </div>
      </div>
    </>
  );
}
