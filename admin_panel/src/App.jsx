import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import AddAlbum from "./Pages/AddAlbum";
import ListAlbum from "./Pages/ListAlbum";
import AddSong from "./Pages/AddSong";
import ListSong from "./Pages/ListSong";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";

export const url = "https://spotify-clone-back-end.vercel.app";
export default function App() {
  return (
    <div className="flex items-start min-h-screen">
      <ToastContainer />
      <Sidebar />

      <div className="flex-1 h-screen overflow-y-scroll bg-[#F3FFF7] ">
        <Navbar />
        <div className="pt-8 pl-5 sm:pt-12 sm:pl-12 "></div>
        <Routes>
          <Route path="add-song" element={<AddSong />} />
          <Route path="add-album" element={<AddAlbum />} />
          <Route path="list-song" element={<ListSong />} />
          <Route path="list-album" element={<ListAlbum />} />
        </Routes>
      </div>
    </div>
  );
}
