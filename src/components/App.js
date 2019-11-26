import React, { useState } from "react";
import PlayersGrid from "./PlayersGrid";
import SearchFilter from "./SearchFilter";
import TeamsFilter from "./TeamsFilter";
import PositionFilter from "./PositionFilter";
import Sorter from "./Sorter";
import Toggler from "./Toggler";
import data from "data";

const App = () => {
  const [search, setSearch] = useState("");
  const [team, setTeam] = useState();
  const [position, setPosition] = useState();
  const [sort, setSort] = useState("NAME");
  const [direction, setDirection] = useState(false);
  const [preference, setPreference] = useState();
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="w-full h-full">
      <SearchFilter search={search} setSearch={setSearch} />
      <TeamsFilter
        clubs={data.clubs}
        team={team}
        setTeam={setTeam}
        flags={data.flags}
      />
      <PositionFilter position={position} setPosition={setPosition} />
      <Sorter {...{ sort, setSort, direction, setDirection }} />
      <Toggler {...{ flipped, setFlipped, setPreference }} />
      <PlayersGrid
        players={data.players}
        clubs={data.clubs}
        search={search}
        team={team}
        position={position}
        sort={sort}
        direction={direction}
        preference={preference}
        flipped={flipped}
      />
    </div>
  );
};

export default App;
