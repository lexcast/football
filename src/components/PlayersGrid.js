import React from "react";
import PlayerCard from "./PlayerCard";
import { positions } from "./PositionFilter";

const PlayersGrid = ({ search, team, position, players, clubs }) => {
  return (
    <div className="px-6 py-5 flex flex-wrap justify-center">
      {Object.keys(players)
        .map(key => {
          const player = players[key];
          player.id = key;

          return player;
        })
        .filter(
          player =>
            !position ||
            player.position === position ||
            (positions[position] &&
              positions[position].includes(player.position))
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
        })
        .map(player => {
          return (
            <PlayerCard
              key={player.id}
              id={player.id}
              player={players[player.id]}
              teamId={team || player.nationalTeam}
              clubs={clubs}
            />
          );
        })}
    </div>
  );
};

export default React.memo(PlayersGrid);
