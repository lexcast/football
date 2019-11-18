import React, { useState } from "react";
import PlayerCard from "./PlayerCard";
import data from "data";
import { getLogo } from "utils/image";

const App = () => {
  const [team, setTeam] = useState();

  return (
    <div className="w-full h-full">
      <div className="px-6 py-5 flex flex-wrap">
        {Object.keys(data.clubs)
          .map(key => data.clubs[key])
          .sort((a, b) => {
            const c1 = (a.country || "1") + a.title;
            const c2 = (b.country || "1") + b.title;

            return c1 > c2 ? 1 : c1 < c2 ? -1 : 0;
          })
          .map(t => {
            return (
              <div
                key={t.id}
                title={t.title}
                onClick={() => setTeam(team === t.id ? null : t.id)}
                className={
                  "inline-flex items-center ml-1 mb-1 w-12 h-12 p-2 border-2 cursor-pointer rounded-full bg-gray-300 " +
                  (team === t.id
                    ? "border-teal-400"
                    : "border-transparent hover:bg-gray-400")
                }
              >
                <img
                  src={getLogo(t.id)}
                  alt={t.title}
                  className="max-h-full max-w-full mx-auto"
                />
              </div>
            );
          })}
      </div>
      <div className="px-6 py-5 flex flex-wrap justify-center">
        {Object.keys(data.players)
          .map(key => {
            const player = data.players[key];
            player.id = key;

            return player;
          })
          .filter(
            player =>
              !team ||
              player.clubs.includes(team) ||
              player.nationalTeam === team
          )
          .sort((a, b) => {
            const pa = a.name.split(" ");
            const pb = b.name.split(" ");

            return pa[pa.length - 1] > pb[pb.length - 1]
              ? 1
              : pa[pa.length - 1] < pb[pb.length - 1]
              ? -1
              : 0;
          })
          .map(player => {
            return (
              <PlayerCard
                key={player.id}
                id={player.id}
                player={data.players[player.id]}
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
