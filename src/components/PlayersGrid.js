import React from "react";
import PlayerCard from "./PlayerCard";
import { positions } from "./PositionFilter";

const PlayersGrid = ({ search, team, position, players, clubs }) => {
  const playersFiltered = Object.keys(players)
    .map(key => {
      const player = players[key];
      player.id = key;

      return player;
    })
    .filter(
      player =>
        !position ||
        player.position === position ||
        (positions[position] && positions[position].includes(player.position))
    )
    .filter(
      player =>
        !team || player.clubs.includes(team) || player.nationalTeam === team
    )
    .filter(
      player =>
        !search ||
        player.id.includes(search.toLowerCase().replace(" ", "")) ||
        player.name.toLowerCase().includes(search.toLowerCase()) ||
        player.number === parseInt(search)
    )
    .sort((a, b) => {
      const pa = a.name.split(" ");
      const pb = b.name.split(" ");

      return pa[pa.length - 1] > pb[pb.length - 1]
        ? 1
        : pa[pa.length - 1] < pb[pb.length - 1]
        ? -1
        : 0;
    });

  return (
    <div className="bg-green-700 px-2 py-2 mt-4">
      <div
        style={{ minHeight: "250px" }}
        className="border-4 border-white px-6 py-5 flex flex-wrap justify-center relative overflow-hidden"
      >
        <div className="w-8 h-8 rounded-full border-4 border-white absolute top-0 left-0 -ml-4 -mt-4"></div>
        <div className="w-8 h-8 rounded-full border-4 border-white absolute top-0 right-0 -mr-4 -mt-4"></div>
        <div className="w-8 h-8 rounded-full border-4 border-white absolute bottom-0 left-0 -ml-4 -mb-4"></div>
        <div className="w-8 h-8 rounded-full border-4 border-white absolute bottom-0 right-0 -mr-4 -mb-4"></div>

        {playersFiltered.length > 0 ? (
          playersFiltered.map(player => {
            return (
              <PlayerCard
                key={player.id}
                id={player.id}
                player={players[player.id]}
                teamId={team || player.nationalTeam}
                clubs={clubs}
              />
            );
          })
        ) : (
          <div className="text-center flex-wrap text-green-500 flex flex-col justify-center items-center font-bungee font-bold">
            <div className="text-5xl leading-none">No players found</div>
            <div className="text-lg">
              Change filters criteria for other results
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(PlayersGrid);
