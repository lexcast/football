import React, { useState } from "react";
import PlayerCard from "./PlayerCard";
import data from "data";

const App = () => {
  const [grid, setGrid] = useState(Object.keys(data.grids)[0]);

  return (
    <div className="w-screen h-screen bg-gray-200">
      <div className="px-10 py-5">
        {Object.keys(data.grids).map(key => {
          const g = data.grids[key];
          return (
            <div
              key={key}
              onClick={() => setGrid(key)}
              className={
                "inline-flex items-center mr-2 py-2 px-3 border-2 cursor-pointer rounded-full bg-gray-300 text-gray-800 text-sm font-semibold " +
                (grid === key
                  ? "border-teal-400"
                  : "border-transparent hover:bg-gray-400")
              }
            >
              <img src={g.logo} alt={g.title} className="h-6 mr-1" />
              {g.title}
            </div>
          );
        })}
      </div>
      <div className="px-10 py-5">
        {data.grids[grid].players.map(key => {
          return (
            <PlayerCard
              key={key}
              player={data.players[key]}
              grid={data.grids[grid]}
              clubs={data.clubs}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
