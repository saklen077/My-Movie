import { useState } from "react";
import { Play, Plus } from "lucide-react";

const DummyShow = () => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="bg-gray-900 mb-[90px] pb-[90] text-white p-6 rounded-2xl max-w-4xl mx-auto md:flex md:items-start md:space-x-6">
      <img
        src="/image.png" // Replace with actual image path
        alt="Avatar: The Way of Water"
        className="w-full md:w-1/3 rounded-lg"
      />
      <div className="flex-1 mt-4 md:mt-0">
        <h2 className="text-3xl font-bold">Avatar: The Way of Water</h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {['Thriller/Mystery', 'Action', 'Adventure', 'Fantasy'].map((genre) => (
            <span key={genre} className="bg-gray-700 px-3 py-1 rounded-lg text-sm">{genre}</span>
          ))}
        </div>
        <div className="flex items-center gap-4 mt-3">
          <span className="bg-yellow-500 px-2 py-1 rounded text-black font-bold">IMDb 7.6/10</span>
          <span className="bg-red-500 px-2 py-1 rounded text-white">PG 13 (18+)</span>
          <span className="bg-green-500 px-2 py-1 rounded text-white">3h 12m</span>
        </div>
        <p className="mt-4 text-gray-300">
          Jake Sully lives with his newfound family on the extrasolar moon Pandora. {readMore && "Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home."}
          <button
            className="text-blue-400 ml-2 hover:underline"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "Show Less" : "Read More"}
          </button>
        </p>
        <div className="flex gap-4 mt-4">
          <button className="flex items-center bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500">
            <Play className="mr-2" /> Watch Trailer
          </button>
          <button className="flex items-center bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600">
            <Plus className="mr-2" /> To Watchlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default DummyShow;
