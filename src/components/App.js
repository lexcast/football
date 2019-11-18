import React, { useState } from "react";
import PlayersGrid from "./PlayersGrid";
import TeamsFilter from "./TeamsFilter";
import data from "data";

const App = () => {
  const [team, setTeam] = useState();

  return (
    <div className="w-full h-full">
      <TeamsFilter clubs={data.clubs} team={team} setTeam={setTeam} />
      <PlayersGrid players={data.players} clubs={data.clubs} team={team} />
    </div>
  );
};

export default App;
