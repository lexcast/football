import React from "react";
import { getLogo } from "utils/image";

const PlayerBack = ({ player, team, national }) => {
  return (
    <div
      className="relative w-full h-full inline-flex items-center select-none transition-all"
      style={{
        backgroundColor: player.position !== "GK" ? team.color1 : team.color2
      }}
    >
      {["ml-6", "ml-8"].map(m => (
        <div
          key={m}
          className={"border-l-4 absolute top-0 left-0 w-full h-full " + m}
          style={{
            borderColor: player.position === "GK" ? team.color1 : team.color2
          }}
        />
      ))}

      <div
        className="font-bungee tracking-tighter font-black text-3xl opacity-75 m-auto"
        style={{
          color: player.position === "GK" ? team.color1 : team.color2
        }}
      >
        {player.number}
      </div>

      <img
        src={team.id === "retired" ? getLogo(national.id) : getLogo(team.id)}
        alt={team.id === "retired" ? national.title : team.title}
        className={
          "absolute top-0 right-0 h-10 mr-6 mt-16 " +
          (team.id !== "retired" ? "" : "filter-grayscale")
        }
      />
    </div>
  );
};

export default React.memo(PlayerBack);
