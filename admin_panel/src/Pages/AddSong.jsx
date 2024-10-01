import { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { url } from "../App";
import { toast } from "react-toastify";
export default function AddSong() {
  const [song, setSong] = useState(false);
  const [image, setImage] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [album, setAlbum] = useState("none");
  const [loading, setLoading] = useState(false);
  const [albumData, setAlbumData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("desc", desc);
      formData.append("audio", song);
      formData.append("image", image);
      formData.append("album", album);

      const response = await axios.post(`${url}/api/song/add`, formData);
      if (response.data.success) {
        toast.success("Song added");
        setName("");
        setDesc("");
        setImage(false);
        setSong(false);
        setAlbum("none");
      } else {
        toast.error("something wrong");
      }
    } catch (error) {
      toast.error("error occurs");
    }

    setLoading(false);
  };

  const loadAlbumData = async () => {
    try {
      const response = axios.get(`${url}/api/album/list`);
      if ((await response).data.success) {
        setAlbumData((await response).data.albums);
      } else {
        toast.error("Unable to fetch the Albums data");
      }
    } catch (error) {
      toast.error("Error occur");
    }
  };

  useEffect(() => {
    loadAlbumData();
  }, []);
  return loading ? (
    <div className="grid place-items-center min-h-[80vh]">
      <div className="size-24 place-self-center border-4 border-gray-400 border-t-green-600 rounded-full animate-spin"></div>
    </div>
  ) : (
    <>
      <p className="font-medium text-2xl ml-6 mb-4">Add Song</p>
      <form
        className="flex flex-col items-start font-semibold gap-8 text-gray-600 ml-6"
        onSubmit={handleSubmit}
      >
        <div className="flex gap-8">
          <div className=" flex flex-col gap-4">
            <p>Upload song</p>
            <input
              type="file"
              accept="audio/*"
              id="song"
              hidden
              onChange={(e) => setSong(e.target.files[0])}
            />
            <label htmlFor="song">
              <img
                src={song ? assets.upload_added : assets.upload_song}
                alt=""
                className="w-24 cursor-pointer"
              />
            </label>
          </div>
          <div
            className=" flex flex-col gap-4
        "
          >
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
          <p>Song Name</p>
          <input
            required
            type="text"
            placeholder="Enter a song name"
            className="bg-transparent outline-green-600 p-2.5 w-[max(40vw,250px)] border-2 border-gray-400"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>Song Description</p>
          <input
            required
            type="text"
            placeholder="Enter a song Description"
            className="bg-transparent outline-green-600 p-2.5 w-[max(40vw,250px)] border-2 border-gray-400"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <p>Album</p>
          <select
            className="bg-transparent outline-green-600  border-2 border-gray-400 w-[140px] p-2"
            onChange={(e) => setAlbum(e.target.value)}
          >
            <option value="none">None</option>
            {albumData.map((item, index) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
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
