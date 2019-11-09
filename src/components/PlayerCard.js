import React, { useState } from "react";
import Tilt from "./Tilt";
import Card from "./Card";
import tie from "assets/tie.svg";

const PlayerCard = ({ player, grid, clubs }) => {
  const [selectedTeam, setSelectedTeam] = useState(grid.defaultTeam);
  const national = clubs[player.nationalTeam];
  const team =
    selectedTeam === "RETIRED"
      ? {
          id: "retired",
          title: "Retired",
          color1: "#FFFFFF",
          color2: "#1A202C",
          logo: national.logo
        }
      : clubs[selectedTeam];

  return (
    <div className="flex mb-3">
      <Tilt
        className="w-48 h-64"
        options={{
          max: 10,
          speed: 300,
          scale: 1.05,
          gyroscope: false,
          glare: true,
          "max-glare": 0.4
        }}
      >
        <Card>
          <div
            className="w-full h-full bg-cover bg-no-repeat bg-center select-none transition-all"
            style={{
              backgroundColor: team.color1,
              backgroundImage: `url("${player.images[team.id]}")`
            }}
          >
            <p
              className="font-sans font-extrabold text-4xl pt-1 pl-3"
              style={{ color: team.color2 }}
            >
              {player.number}
            </p>
            <div className="w-4/5 h-full -mt-2">
              <img
                src={team.logo}
                alt={team.title}
                className="logo-filter opacity-25 -ml-10"
              />
            </div>
            <div
              className="absolute bottom-0 pb-3"
              style={{ color: team.color1 }}
            >
              <p
                className="font-mono font-bold text-xl uppercase"
                style={{ backgroundColor: team.color2 }}
              >
                {player.name}
              </p>
            </div>
          </div>
          <div
            className="w-full h-full inline-flex items-center select-none transition-all"
            style={{
              backgroundImage: `
              repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.7) 0, rgba(255, 255, 255, 0.7) 20px, transparent 20px, transparent 32px, rgba(255, 255, 255, 0.7) 32px, rgba(255, 255, 255, 0.7) 44px, transparent 44px, transparent 56px, rgba(255, 255, 255, 0.7) 56px, rgba(255, 255, 255, 0.7) 68px, transparent 68px, transparent 80px, rgba(255, 255, 255, 0.7) 0),
              repeating-linear-gradient(-45deg, rgba(255, 255, 255, 0.7) 0, rgba(255, 255, 255, 0.7) 20px, transparent 20px, transparent 32px, rgba(255, 255, 255, 0.7) 32px, rgba(255, 255, 255, 0.7) 44px, transparent 44px, transparent 56px, rgba(255, 255, 255, 0.7) 56px, rgba(255, 255, 255, 0.7) 68px, transparent 68px, transparent 80px, rgba(255, 255, 255, 0.7) 0),
              linear-gradient(to bottom right, ${team.color1}, ${team.color2})
            `
            }}
          >
            <img src={team.logo} alt={team.title} className="h-10 m-auto" />
          </div>
        </Card>
      </Tilt>
      <div>
        <div
          onClick={() => setSelectedTeam(player.nationalTeam)}
          className={
            "px-2 py-1 cursor-pointer transition-all " +
            (selectedTeam === player.nationalTeam
              ? ""
              : "filter-grayscale hover:filter-none opacity-25 hover:opacity-100")
          }
        >
          <img
            src={national.logo}
            alt={national.title}
            className="w-5 mx-auto"
          />
        </div>
        {player.clubs.map(c => {
          const club = clubs[c];

          return (
            <div
              key={c}
              onClick={() => setSelectedTeam(c)}
              className={
                "px-2 py-1 cursor-pointer transition-all " +
                (selectedTeam === c
                  ? ""
                  : "filter-grayscale hover:filter-none opacity-25 hover:opacity-100")
              }
            >
              <img src={club.logo} alt={club.title} className="w-5 mx-auto" />
            </div>
          );
        })}
        {player.retired && (
          <div
            onClick={() => setSelectedTeam("RETIRED")}
            className={
              "px-2 py-1 cursor-pointer transition-all " +
              (selectedTeam === "RETIRED"
                ? ""
                : "filter-grayscale hover:filter-none opacity-25 hover:opacity-100")
            }
          >
            <img src={tie} alt="Retired" className="w-5 mx-auto" />
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(PlayerCard);
