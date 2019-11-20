import React from "react";

const SearchFilter = ({ search, setSearch }) => {
  return (
    <div className="px-6 py-3 flex flex-wrap">
      <input
        placeholder="Search by name or number..."
        className={
          "font-bungee text-lg font-bold p-2 focus:bg-orange-400 outline-none placeholder-orange-600 focus:text-white focus:placeholder-orange-200" +
          " " +
          (search ? "text-white bg-orange-400" : "bg-transparent text-orange-600")
        }
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </div>
  );
};

export default React.memo(SearchFilter);
