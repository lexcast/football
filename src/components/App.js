import React, { useState } from "react";
import PlayersGrid from "./PlayersGrid";
import SearchFilter from "./SearchFilter";
import TeamsFilter from "./TeamsFilter";
import PositionFilter from "./PositionFilter";
import Sorter from "./Sorter";
import data from "data";

const App = () => {
  const [search, setSearch] = useState("");
  const [team, setTeam] = useState();
  const [position, setPosition] = useState();
  const [sort, setSort] = useState("NAME");
  const [direction, setDirection] = useState(false);

  return (
    <div className="w-full h-full">
      <SearchFilter search={search} setSearch={setSearch} />
      <TeamsFilter clubs={data.clubs} team={team} setTeam={setTeam} />
      <PositionFilter position={position} setPosition={setPosition} />
      <Sorter {...{ sort, setSort, direction, setDirection }} />
      <PlayersGrid
        players={data.players}
        clubs={data.clubs}
        search={search}
        team={team}
        position={position}
        sort={sort}
        direction={direction}
      />
    </div>
  );
};

export default App;
