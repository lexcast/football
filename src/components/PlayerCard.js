import React, { useState, useEffect } from "react";
import Tilt from "./Tilt";
import Card from "./Card";
import tie from "assets/tie.svg";
import { getLogo, getPlayer, getSignature } from "utils/image";

const PlayerCard = ({ id, player, teamId, clubs }) => {
  const [selectedTeam, setSelectedTeam] = useState(teamId);

  useEffect(() => {
    setSelectedTeam(teamId);
  }, [teamId]);

  const national = clubs[player.nationalTeam];
  const team =
    selectedTeam === "RETIRED"
      ? {
          id: "retired",
          title: "Retired",
          color1: "#FFFFFF",
          color2: "#1A202C"
        }
      : clubs[selectedTeam];

  return (
    <div className="flex my-2 h-64">
      <Tilt
        className="w-48 h-64 z-10"
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
              backgroundImage: `url("${getPlayer(id, team.id)}")`
            }}
          >
            <p
              className="font-bungee tracking-tighter font-black text-4xl pt-1 pl-3"
              style={{ color: team.color2 }}
            >
              {player.number}
              <span className="text-base opacity-50">{player.position}</span>
            </p>
            <div className="w-4/5 h-full -mt-2">
              <img
                src={
                  team.id === "retired"
                    ? getLogo(national.id)
                    : getLogo(team.id)
                }
                alt={team.id === "retired" ? national.title : team.title}
                className="logo-filter opacity-25 -ml-10"
              />
            </div>
            <div
              className="absolute bottom-0 pb-3"
              style={{ color: team.color1 }}
            >
              <p
                className="font-bungee font-semibold tracking-tighter text-xl"
                style={{ backgroundColor: team.color2 }}
              >
                {player.name.split(" ").map((txt, i, arr) => {
                  if (arr.length !== i + 1) {
                    return (
                      <span className="text-sm" key={i}>
                        {txt}
                      </span>
                    );
                  }
                  return <span key={i}>{txt.replace("|", " ")}</span>;
                })}
              </p>
            </div>
            {player.signature && (
              <div className="w-20 h-20 flex items-center justify-center absolute right-0 bottom-0 pb-12">
                <img
                  src={getSignature(id)}
                  alt={id}
                  className="signature-filter max-w-full max-h-full"
                />
              </div>
            )}
          </div>
          <div
            className="relative w-full h-full inline-flex items-center select-none transition-all"
            style={{
              backgroundColor:
                player.position !== "GK" ? team.color1 : team.color2
            }}
          >
            {["ml-6", "ml-8"].map(m => (
              <div
                key={m}
                className={
                  "border-l-4 absolute top-0 left-0 w-full h-full " + m
                }
                style={{
                  borderColor:
                    player.position === "GK" ? team.color1 : team.color2
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
              src={
                team.id === "retired" ? getLogo(national.id) : getLogo(team.id)
              }
              alt={team.id === "retired" ? national.title : team.title}
              className={
                "absolute top-0 right-0 h-10 mr-6 mt-16 " +
                (team.id !== "retired" ? "" : "filter-grayscale")
              }
            />
          </div>
        </Card>
      </Tilt>
      <div className="overflow-x-hidden h-full scrollbar-hide transition-all">
        <div
          onClick={() => setSelectedTeam(player.nationalTeam)}
          className={
            "w-8 h-8 p-1 flex items-center cursor-pointer transition-all " +
            (selectedTeam === player.nationalTeam
              ? ""
              : "filter-grayscale hover:filter-none opacity-25 hover:opacity-100")
          }
        >
          <img
            src={getLogo(national.id)}
            alt={national.title}
            className="max-w-full max-h-full mx-auto"
          />
        </div>
        {player.clubs.map(c => {
          const club = clubs[c];

          return (
            <div
              key={c}
              onClick={() => setSelectedTeam(c)}
              className={
                "w-8 h-8 p-1 flex items-center cursor-pointer transition-all " +
                (selectedTeam === c
                  ? ""
                  : "filter-grayscale hover:filter-none opacity-25 hover:opacity-100")
              }
            >
              <img
                src={getLogo(club.id)}
                alt={club.title}
                className="max-w-full max-h-full mx-auto"
              />
            </div>
          );
        })}
        {player.retired && (
          <div
            onClick={() => setSelectedTeam("RETIRED")}
            className={
              "w-8 h-8 p-1 flex items-center cursor-pointer transition-all " +
              (selectedTeam === "RETIRED"
                ? "opacity-75"
                : "filter-grayscale hover:filter-none opacity-25 hover:opacity-75")
            }
          >
            <img
              src={tie}
              alt="Retired"
              className="max-w-full max-h-full mx-auto"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(PlayerCard);
