import React, { useState } from "react";
import PlayerCard from "./PlayerCard";
import data from "data";
import { getLogo } from "utils/image";

const App = () => {
  const [team, setTeam] = useState();

  return (
    <div className="w-full h-full">
      <div className="px-6 py-5 flex flex-wrap">
        {Object.keys(data.clubs).map(key => {
          const t = data.clubs[key];
          return (
            <div
              key={key}
              onClick={() => setTeam(team === key ? null : key)}
              className={
                "inline-flex items-center ml-1 mb-1 w-12 h-12 p-2 border-2 cursor-pointer rounded-full bg-gray-300 " +
                (team === key
                  ? "border-teal-400"
                  : "border-transparent hover:bg-gray-400")
              }
            >
              <img
                src={getLogo(key)}
                alt={t.title}
                className="max-h-full max-w-full mx-auto"
              />
            </div>
          );
        })}
      </div>
      <div className="px-6 py-5 flex flex-wrap justify-center">
        {Object.keys(data.players).map(key => {
          const player = data.players[key];

          if (
            team &&
            !(player.clubs.includes(team) || player.nationalTeam === team)
          ) {
            return null;
          }

          return (
            <PlayerCard
              key={key}
              id={key}
              player={data.players[key]}
              teamId={team || player.nationalTeam}
              clubs={data.clubs}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
