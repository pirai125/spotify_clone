import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[15%] flex flex-col justify-around">
        <div
          onClick={() => navigate("/")}
          className="flex items-center  gap-2 pl-8 cursor-pointer"
        >
          <img className="w-6" src={assets.home_icon} alt="home_icon" />
          <p className="font-bold">Home</p>
        </div>
        <div className="flex items-center gap-2 pl-8 cursor-pointer">
          <img className="w-6" src={assets.search_icon} alt="search_icon" />
          <p className="font-bold">Search</p>
        </div>
      </div>
      <div className="bg-[#121212] h-full rounded p-4">
        <div className=" flex items-center justify-between ">
          <div className="flex items-center gap-2">
            <img src={assets.stack_icon} alt="stack_icon" className="w-6" />
            <p>Your Library</p>
          </div>
          <div className="flex gap-3 items-center">
            <img src={assets.arrow_icon} alt="arrow_icon" className="w-6" />
            <img src={assets.plus_icon} alt="plus_icon" className="w-6" />
          </div>
        </div>

        <div className="bg-[#242424] rounded px-2 py-4 my-4  ">
          <h1 className="text-lg font-bold">Create Your first playlist</h1>
          <p className="mt-2 mb-4 font-light">it is easy we will help you</p>
          <button className="bg-white px-4 py-2 text-black  rounded-full font-bold">
            Create Playlist
          </button>
        </div>

        <div className="bg-[#242424] rounded px-2 py-4 my-4  ">
          <h1 className="text-lg font-bold">
            Lets findsome podcasts to follow
          </h1>
          <p className="mt-2 mb-4 font-light">
            We"ll keep you update on new episodes
          </p>
          <button className="bg-white px-2 py-2 text-black  rounded-full font-bold">
            Browse Prodcasts
          </button>
        </div>
      </div>
    </div>
  );
}
