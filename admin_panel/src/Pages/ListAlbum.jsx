import axios from "axios";
import { useEffect, useState } from "react";
import { url } from "../App";
import { toast } from "react-toastify";

export default function ListAlbum() {
  const [data, setData] = useState([]);

  const fetchAlbum = async () => {
    try {
      const response = await axios.get(`${url}/api/album/list`);
      if (response.data.success) {
        setData(response.data.albums);
      }
    } catch (error) {
      toast.error("Error occur");
    }
  };

  const removeAlbum = async (id) => {
    try {
      const response = await axios.post(`${url}/api/album/remove`, { id });
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchAlbum();
      }
    } catch (error) {
      toast.error("Something went Wrong");
    }
  };

  useEffect(() => {
    fetchAlbum();
  }, []);
  return (
    <div className="ml-6">
      <p className="font-medium text-2xl mb-8">All Albums</p>
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="w-full border-separate border-spacing-0 border border-gray-300">
          <thead className="bg-green-600 text-white ">
            <tr className="text-md font-medium ">
              <th className="col">Image</th>
              <th className="col">Name</th>
              <th className="col">Description</th>
              <th className="col">Album Colour</th>
              <th className="col">Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((album, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-100 text-center "
              >
                <td>
                  <img
                    src={album.image}
                    className="size-16 object-cover rounded-md shadow-md mx-auto my-2"
                    alt=""
                  />
                </td>
                <td className="col">{album.name}</td>
                <td className="col">{album.desc}</td>
                <td className="col">
                  <input type="color" value={album.bgColour} readOnly />
                </td>
                <td className="col">
                  <button
                    onClick={() => removeAlbum(album._id)}
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
