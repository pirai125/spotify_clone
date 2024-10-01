import { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { url } from "../App";
import { toast } from "react-toastify";

export default function AddAlbum() {
  const [image, setImage] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [colour, setColour] = useState("#ffffff");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("desc", desc);
      formData.append("bgColour", colour);
      formData.append("image", image);

      const response = await axios.post(`${url}/api/album/add`, formData);
      if (response.data.success) {
        toast.success("Album added");
        setName("");
        setDesc("");
        setImage(false);
      }
    } catch (error) {
      console.log(error.message);
      toast.error("Something went Wrong ");
    }
    setLoading(false);
  };
  return loading ? (
    <div className="grid place-items-center min-h-[80vh]">
      <div className="size-24 place-self-center border-4 border-gray-400 border-t-green-600 rounded-full animate-spin"></div>
    </div>
  ) : (
    <>
      <p className="font-medium text-2xl ml-6 mb-4">Add Album</p>
      <form
        className="flex flex-col items-start font-semibold gap-8 text-gray-600 ml-6"
        onSubmit={handleSubmit}
      >
        <div className="flex gap-8">
          <div className=" flex flex-col gap-4">
            <p>Upload Photo</p>
            <input
              type="file"
              accept="image/*"
              id="image"
              hidden
              onChange={(e) => setImage(e.target.files[0])}
            />
            <label htmlFor="image">
              <img
                src={image ? URL.createObjectURL(image) : assets.upload_area}
                alt=""
                className="w-24 cursor-pointer"
              />
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p>Album Name</p>
          <input
            required
            type="text"
            placeholder="Enter a Album name"
            className="bg-transparent outline-green-600 p-2.5 w-[max(40vw,250px)] border-2 border-gray-400"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>Album Description</p>
          <input
            required
            type="text"
            placeholder="Enter a Album Description"
            className="bg-transparent outline-green-600 p-2.5 w-[max(40vw,250px)] border-2 border-gray-400"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <p>Background Colour</p>
          <input
            type="color"
            name=""
            id=""
            onChange={(e) => setColour(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-black text-white font-medium active:bg-slate-900 px-8 py-2 gap-2"
        >
          ADD
        </button>
      </form>
    </>
  );
}
