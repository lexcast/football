import React from "react";
import Tilt from "./Tilt";
import Card from "./Card";

const PlayerCard = ({ player, grid, nationalTeams, clubs }) => {
  const team = grid.defaultClub
    ? clubs[grid.defaultClub]
    : nationalTeams[grid.defaultNational];

  return (
    <Tilt
      className="w-48 h-64"
      options={{
        max: 10,
        speed: 300,
        scale: 1.05,
        gyroscope: false,
        glare: true,
        "max-glare": 0.5
      }}
    >
      <Card>
        <div
          alt={player.name}
          className="w-full h-full bg-cover bg-no-repeat"
          style={{
            backgroundColor: team.color1,
            backgroundImage: `url("${player.image}")`
          }}
        >
          <p
            className="font-sans font-extrabold text-4xl pt-1 pl-3"
            style={{ color: team.color2 }}
          >
            {player.number}
          </p>
          <div className="overflow-hidden w-4/5 h-full -mt-2">
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
              className="font-mono font-bold text-xl"
              style={{ backgroundColor: team.color2 }}
            >
              {player.name}
            </p>
          </div>
        </div>
        <div
          className="w-full h-full rounded-lg inline-flex items-center"
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
  );
};

export default React.memo(PlayerCard);
