import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { url } from "../App";

export default function ListSong() {
  const [data, setData] = useState([]);
  const fetchSongs = async () => {
    try {
      const response = await axios.get(`${url}/api/song/list`);
      if (response.data.success) {
        setData(response.data.songs);
      }
    } catch (error) {
      toast.error("Error occur");
    }
  };

  const removeSong = async (id) => {
    const response = await axios.post(`${url}/api/song/remove`, { id });
    try {
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchSongs();
      }
    } catch (error) {
      toast.error(response.data.message);
    }
  };
  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <div className="ml-6">
      <p className="font-medium text-2xl mb-8">All Songs</p>
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="w-full border-separate border-spacing-0 border border-gray-300">
          <thead className="bg-green-600 text-white ">
            <tr className="text-md font-medium ">
              <th className="col">Image</th>
              <th className="col">Name</th>
              <th className="col">Album</th>
              <th className="col">Duration</th>
              <th className="col">Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((song, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-100 text-center "
              >
                <td>
                  <img
                    src={song.image}
                    className="size-16 object-cover rounded-md shadow-md mx-auto my-2"
                    alt=""
                  />
                </td>
                <td className="col">{song.name}</td>
                <td className="col">{song.album}</td>
                <td className="col">{song.duration}</td>
                <td className="col">
                  <button
                    onClick={() => removeSong(song._id)}
                    className="bg-red-600 hover:bg-red-700 active:bg-red-500 text-white font-semibold py-1 px-3 rounded-lg shadow-md transition duration-300"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
