import React from "react";
import { getLogo } from "utils/image";

const PlayerBack = ({ player, team, national }) => {
  const isGK = player.position === "GK";

  return (
    <div
      className="relative w-full h-full inline-flex items-center select-none transition-all"
      style={{
        backgroundColor: !isGK ? team.color1 : team.color2
      }}
    >
      {["ml-6", "ml-8"].map(m => (
        <div
          key={m}
          className={
            "border-l-4 absolute top-0 left-0 w-full h-full transition-all " + m
          }
          style={{
            borderColor: isGK ? team.color1 : team.color2
          }}
        />
      ))}

      <div
        className="font-bungee tracking-tighter font-black text-3xl opacity-75 m-auto transition-all"
        style={{
          color: isGK ? team.color1 : team.color2
        }}
      >
        {player.number}
      </div>

      <div className="absolute top-0 right-0 h-10 mr-6 mt-16 w-10 h-10 flex items-center transition-all">
        <img
          src={team.id === "retired" ? getLogo(national.id) : getLogo(team.id)}
          alt={team.id === "retired" ? national.title : team.title}
          className={
            "max-w-full max-h-full mx-auto transition-all " +
            (team.id !== "retired" ? "" : "filter-grayscale")
          }
        />
      </div>
    </div>
  );
};

export default React.memo(PlayerBack);
