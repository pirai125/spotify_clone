import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import React from "react";
export default function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-2 ">
          <img
            onClick={() => navigate(-1)}
            src={assets.arrow_left}
            alt=""
            className="w-8 bg-black p-2 rounded-2xl "
          />
          <img
            onClick={() => navigate(1)}
            src={assets.arrow_right}
            alt=""
            className="w-8 bg-black p-2 rounded-2xl"
          />
        </div>
        <div className="flex gap-3">
          <p className="text-black bg-white px-4 py-1 rounded-2xl font-semibold">
            Explore Premium
          </p>
          <p className="bg-black text-white px-3 py-1 rounded-2xl font-semibold">
            Install App
          </p>
          <p className="bg-green-800 w-7 h-7 flex items-center justify-center rounded-full">
            P
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <button className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">
          All
        </button>
        <button className="bg-black px-4 py-1 rounded-2xl cursor-pointer">
          Music
        </button>
        <button className="bg-black px-4 py-1 rounded-2xl cursor-pointer">
          Podcast
        </button>
      </div>
    </>
  );
}
