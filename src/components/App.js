import React, { useState } from "react";
import PlayersGrid from "./PlayersGrid";
import TeamsFilter from "./TeamsFilter";
import PositionFilter from "./PositionFilter";
import data from "data";

const App = () => {
  const [team, setTeam] = useState();
  const [position, setPosition] = useState();

  return (
    <div className="w-full h-full">
      <TeamsFilter clubs={data.clubs} team={team} setTeam={setTeam} />
      <PositionFilter position={position} setPosition={setPosition} />
      <PlayersGrid
        players={data.players}
        clubs={data.clubs}
        team={team}
        position={position}
      />
    </div>
  );
};

export default App;
