import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
export default function Sidebar() {
  return (
    <>
      <div className="min-h-screen pl-[4vw] bg-[#003A10]">
        <img
          src={assets.logo}
          className="mt-5 w-[max(10vw,100px)] hidden sm:block"
          alt=""
        />
        <img
          src={assets.logo_small}
          className="mt-5 w-[max(4vw,50px)] sm:hidden block"
          alt=""
        />
        <div className="flex gap-5 mt-10 flex-col">
          <NavLink
            to="/add-song"
            className="flex items-center gap-3 p-2 pr-(max[8vw,10px]) text-gray-500 text-sm font-medium bg-white border border-black  drop-shadow-[-4px_4px_#00FF5B]"
          >
            <img className="w-5" src={assets.add_song} alt="" />
            <p className="hidden sm:block">Add Song</p>
          </NavLink>
          <NavLink
            to="/list-song"
            className="flex items-center gap-3 p-2 pr-(max[8vw,10px]) text-gray-500 text-sm font-medium bg-white border border-black  drop-shadow-[-4px_4px_#00FF5B]"
          >
            <img className="w-5" src={assets.song_icon} alt="" />
            <p className="hidden sm:block">List Song</p>
          </NavLink>
          <NavLink
            to="/add-album"
            className="flex items-center gap-3 p-2 pr-(max[8vw,10px]) text-gray-500 text-sm font-medium bg-white border border-black  drop-shadow-[-4px_4px_#00FF5B]"
          >
            <img className="w-5" src={assets.add_album} alt="" />
            <p className="hidden sm:block">Add Album</p>
          </NavLink>
          <NavLink
            to="/list-album"
            className="flex items-center gap-3 p-2 pr-(max[8vw,10px]) text-gray-500 text-sm font-medium bg-white border border-black  drop-shadow-[-4px_4px_#00FF5B]"
          >
            <img className="w-5" src={assets.album_icon} alt="" />
            <p className="hidden sm:block">List Album</p>
          </NavLink>
        </div>
      </div>
    </>
  );
}
