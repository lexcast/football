import React from "react";
import { getLogo } from "utils/image";

const TeamsFilter = ({ team, setTeam, clubs }) => {
  return (
    <div className="px-6 py-3 flex flex-wrap">
      {Object.keys(clubs)
        .map(key => clubs[key])
        .sort((a, b) => {
          const c1 = (a.country || "1") + a.title;
          const c2 = (b.country || "1") + b.title;

          return c1 > c2 ? 1 : c1 < c2 ? -1 : 0;
        })
        .map(t => {
          return (
            <div
              key={t.id}
              title={t.title}
              onClick={() => setTeam(team === t.id ? null : t.id)}
              className={
                "inline-flex items-center ml-1 mb-1 w-12 h-12 p-2 border-2 cursor-pointer rounded-full " +
                (team === t.id
                  ? "border-orange-400"
                  : "border-transparent bg-orange-200 hover:bg-orange-300")
              }
            >
              <img
                src={getLogo(t.id)}
                alt={t.title}
                className="max-h-full max-w-full mx-auto"
              />
            </div>
          );
        })}
    </div>
  );
};

export default React.memo(TeamsFilter);
